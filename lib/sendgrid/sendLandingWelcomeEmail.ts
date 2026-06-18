import sgMail from "@sendgrid/mail";

import { landingWelcomeEmailTemplateData } from "./landingWelcomeEmailTemplateData.js";
import type { SendGridNewsletterConfig } from "./readSendGridNewsletterConfig.js";
import type { NewsletterApiPayload } from "../newsletter/types.js";

const SEND_RETRY_ATTEMPTS = 3;
const SEND_RETRY_BASE_DELAY_MS = 400;

async function sendGridDelay(ms: number): Promise<void> {
  await new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export async function sendLandingWelcomeEmail(
  config: SendGridNewsletterConfig,
  payload: NewsletterApiPayload,
): Promise<void> {
  sgMail.setApiKey(config.apiKey);

  const to = payload.email.trim().toLowerCase();
  let lastError: unknown;

  for (let attempt = 1; attempt <= SEND_RETRY_ATTEMPTS; attempt += 1) {
    try {
      await sgMail.send({
        to,
        from: { email: config.fromEmail, name: config.fromName },
        replyTo: config.replyTo,
        templateId: config.welcomeTemplateId,
        dynamicTemplateData: landingWelcomeEmailTemplateData(payload),
      });
      return;
    } catch (error: unknown) {
      lastError = error;
      if (attempt < SEND_RETRY_ATTEMPTS) {
        await sendGridDelay(SEND_RETRY_BASE_DELAY_MS * attempt);
      }
    }
  }

  const message = "SendGrid: falha ao enviar e-mail de boas-vindas após tentativas";
  if (lastError instanceof Error) {
    throw new Error(`${message}: ${lastError.message}`);
  }
  throw new Error(message);
}
