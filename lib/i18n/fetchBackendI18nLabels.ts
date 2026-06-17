import type { I18nLabelsApiResponse } from "../../src/types/privacyPolicies";

const DEFAULT_BACKEND_URL = "https://likeme-back-end-one.vercel.app";

function backendBaseUrl(): string {
  const raw =
    process.env.BACKEND_URL?.trim() ||
    process.env.VITE_BACKEND_URL?.trim() ||
    DEFAULT_BACKEND_URL;
  return raw.replace(/\/+$/, "");
}

export async function fetchBackendI18nLabels(
  lang: string,
): Promise<I18nLabelsApiResponse> {
  const url = `${backendBaseUrl()}/api/i18n/labels?lang=${encodeURIComponent(lang)}`;
  const response = await fetch(url, {
    headers: { Accept: "application/json" },
  });

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

  return payload;
}
