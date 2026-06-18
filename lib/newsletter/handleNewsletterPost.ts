import { readSendGridNewsletterConfig } from "../sendgrid/readSendGridNewsletterConfig.js";
import { sendLandingWelcomeEmail } from "../sendgrid/sendLandingWelcomeEmail.js";
import { upsertMarketingContact } from "../sendgrid/upsertMarketingContact.js";
import { parseNewsletterPayload } from "./parseNewsletterPayload.js";
import type { NewsletterHandlerResult } from "./types.js";

export async function handleNewsletterPost(
  rawBody: unknown,
): Promise<NewsletterHandlerResult> {
  try {
    const payload = parseNewsletterPayload(rawBody);
    const config = readSendGridNewsletterConfig();

    if (config.marketingListId) {
      await upsertMarketingContact({
        apiKey: config.apiKey,
        listId: config.marketingListId,
        profileFieldId: config.marketingProfileFieldId,
        payload,
      });
    }

    try {
      await sendLandingWelcomeEmail(config, payload);
      return {
        status: 200,
        body: {
          ok: true,
          welcomeEmailSent: true,
          message: "Cadastro realizado com sucesso.",
        },
      };
    } catch (welcomeError) {
      console.error("Cadastro recebido, mas e-mail de boas-vindas falhou", {
        email: payload.email,
        error: welcomeError,
      });

      return {
        status: 200,
        body: {
          ok: true,
          welcomeEmailSent: false,
          message:
            "Cadastro realizado, mas o e-mail de boas-vindas não foi enviado. Verifique a configuração SendGrid na Vercel ou tente novamente em instantes.",
        },
      };
    }
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Erro ao processar cadastro";

    const isClientError =
      message.includes("inválido") ||
      message.includes("obrigatório") ||
      message.includes("Corpo");

    return {
      status: isClientError ? 400 : 502,
      body: { ok: false, error: message },
    };
  }
}
