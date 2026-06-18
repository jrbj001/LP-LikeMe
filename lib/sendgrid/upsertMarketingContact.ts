import { resolveFirstName } from "../newsletter/resolveFirstName.js";
import type { NewsletterApiPayload } from "../newsletter/types.js";
import { sendGridRequest } from "./sendGridRequest.js";

type UpsertMarketingContactInput = {
  apiKey: string;
  listId: string;
  profileFieldId?: string;
  payload: NewsletterApiPayload;
};

export async function upsertMarketingContact(
  input: UpsertMarketingContactInput,
): Promise<void> {
  const email = input.payload.email.trim().toLowerCase();
  const contact: Record<string, unknown> = {
    email,
    first_name: resolveFirstName(input.payload),
    last_name: input.payload.lastName.trim() || undefined,
  };

  const profile = input.payload.profile.trim();
  if (profile && input.profileFieldId) {
    contact.custom_fields = {
      [input.profileFieldId]: profile,
    };
  }

  await sendGridRequest(input.apiKey, "/v3/marketing/contacts", {
    method: "PUT",
    body: JSON.stringify({
      list_ids: [input.listId],
      contacts: [contact],
    }),
  });
}
