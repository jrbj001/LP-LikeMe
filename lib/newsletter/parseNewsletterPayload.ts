import type { NewsletterApiPayload } from "./types.js";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function parseNewsletterPayload(body: unknown): NewsletterApiPayload {
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
