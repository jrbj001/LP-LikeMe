import type { MailchimpConfig } from "./types.js";

export function readMailchimpConfig(): MailchimpConfig {
  const apiKey = process.env.MAILCHIMP_API_KEY?.trim();
  const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX?.trim();
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID?.trim();
  const welcomeCampaignId = process.env.MAILCHIMP_WELCOME_CAMPAIGN_ID?.trim();

  const missing: string[] = [];
  if (!apiKey) missing.push("MAILCHIMP_API_KEY");
  if (!serverPrefix) missing.push("MAILCHIMP_SERVER_PREFIX");
  if (!audienceId) missing.push("MAILCHIMP_AUDIENCE_ID");
  if (!welcomeCampaignId) missing.push("MAILCHIMP_WELCOME_CAMPAIGN_ID");

  if (missing.length > 0) {
    throw new Error(
      `Configuração Mailchimp incompleta (${missing.join(", ")})`,
    );
  }

  return {
    apiKey: apiKey!,
    serverPrefix: serverPrefix!,
    audienceId: audienceId!,
    welcomeCampaignId: welcomeCampaignId!,
  };
}
