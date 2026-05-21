import type { IncomingMessage, ServerResponse } from "node:http";
import type { Plugin } from "vite";
import { loadEnv } from "vite";
import { handleNewsletterPost } from "./lib/mailchimp/handleNewsletterPost";

function readJsonBody(req: IncomingMessage): Promise<unknown> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    req.on("data", (chunk: Buffer) => chunks.push(chunk));
    req.on("end", () => {
      try {
        const raw = Buffer.concat(chunks).toString("utf8");
        resolve(raw ? JSON.parse(raw) : {});
      } catch (error) {
        reject(error);
      }
    });
    req.on("error", reject);
  });
}

function sendJson(res: ServerResponse, status: number, body: unknown): void {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(body));
}

export function mailchimpApiPlugin(mode: string): Plugin {
  return {
    name: "mailchimp-api-dev",
    configureServer(server) {
      const env = loadEnv(mode, process.cwd(), "");
      Object.assign(process.env, env);

      server.middlewares.use(async (req, res, next) => {
        if (!req.url?.startsWith("/api/newsletter")) {
          next();
          return;
        }

        if (req.method === "OPTIONS") {
          res.statusCode = 204;
          res.end();
          return;
        }

        if (req.method !== "POST") {
          sendJson(res, 405, { ok: false, error: "Method not allowed" });
          return;
        }

        try {
          const body = await readJsonBody(req);
          const result = await handleNewsletterPost(body);
          sendJson(res, result.status, result.body);
        } catch (error) {
          console.error("Falha em /api/newsletter (dev)", { error });
          sendJson(res, 500, {
            ok: false,
            error: "Erro interno ao processar cadastro",
          });
        }
      });
    },
  };
}
