import { privacyPoliciesFromTranslation } from "../utils/privacyPoliciesFromTranslation";
import type {
  I18nLabelsApiResponse,
  PrivacyPoliciesLabels,
} from "../types/privacyPolicies";

const DEFAULT_LOCALE = "pt-BR";

async function fetchI18nLabels(locale: string): Promise<I18nLabelsApiResponse> {
  const response = await fetch(
    `/api/i18n/labels?lang=${encodeURIComponent(locale)}`,
    {
      headers: { Accept: "application/json" },
    },
  );

  let payload: I18nLabelsApiResponse | null = null;

  try {
    payload = (await response.json()) as I18nLabelsApiResponse;
  } catch {
    payload = null;
  }

  if (!response.ok || payload?.success === false || !payload?.data?.translation) {
    const reason =
      payload?.message ||
      `Falha ao carregar política de privacidade: HTTP ${response.status}`;
    throw new Error(reason);
  }

  return payload;
}

export async function fetchPrivacyPoliciesLabels(
  locale: string = DEFAULT_LOCALE,
): Promise<PrivacyPoliciesLabels> {
  const payload = await fetchI18nLabels(locale);
  const translation = payload.data?.translation;

  if (!translation || typeof translation !== "object" || Array.isArray(translation)) {
    throw new Error("Resposta i18n sem translation");
  }

  return privacyPoliciesFromTranslation(translation);
}
