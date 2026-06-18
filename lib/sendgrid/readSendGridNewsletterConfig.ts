export type SendGridNewsletterConfig = {
  apiKey: string;
  fromEmail: string;
  fromName: string;
  replyTo: string;
  welcomeTemplateId: string;
  marketingListId?: string;
  marketingProfileFieldId?: string;
};

function readRequiredEnv(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Configuração SendGrid incompleta (${name})`);
  }
  return value;
}

export function readSendGridNewsletterConfig(): SendGridNewsletterConfig {
  const marketingListId = process.env.SENDGRID_MARKETING_LIST_ID?.trim();
  const marketingProfileFieldId =
    process.env.SENDGRID_MARKETING_PROFILE_FIELD_ID?.trim();

  return {
    apiKey: readRequiredEnv("SENDGRID_API_KEY"),
    fromEmail: readRequiredEnv("SENDGRID_FROM_EMAIL"),
    fromName: process.env.SENDGRID_FROM_NAME?.trim() || "Like:Me",
    replyTo:
      process.env.SENDGRID_REPLY_TO?.trim() || "fabricio.guimaraes@likeme.global",
    welcomeTemplateId: readRequiredEnv("SENDGRID_TEMPLATE_ID_LANDING_WELCOME"),
    marketingListId: marketingListId || undefined,
    marketingProfileFieldId: marketingProfileFieldId || undefined,
  };
}
