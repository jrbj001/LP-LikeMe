import type { MailchimpConfig } from "./types";
import { subscriberHash } from "./subscriberHash";

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

export async function waitForListMember(
  config: MailchimpConfig,
  email: string,
  maxAttempts = 12,
): Promise<void> {
  const hash = subscriberHash(email);
  const url = `${mailchimpBaseUrl(config.serverPrefix)}/lists/${config.audienceId}/members/${hash}`;

  for (let attempt = 0; attempt < maxAttempts; attempt += 1) {
    const response = await fetch(url, {
      headers: { Authorization: authHeader(config.apiKey) },
    });

    if (response.ok) {
      const member = (await response.json()) as { status?: string };
      if (member.status === "subscribed") {
        return;
      }
    }

    await delay(600);
  }

  throw new Error(
    "Mailchimp: contato ainda não disponível para envio do e-mail de boas-vindas",
  );
}
