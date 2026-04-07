export const NEWSLETTER_INBOX_EMAIL =
  import.meta.env.VITE_NEWSLETTER_TO_EMAIL ?? "suporte@likeme.global";

export const NEWSLETTER_EMAIL_SUBJECT = "Like:me — novo cadastro (newsletter)";

export const NEWSLETTER_PROFILE_OPTIONS = [
  "Usuário",
  "Provedor de Saúde",
  "Representante comercial",
] as const;
