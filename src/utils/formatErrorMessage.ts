export function formatErrorMessage(value: unknown): string {
  if (typeof value === "string" && value.trim()) {
    return value;
  }

  if (value instanceof Error && value.message.trim()) {
    return value.message;
  }

  if (value && typeof value === "object") {
    const record = value as Record<string, unknown>;

    if (typeof record.message === "string" && record.message.trim()) {
      return record.message;
    }

    if (typeof record.error === "string" && record.error.trim()) {
      return record.error;
    }

    if (record.error && typeof record.error === "object") {
      return formatErrorMessage(record.error);
    }
  }

  return "Erro ao processar cadastro";
}
