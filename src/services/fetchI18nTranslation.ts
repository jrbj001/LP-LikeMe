import type { I18nLabelsApiResponse } from "../types/privacyPolicies";

export async function fetchI18nTranslation(
  locale = "pt-BR",
): Promise<Record<string, unknown>> {
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
      `Falha ao carregar traduções: HTTP ${response.status}`;
    throw new Error(reason);
  }

  const translation = payload.data.translation;
  if (typeof translation !== "object" || Array.isArray(translation)) {
    throw new Error("Resposta i18n sem translation");
  }

  return translation;
}
