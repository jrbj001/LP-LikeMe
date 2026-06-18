import { fetchI18nTranslation } from "./fetchI18nTranslation";
import { termsOfUseFromTranslation } from "../utils/termsOfUseFromTranslation";
import type { TermsOfUseLabels } from "../types/termsOfUse";

export async function fetchTermsOfUseLabels(
  locale = "pt-BR",
): Promise<TermsOfUseLabels> {
  const translation = await fetchI18nTranslation(locale);
  return termsOfUseFromTranslation(translation);
}
