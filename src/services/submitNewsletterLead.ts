export type NewsletterLeadPayload = {
  firstName: string;
  lastName: string;
  email: string;
  profile: string;
  message: string;
};

type NewsletterApiResponse = {
  ok: boolean;
  message?: string;
  error?: string;
  welcomeEmailSent?: boolean;
};

export async function submitNewsletterLead(
  payload: NewsletterLeadPayload,
): Promise<NewsletterApiResponse> {
  const response = await fetch("/api/newsletter", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  let data: NewsletterApiResponse | null = null;

  try {
    data = (await response.json()) as NewsletterApiResponse;
  } catch {
    data = null;
  }

  if (!response.ok || !data?.ok) {
    const reason =
      data?.error ?? `Envio do cadastro falhou: HTTP ${response.status}`;
    throw new Error(reason);
  }

  return data;
}
