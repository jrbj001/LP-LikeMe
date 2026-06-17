import { useCallback, useEffect, useState } from "react";
import { fetchPrivacyPoliciesLabels } from "../services/fetchPrivacyPoliciesLabels";
import type { PrivacyPoliciesLabels } from "../types/privacyPolicies";

type UsePrivacyPoliciesLabelsResult = {
  labels: PrivacyPoliciesLabels | null;
  loading: boolean;
  error: string | null;
  reload: () => void;
};

export function usePrivacyPoliciesLabels(
  locale = "pt-BR",
): UsePrivacyPoliciesLabelsResult {
  const [labels, setLabels] = useState<PrivacyPoliciesLabels | null>(null);
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
        const nextLabels = await fetchPrivacyPoliciesLabels(locale);
        if (!cancelled) {
          setLabels(nextLabels);
        }
      } catch (cause) {
        if (!cancelled) {
          setLabels(null);
          setError(
            cause instanceof Error
              ? cause.message
              : "Falha ao carregar política de privacidade",
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
