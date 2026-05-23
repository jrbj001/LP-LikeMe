import { ensureWelcomeCampaignContent } from "./ensureWelcomeCampaignContent";
import type { MailchimpConfig } from "./types";
import { waitForListMember } from "./waitForListMember";

function mailchimpBaseUrl(serverPrefix: string): string {
  return `https://${serverPrefix}.api.mailchimp.com/3.0`;
}

function authHeader(apiKey: string): string {
  const token = Buffer.from(`anystring:${apiKey}`).toString("base64");
  return `Basic ${token}`;
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function parseMailchimpError(response: Response): Promise<string> {
  try {
    const data = (await response.json()) as {
      detail?: string;
      errors?: { message: string }[];
    };
    return data.detail ?? data.errors?.[0]?.message ?? `HTTP ${response.status}`;
  } catch {
    return `HTTP ${response.status}`;
  }
}

async function sendTestEmailOnce(
  config: MailchimpConfig,
  email: string,
): Promise<void> {
  const url = `${mailchimpBaseUrl(config.serverPrefix)}/campaigns/${config.welcomeCampaignId}/actions/test`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: authHeader(config.apiKey),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      send_type: "html",
      test_emails: [email.trim().toLowerCase()],
    }),
  });

  if (response.status === 204) {
    return;
  }

  const reason = await parseMailchimpError(response);
  throw new Error(reason);
}

export async function sendWelcomeCampaign(
  config: MailchimpConfig,
  email: string,
): Promise<void> {
  await ensureWelcomeCampaignContent(config);
  await waitForListMember(config, email);

  const maxAttempts = 3;
  let lastError: Error | null = null;

  for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
      await sendTestEmailOnce(config, email);
      return;
    } catch (error) {
      lastError =
        error instanceof Error ? error : new Error("Falha ao enviar e-mail");
      if (attempt < maxAttempts) {
        await delay(600 * attempt);
      }
    }
  }

  throw new Error(
    `Mailchimp: falha ao enviar e-mail de boas-vindas (${lastError?.message ?? "erro desconhecido"})`,
    { cause: lastError },
  );
}
