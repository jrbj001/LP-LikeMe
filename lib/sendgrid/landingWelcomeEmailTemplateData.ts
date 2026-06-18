import { resolveFirstName } from "../newsletter/resolveFirstName.js";
import type { NewsletterApiPayload } from "../newsletter/types.js";

export function landingWelcomeEmailTemplateData(
  payload: NewsletterApiPayload,
): Record<string, string> {
  const firstName = resolveFirstName(payload);
  const lastName = payload.lastName.trim();
  const fullName = [firstName, lastName].filter(Boolean).join(" ").trim();
  const email = payload.email.trim().toLowerCase();

  return {
    firstName,
    lastName,
    fullName: fullName || firstName,
    email,
    profile: payload.profile.trim(),
    nome: firstName,
    sobrenome: lastName,
    nome_completo: fullName || firstName,
    perfil: payload.profile.trim(),
  };
}
