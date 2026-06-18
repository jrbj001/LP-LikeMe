import {
  TERMS_OF_USE_PLANS_SECTION_ID,
  TERMS_OF_USE_SECTION_COUNT,
} from "../constants/termsOfUseSections";
import type {
  TermsOfUseLabels,
  TermsOfUsePlansTable,
  TermsOfUsePlansTableRow,
  TermsOfUseSection,
} from "../types/termsOfUse";

function readString(record: Record<string, unknown>, key: string): string {
  const value = record[key];
  return typeof value === "string" ? value.trim() : "";
}

function readNumberArray(record: Record<string, unknown>, key: string): number[] {
  const value = record[key];
  if (!Array.isArray(value)) {
    return [];
  }

  return value.filter((item): item is number => typeof item === "number");
}

function readPlansTable(value: unknown): TermsOfUsePlansTable {
  if (value == null || typeof value !== "object" || Array.isArray(value)) {
    throw new Error("section5PlansTable inválida em termsOfUse");
  }

  const record = value as Record<string, unknown>;
  const headerColumns = record.headerColumns;
  const rows = record.rows;

  if (!Array.isArray(headerColumns) || !Array.isArray(rows)) {
    throw new Error("section5PlansTable incompleta em termsOfUse");
  }

  const parsedRows: TermsOfUsePlansTableRow[] = rows.map((row, index) => {
    if (row == null || typeof row !== "object" || Array.isArray(row)) {
      throw new Error(`Linha ${index + 1} inválida em section5PlansTable`);
    }

    const rowRecord = row as Record<string, unknown>;
    const feature = readString(rowRecord, "feature");
    const basic = readString(rowRecord, "basic");
    const premium = readString(rowRecord, "premium");
    const advanced = readString(rowRecord, "advanced");

    if (!feature || !basic || !premium || !advanced) {
      throw new Error(`Linha ${index + 1} incompleta em section5PlansTable`);
    }

    return { feature, basic, premium, advanced };
  });

  return {
    headerColumns: headerColumns.map((column) => String(column).trim()),
    rows: parsedRows,
  };
}

export function termsOfUseFromTranslation(
  translation: Record<string, unknown>,
): TermsOfUseLabels {
  const namespace = translation.termsOfUse;

  if (namespace == null || typeof namespace !== "object" || Array.isArray(namespace)) {
    throw new Error("Namespace termsOfUse ausente no bundle i18n");
  }

  const labels = namespace as Record<string, unknown>;
  const sections: TermsOfUseSection[] = [];

  for (let index = 1; index <= TERMS_OF_USE_SECTION_COUNT; index += 1) {
    const title = readString(labels, `section${index}Title`);
    if (!title) {
      throw new Error(`Seção ${index} sem título em termsOfUse`);
    }

    if (index === TERMS_OF_USE_PLANS_SECTION_ID) {
      sections.push({ id: index, title, content: null });
      continue;
    }

    const content = readString(labels, `section${index}Content`);
    if (!content) {
      throw new Error(`Seção ${index} incompleta em termsOfUse`);
    }

    sections.push({ id: index, title, content });
  }

  const titleLine1 = readString(labels, "titleLine1");
  const titleLine2 = readString(labels, "titleLine2");
  const dateLabel = readString(labels, "dateLabel");
  const intro = readString(labels, "intro");

  if (!titleLine1 || !titleLine2 || !dateLabel || !intro) {
    throw new Error("Campos hero ausentes em termsOfUse");
  }

  return {
    titleLine1,
    titleLine2,
    dateLabel,
    intro,
    defaultOpenSectionIds: readNumberArray(labels, "defaultOpenSectionIds"),
    section1HasIllustration: labels.section1HasIllustration === true,
    section5PlansSubtitle: readString(labels, "section5PlansSubtitle"),
    section5PlansTable: readPlansTable(labels.section5PlansTable),
    section5ContentBefore: readString(labels, "section5ContentBefore"),
    section5ContentAfter: readString(labels, "section5ContentAfter"),
    sections,
  };
}
