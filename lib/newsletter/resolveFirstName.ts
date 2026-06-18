import type { NewsletterApiPayload } from "./types.js";

export function resolveFirstName(payload: NewsletterApiPayload): string {
  const first = payload.firstName.trim();
  if (first) {
    return first;
  }

  const last = payload.lastName.trim();
  if (last) {
    return last.split(/\s+/)[0] ?? last;
  }

  return "visitante";
}
