import {
  NEWSLETTER_EMAIL_SUBJECT,
  NEWSLETTER_INBOX_EMAIL,
} from "../constants/newsletter";

export type NewsletterLeadPayload = {
  firstName: string;
  lastName: string;
  email: string;
  profile: string;
  message: string;
};

const FORMSUBMIT_AJAX_BASE = "https://formsubmit.co/ajax";

export async function submitNewsletterLead(
  payload: NewsletterLeadPayload,
): Promise<void> {
  const endpoint = `${FORMSUBMIT_AJAX_BASE}/${encodeURIComponent(NEWSLETTER_INBOX_EMAIL)}`;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      primeiroNome: payload.firstName || "—",
      sobrenome: payload.lastName || "—",
      emailContato: payload.email,
      perfil: payload.profile,
      mensagem: payload.message || "—",
      _subject: NEWSLETTER_EMAIL_SUBJECT,
      _template: "table",
      _captcha: "false",
    }),
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(`Envio do cadastro falhou: HTTP ${response.status}`, {
      cause: body,
    });
  }
}
