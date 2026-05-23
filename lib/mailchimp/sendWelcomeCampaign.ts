import { sendWelcomeEmailToSubscriber } from "./sendWelcomeEmail.js";
import type { MailchimpConfig } from "./types.js";
import { waitForListMember } from "./waitForListMember.js";

export async function sendWelcomeCampaign(
  config: MailchimpConfig,
  email: string,
): Promise<void> {
  await waitForListMember(config, email);
  await sendWelcomeEmailToSubscriber(config, email);
}
