import { useCallback, useEffect, useState } from "react";
import { fetchTermsOfUseLabels } from "../services/fetchTermsOfUseLabels";
import type { TermsOfUseLabels } from "../types/termsOfUse";

type UseTermsOfUseLabelsResult = {
  labels: TermsOfUseLabels | null;
  loading: boolean;
  error: string | null;
  reload: () => void;
};

export function useTermsOfUseLabels(locale = "pt-BR"): UseTermsOfUseLabelsResult {
  const [labels, setLabels] = useState<TermsOfUseLabels | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [reloadToken, setReloadToken] = useState(0);

  const reload = useCallback(() => {
    setReloadToken((value) => value + 1);
  }, []);

  useEffect(() => {
    let cancelled = false;

    const load = async () => {
      setLoading(true);
      setError(null);

      try {
        const nextLabels = await fetchTermsOfUseLabels(locale);
        if (!cancelled) {
          setLabels(nextLabels);
        }
      } catch (cause) {
        if (!cancelled) {
          setLabels(null);
          setError(
            cause instanceof Error
              ? cause.message
              : "Falha ao carregar termos e condições",
          );
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    void load();

    return () => {
      cancelled = true;
    };
  }, [locale, reloadToken]);

  return { labels, loading, error, reload };
}
