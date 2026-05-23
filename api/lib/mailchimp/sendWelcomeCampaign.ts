import { sendWelcomeEmailToSubscriber } from "./sendWelcomeEmail";
import type { MailchimpConfig } from "./types";
import { waitForListMember } from "./waitForListMember";

export async function sendWelcomeCampaign(
  config: MailchimpConfig,
  email: string,
): Promise<void> {
  await waitForListMember(config, email);
  await sendWelcomeEmailToSubscriber(config, email);
}
