import type { MailchimpConfig } from "./types";

export const WELCOME_EMAIL_SUBJECT = "Que bom ter você no Like:Me";

export const WELCOME_EMAIL_PREVIEW = "Que bom ter você no Like:Me";

const PERSONALIZATION_REPLACEMENTS: ReadonlyArray<[string, string]> = [
  ["[NOME]", "*|FNAME|*"],
  ["<< Test Nome >>", "*|FNAME|*"],
  ["<< Test First Name >>", "*|FNAME|*"],
  ["<< Nome >>", "*|FNAME|*"],
];

function applyPersonalizationTags(content: string): string {
  let result = content;
  for (const [from, to] of PERSONALIZATION_REPLACEMENTS) {
    result = result.replaceAll(from, to);
  }
  return result;
}

function mailchimpBaseUrl(serverPrefix: string): string {
  return `https://${serverPrefix}.api.mailchimp.com/3.0`;
}

function authHeader(apiKey: string): string {
  const token = Buffer.from(`anystring:${apiKey}`).toString("base64");
  return `Basic ${token}`;
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function mailchimpRequest(
  config: MailchimpConfig,
  path: string,
  init: RequestInit = {},
): Promise<Response> {
  return fetch(`${mailchimpBaseUrl(config.serverPrefix)}${path}`, {
    ...init,
    headers: {
      Authorization: authHeader(config.apiKey),
      "Content-Type": "application/json",
      ...init.headers,
    },
  });
}

async function parseMailchimpError(response: Response): Promise<string> {
  try {
    const data = (await response.json()) as {
      detail?: string;
      errors?: { message: string }[];
    };
    return data.detail ?? data.errors?.[0]?.message ?? `HTTP ${response.status}`;
  } catch {
    return `HTTP ${response.status}`;
  }
}

function isRecipientsNotReadyError(message: string): boolean {
  return message.toLowerCase().includes("recipients not ready");
}

let templateContentCache: { html: string; plainText: string } | null = null;

async function loadTemplateContent(
  config: MailchimpConfig,
): Promise<{ html: string; plainText: string }> {
  if (templateContentCache) {
    return templateContentCache;
  }

  const response = await mailchimpRequest(
    config,
    `/campaigns/${config.welcomeCampaignId}/content`,
  );

  if (!response.ok) {
    const reason = await parseMailchimpError(response);
    throw new Error(`Mailchimp: falha ao carregar template (${reason})`);
  }

  const content = (await response.json()) as {
    html?: string;
    plain_text?: string;
  };

  templateContentCache = {
    html: applyPersonalizationTags(content.html ?? ""),
    plainText: applyPersonalizationTags(content.plain_text ?? ""),
  };

  return templateContentCache;
}

export async function syncWelcomeTemplateContent(
  config: MailchimpConfig,
): Promise<void> {
  const response = await mailchimpRequest(
    config,
    `/campaigns/${config.welcomeCampaignId}/content`,
  );

  if (!response.ok) {
    return;
  }

  const content = (await response.json()) as {
    html?: string;
    plain_text?: string;
  };

  const html = content.html ?? "";
  const plainText = content.plain_text ?? "";
  const normalizedHtml = applyPersonalizationTags(html);
  const normalizedPlain = applyPersonalizationTags(plainText);

  if (html === normalizedHtml && plainText === normalizedPlain) {
    templateContentCache = { html: normalizedHtml, plainText: normalizedPlain };
    return;
  }

  const putResponse = await mailchimpRequest(
    config,
    `/campaigns/${config.welcomeCampaignId}/content`,
    {
      method: "PUT",
      body: JSON.stringify({
        html: normalizedHtml,
        plain_text: normalizedPlain,
      }),
    },
  );

  if (putResponse.ok) {
    templateContentCache = { html: normalizedHtml, plainText: normalizedPlain };
  }
}

async function deleteCampaign(
  config: MailchimpConfig,
  campaignId: string,
): Promise<void> {
  await mailchimpRequest(config, `/campaigns/${campaignId}`, {
    method: "DELETE",
  }).catch(() => undefined);
}

async function deleteSegment(
  config: MailchimpConfig,
  segmentId: number,
): Promise<void> {
  await mailchimpRequest(
    config,
    `/lists/${config.audienceId}/segments/${segmentId}`,
    { method: "DELETE" },
  ).catch(() => undefined);
}

async function createStaticSegment(
  config: MailchimpConfig,
  email: string,
): Promise<number> {
  const normalizedEmail = email.trim().toLowerCase();
  const response = await mailchimpRequest(
    config,
    `/lists/${config.audienceId}/segments`,
    {
      method: "POST",
      body: JSON.stringify({
        name: `LP welcome ${Date.now()}`,
        static_segment: [normalizedEmail],
      }),
    },
  );

  if (!response.ok) {
    const reason = await parseMailchimpError(response);
    throw new Error(`Mailchimp: falha ao criar segmento (${reason})`);
  }

  const segment = (await response.json()) as { id?: number; member_count?: number };
  if (!segment.id) {
    throw new Error("Mailchimp: resposta sem id do segmento");
  }

  return segment.id;
}

async function createSegmentedCampaign(
  config: MailchimpConfig,
  segmentId: number,
): Promise<string> {
  const response = await mailchimpRequest(config, "/campaigns", {
    method: "POST",
    body: JSON.stringify({
      type: "regular",
      recipients: {
        list_id: config.audienceId,
        segment_opts: {
          saved_segment_id: segmentId,
        },
      },
      settings: {
        subject_line: WELCOME_EMAIL_SUBJECT,
        preview_text: WELCOME_EMAIL_PREVIEW,
        title: "LP Boas-Vindas (envio automático)",
        from_name: "Like:Me",
        reply_to: "fabricio.guimaraes@likeme.global",
      },
    }),
  });

  if (!response.ok) {
    const reason = await parseMailchimpError(response);
    throw new Error(`Mailchimp: falha ao criar envio (${reason})`);
  }

  const campaign = (await response.json()) as { id?: string };
  if (!campaign.id) {
    throw new Error("Mailchimp: resposta sem id da campanha de envio");
  }

  return campaign.id;
}

async function waitForCampaignReady(
  config: MailchimpConfig,
  campaignId: string,
  maxAttempts = 15,
): Promise<void> {
  for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
    const [campaignResponse, checklistResponse] = await Promise.all([
      mailchimpRequest(config, `/campaigns/${campaignId}`),
      mailchimpRequest(config, `/campaigns/${campaignId}/send-checklist`),
    ]);

    if (campaignResponse.ok && checklistResponse.ok) {
      const campaign = (await campaignResponse.json()) as {
        recipients?: { recipient_count?: number };
      };
      const checklist = (await checklistResponse.json()) as {
        is_ready?: boolean;
      };

      const recipientCount = campaign.recipients?.recipient_count ?? 0;
      if (recipientCount > 0 && checklist.is_ready) {
        return;
      }
    }

    await delay(800);
  }

  throw new Error(
    "Mailchimp: destinatários do e-mail ainda não ficaram prontos para envio",
  );
}

async function sendCampaignWhenReady(
  config: MailchimpConfig,
  campaignId: string,
): Promise<void> {
  const maxSendAttempts = 4;

  for (let attempt = 1; attempt <= maxSendAttempts; attempt += 1) {
    await waitForCampaignReady(config, campaignId);

    const sendResponse = await mailchimpRequest(
      config,
      `/campaigns/${campaignId}/actions/send`,
      { method: "POST" },
    );

    if (sendResponse.status === 204) {
      return;
    }

    const reason = await parseMailchimpError(sendResponse);
    if (isRecipientsNotReadyError(reason) && attempt < maxSendAttempts) {
      await delay(1000 * attempt);
      continue;
    }

    throw new Error(`Mailchimp: falha ao enviar e-mail (${reason})`);
  }
}

export async function sendWelcomeEmailToSubscriber(
  config: MailchimpConfig,
  email: string,
): Promise<void> {
  await syncWelcomeTemplateContent(config);
  const template = await loadTemplateContent(config);

  const segmentId = await createStaticSegment(config, email);
  const sendCampaignId = await createSegmentedCampaign(config, segmentId);

  try {
    const contentResponse = await mailchimpRequest(
      config,
      `/campaigns/${sendCampaignId}/content`,
      {
        method: "PUT",
        body: JSON.stringify({
          html: template.html,
          plain_text: template.plainText,
        }),
      },
    );

    if (!contentResponse.ok) {
      const reason = await parseMailchimpError(contentResponse);
      throw new Error(`Mailchimp: falha ao aplicar conteúdo (${reason})`);
    }

    await sendCampaignWhenReady(config, sendCampaignId);
  } finally {
    await deleteCampaign(config, sendCampaignId);
    await deleteSegment(config, segmentId);
  }
}
