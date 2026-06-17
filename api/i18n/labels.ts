import { fetchBackendI18nLabels } from "../../lib/i18n/fetchBackendI18nLabels.js";
import { formatErrorMessage } from "../../lib/formatErrorMessage.js";

export const config = {
  maxDuration: 15,
};

type VercelRequest = {
  method?: string;
  query?: Record<string, string | string[] | undefined>;
};

type VercelResponse = {
  status: (code: number) => VercelResponse;
  json: (body: unknown) => void;
  setHeader: (name: string, value: string) => void;
};

function readLang(query: VercelRequest["query"]): string {
  const raw = query?.lang;
  if (Array.isArray(raw)) {
    return raw[0]?.trim() || "pt-BR";
  }
  return typeof raw === "string" && raw.trim() ? raw.trim() : "pt-BR";
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
): Promise<void> {
  try {
    if (req.method !== "GET") {
      res.status(405).json({ success: false, message: "Method not allowed" });
      return;
    }

    const payload = await fetchBackendI18nLabels(readLang(req.query));
    res.setHeader("Cache-Control", "no-store");
    res.status(200).json(payload);
  } catch (error) {
    console.error("Falha em /api/i18n/labels", { error });
    res.status(502).json({
      success: false,
      message: formatErrorMessage(error),
    });
  }
}
