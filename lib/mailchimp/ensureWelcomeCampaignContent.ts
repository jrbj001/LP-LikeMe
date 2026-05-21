import type { MailchimpConfig } from "./types";

const PERSONALIZATION_PLACEHOLDER = "[NOME]";
const MAILCHIMP_FNAME_TAG = "*|FNAME|*";

let personalizationSynced = false;

function mailchimpBaseUrl(serverPrefix: string): string {
  return `https://${serverPrefix}.api.mailchimp.com/3.0`;
}

function authHeader(apiKey: string): string {
  const token = Buffer.from(`anystring:${apiKey}`).toString("base64");
  return `Basic ${token}`;
}

function readWelcomeCampaignId(): string {
  const campaignId = process.env.MAILCHIMP_WELCOME_CAMPAIGN_ID?.trim();
  if (!campaignId) {
    throw new Error("MAILCHIMP_WELCOME_CAMPAIGN_ID não configurado");
  }
  return campaignId;
}

export async function ensureWelcomeCampaignContent(
  config: MailchimpConfig,
): Promise<void> {
  if (personalizationSynced) {
    return;
  }

  const campaignId = readWelcomeCampaignId();
  const contentUrl = `${mailchimpBaseUrl(config.serverPrefix)}/campaigns/${campaignId}/content`;

  const getResponse = await fetch(contentUrl, {
    headers: { Authorization: authHeader(config.apiKey) },
  });

  if (!getResponse.ok) {
    return;
  }

  const content = (await getResponse.json()) as {
    html?: string;
    plain_text?: string;
  };

  const html = content.html ?? "";
  if (!html.includes(PERSONALIZATION_PLACEHOLDER)) {
    personalizationSynced = true;
    return;
  }

  const putResponse = await fetch(contentUrl, {
    method: "PUT",
    headers: {
      Authorization: authHeader(config.apiKey),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      html: html.replaceAll(PERSONALIZATION_PLACEHOLDER, MAILCHIMP_FNAME_TAG),
      plain_text: (content.plain_text ?? "").replaceAll(
        PERSONALIZATION_PLACEHOLDER,
        MAILCHIMP_FNAME_TAG,
      ),
    }),
  });

  if (putResponse.ok) {
    personalizationSynced = true;
  }
}
