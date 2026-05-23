import { handleNewsletterPost } from "../lib/mailchimp/handleNewsletterPost.js";
import { formatErrorMessage } from "../lib/formatErrorMessage.js";

export const config = {
  maxDuration: 30,
};

function parseRequestBody(body: unknown): unknown {
  if (typeof body === "string") {
    try {
      return JSON.parse(body) as unknown;
    } catch {
      return body;
    }
  }
  return body;
}

type VercelRequest = {
  method?: string;
  body?: unknown;
};

type VercelResponse = {
  status: (code: number) => VercelResponse;
  json: (body: unknown) => void;
};

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
): Promise<void> {
  try {
    if (req.method !== "POST") {
      res.status(405).json({ ok: false, error: "Method not allowed" });
      return;
    }

    const result = await handleNewsletterPost(parseRequestBody(req.body));
    res.status(result.status).json(result.body);
  } catch (error) {
    console.error("Falha não tratada em /api/newsletter", { error });
    res.status(500).json({
      ok: false,
      error: formatErrorMessage(error),
    });
  }
}
