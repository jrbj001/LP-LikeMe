import { PRIVACY_POLICY_SECTION_COUNT } from "../constants/privacyPolicySections";
import type {
  PrivacyPoliciesLabels,
  PrivacyPolicySection,
} from "../types/privacyPolicies";

function readString(
  record: Record<string, unknown>,
  key: string,
): string {
  const value = record[key];
  return typeof value === "string" ? value.trim() : "";
}

export function privacyPoliciesFromTranslation(
  translation: Record<string, unknown>,
): PrivacyPoliciesLabels {
  const namespace = translation.privacyPolicies;

  if (namespace == null || typeof namespace !== "object" || Array.isArray(namespace)) {
    throw new Error("Namespace privacyPolicies ausente no bundle i18n");
  }

  const labels = namespace as Record<string, unknown>;
  const sections: PrivacyPolicySection[] = [];

  for (let index = 1; index <= PRIVACY_POLICY_SECTION_COUNT; index += 1) {
    const title = readString(labels, `section${index}Title`);
    const content = readString(labels, `section${index}Content`);

    if (!title || !content) {
      throw new Error(`Seção ${index} incompleta em privacyPolicies`);
    }

    sections.push({ id: index, title, content });
  }

  const title = readString(labels, "title");
  const intro = readString(labels, "intro");

  if (!title || !intro) {
    throw new Error("Campos title ou intro ausentes em privacyPolicies");
  }

  return {
    title,
    description: readString(labels, "description"),
    intro,
    introTitle: readString(labels, "introTitle"),
    disclaimer: readString(labels, "disclaimer"),
    sections,
  };
}

export type PrivacyIntroParts = {
  dateLine: string | null;
  paragraphs: string[];
};

export function privacyIntroParts(intro: string): PrivacyIntroParts {
  const blocks = intro
    .split(/\n\n+/)
    .map((block) => block.trim())
    .filter(Boolean);

  if (blocks[0]?.startsWith("Atualizada em:")) {
    return {
      dateLine: blocks[0],
      paragraphs: blocks.slice(1),
    };
  }

  return {
    dateLine: null,
    paragraphs: blocks,
  };
}
