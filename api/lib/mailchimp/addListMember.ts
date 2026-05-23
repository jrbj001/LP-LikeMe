import { MAILCHIMP_TAG_LANDING } from "./constants";
import { resolveFirstName } from "./resolveFirstName";
import type { MailchimpConfig, MailchimpMemberBody, NewsletterApiPayload } from "./types";
import { subscriberHash } from "./subscriberHash";

function mailchimpBaseUrl(serverPrefix: string): string {
  return `https://${serverPrefix}.api.mailchimp.com/3.0`;
}

function authHeader(apiKey: string): string {
  const token = Buffer.from(`anystring:${apiKey}`).toString("base64");
  return `Basic ${token}`;
}

function buildMemberBody(payload: NewsletterApiPayload): MailchimpMemberBody {
  const profileTag = payload.profile
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

  const tags = [MAILCHIMP_TAG_LANDING];
  if (profileTag) {
    tags.push(`perfil-${profileTag}`);
  }

  return {
    email_address: payload.email.trim().toLowerCase(),
    status: "subscribed",
    merge_fields: {
      FNAME: resolveFirstName(payload),
      LNAME: payload.lastName.trim() || "—",
    },
    tags,
  };
}

async function parseMailchimpError(response: Response): Promise<string> {
  try {
    const data = (await response.json()) as { detail?: string; title?: string };
    return data.detail ?? data.title ?? `HTTP ${response.status}`;
  } catch {
    return `HTTP ${response.status}`;
  }
}

async function requestMailchimp(
  config: MailchimpConfig,
  path: string,
  init: RequestInit,
): Promise<Response> {
  const url = `${mailchimpBaseUrl(config.serverPrefix)}${path}`;
  return fetch(url, {
    ...init,
    headers: {
      Authorization: authHeader(config.apiKey),
      "Content-Type": "application/json",
      ...init.headers,
    },
  });
}

async function updateExistingMember(
  config: MailchimpConfig,
  payload: NewsletterApiPayload,
  memberBody: MailchimpMemberBody,
): Promise<void> {
  const hash = subscriberHash(payload.email);
  const path = `/lists/${config.audienceId}/members/${hash}`;

  const patchResponse = await requestMailchimp(config, path, {
    method: "PATCH",
    body: JSON.stringify({
      merge_fields: memberBody.merge_fields,
      status: "subscribed",
    }),
  });

  if (!patchResponse.ok) {
    const reason = await parseMailchimpError(patchResponse);
    throw new Error(`Mailchimp: falha ao atualizar contato (${reason})`);
  }

  const tagsResponse = await requestMailchimp(
    config,
    `${path}/tags`,
    {
      method: "POST",
      body: JSON.stringify({
        tags: memberBody.tags.map((name) => ({ name, status: "active" })),
      }),
    },
  );

  if (!tagsResponse.ok) {
    const reason = await parseMailchimpError(tagsResponse);
    throw new Error(`Mailchimp: falha ao aplicar tags (${reason})`);
  }
}

export async function addListMember(
  config: MailchimpConfig,
  payload: NewsletterApiPayload,
): Promise<void> {
  const memberBody = buildMemberBody(payload);
  const path = `/lists/${config.audienceId}/members`;

  const response = await requestMailchimp(config, path, {
    method: "POST",
    body: JSON.stringify(memberBody),
  });

  if (response.ok) {
    return;
  }

  const errorBody = await response.text().catch(() => "");

  if (response.status === 400 && errorBody.includes("Member Exists")) {
    await updateExistingMember(config, payload, memberBody);
    return;
  }

  const reason = await parseMailchimpError(
    new Response(errorBody, { status: response.status }),
  );
  throw new Error(`Mailchimp: falha ao inscrever contato (${reason})`, {
    cause: errorBody,
  });
}
