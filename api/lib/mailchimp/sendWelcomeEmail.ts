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

async function createSegmentedCampaign(
  config: MailchimpConfig,
  email: string,
): Promise<string> {
  const response = await mailchimpRequest(config, "/campaigns", {
    method: "POST",
    body: JSON.stringify({
      type: "regular",
      recipients: {
        list_id: config.audienceId,
        segment_opts: {
          match: "all",
          conditions: [
            {
              condition_type: "EmailAddress",
              field: "EMAIL",
              op: "is",
              value: email.trim().toLowerCase(),
            },
          ],
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

export async function sendWelcomeEmailToSubscriber(
  config: MailchimpConfig,
  email: string,
): Promise<void> {
  await syncWelcomeTemplateContent(config);
  const template = await loadTemplateContent(config);

  const sendCampaignId = await createSegmentedCampaign(config, email);

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

    const sendResponse = await mailchimpRequest(
      config,
      `/campaigns/${sendCampaignId}/actions/send`,
      { method: "POST" },
    );

    if (sendResponse.status !== 204) {
      const reason = await parseMailchimpError(sendResponse);
      throw new Error(`Mailchimp: falha ao enviar e-mail (${reason})`);
    }
  } finally {
    await deleteCampaign(config, sendCampaignId);
  }
}
