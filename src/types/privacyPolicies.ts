export type PrivacyPoliciesLabels = {
  title: string;
  description: string;
  intro: string;
  introTitle: string;
  disclaimer: string;
  sections: PrivacyPolicySection[];
};

export type PrivacyPolicySection = {
  id: number;
  title: string;
  content: string;
};

export type I18nLabelsApiPayload = {
  version?: string;
  etag?: string;
  updatedAt?: string;
  translation?: Record<string, unknown>;
};

export type I18nLabelsApiResponse = {
  success?: boolean;
  data?: I18nLabelsApiPayload;
  message?: string;
};
