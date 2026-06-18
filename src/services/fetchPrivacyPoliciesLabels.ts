import { fetchI18nTranslation } from "./fetchI18nTranslation";
import { privacyPoliciesFromTranslation } from "../utils/privacyPoliciesFromTranslation";
import type { PrivacyPoliciesLabels } from "../types/privacyPolicies";

export async function fetchPrivacyPoliciesLabels(
  locale: string = "pt-BR",
): Promise<PrivacyPoliciesLabels> {
  const translation = await fetchI18nTranslation(locale);
  return privacyPoliciesFromTranslation(translation);
}
