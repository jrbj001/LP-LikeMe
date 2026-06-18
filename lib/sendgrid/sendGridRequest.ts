export async function sendGridRequest<T>(
  apiKey: string,
  path: string,
  init?: RequestInit,
): Promise<T> {
  const response = await fetch(`https://api.sendgrid.com${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
  });

  const text = await response.text();
  if (!response.ok) {
    throw new Error(`SendGrid ${path} falhou (${response.status}): ${text}`);
  }

  return text ? (JSON.parse(text) as T) : ({} as T);
}
