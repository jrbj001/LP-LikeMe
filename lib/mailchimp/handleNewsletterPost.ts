import { addListMember } from "./addListMember";
import { sendWelcomeCampaign } from "./sendWelcomeCampaign";
import type { MailchimpConfig, NewsletterApiPayload } from "./types";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readMailchimpConfig(): MailchimpConfig {
  const apiKey = process.env.MAILCHIMP_API_KEY?.trim();
  const serverPrefix = process.env.MAILCHIMP_SERVER_PREFIX?.trim();
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID?.trim();

  if (!apiKey || !serverPrefix || !audienceId) {
    throw new Error(
      "Configuração Mailchimp incompleta (MAILCHIMP_API_KEY, MAILCHIMP_SERVER_PREFIX, MAILCHIMP_AUDIENCE_ID)",
    );
  }

  return { apiKey, serverPrefix, audienceId };
}

function parsePayload(body: unknown): NewsletterApiPayload {
  if (!body || typeof body !== "object") {
    throw new Error("Corpo da requisição inválido");
  }

  const record = body as Record<string, unknown>;
  const email = typeof record.email === "string" ? record.email.trim() : "";
  const profile = typeof record.profile === "string" ? record.profile.trim() : "";

  if (!EMAIL_PATTERN.test(email)) {
    throw new Error("E-mail inválido");
  }

  if (!profile) {
    throw new Error("Perfil é obrigatório");
  }

  return {
    firstName: typeof record.firstName === "string" ? record.firstName : "",
    lastName: typeof record.lastName === "string" ? record.lastName : "",
    email,
    profile,
    message: typeof record.message === "string" ? record.message : "",
  };
}

export type NewsletterHandlerResult = {
  status: number;
  body: { ok: boolean; message?: string; error?: string };
};

export async function handleNewsletterPost(
  rawBody: unknown,
): Promise<NewsletterHandlerResult> {
  try {
    const payload = parsePayload(rawBody);
    const config = readMailchimpConfig();
    await addListMember(config, payload);

    try {
      await sendWelcomeCampaign(config, payload.email);
    } catch (welcomeError) {
      console.error("Cadastro na lista OK, mas e-mail de boas-vindas falhou", {
        email: payload.email,
        error: welcomeError,
      });
      return {
        status: 200,
        body: {
          ok: true,
          message:
            "Cadastro realizado. O e-mail de boas-vindas pode demorar alguns minutos ou verifique o spam.",
        },
      };
    }

    return {
      status: 200,
      body: { ok: true, message: "Cadastro realizado com sucesso." },
    };
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
