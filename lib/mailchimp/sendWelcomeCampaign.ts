import { ensureWelcomeCampaignContent } from "./ensureWelcomeCampaignContent";
import type { MailchimpConfig } from "./types";

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
    throw new Error(
      "MAILCHIMP_WELCOME_CAMPAIGN_ID não configurado (campanha 01.1 Boas-Vindas)",
    );
  }
  return campaignId;
}

export async function sendWelcomeCampaign(
  config: MailchimpConfig,
  email: string,
): Promise<void> {
  await ensureWelcomeCampaignContent(config);

  const campaignId = readWelcomeCampaignId();
  const url = `${mailchimpBaseUrl(config.serverPrefix)}/campaigns/${campaignId}/actions/test`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: authHeader(config.apiKey),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      send_type: "html",
      test_emails: [email.trim().toLowerCase()],
    }),
  });

  if (response.status === 204) {
    return;
  }

  let reason = `HTTP ${response.status}`;
  try {
    const data = (await response.json()) as { detail?: string; errors?: { message: string }[] };
    reason = data.detail ?? data.errors?.[0]?.message ?? reason;
  } catch {
    // resposta vazia
  }

  throw new Error(`Mailchimp: falha ao enviar e-mail de boas-vindas (${reason})`);
}
