export type TermsOfUsePlansTableRow = {
  feature: string;
  basic: string;
  premium: string;
  advanced: string;
};

export type TermsOfUsePlansTable = {
  headerColumns: string[];
  rows: TermsOfUsePlansTableRow[];
};

export type TermsOfUseSection = {
  id: number;
  title: string;
  content: string | null;
};

export type TermsOfUseLabels = {
  titleLine1: string;
  titleLine2: string;
  dateLabel: string;
  intro: string;
  defaultOpenSectionIds: number[];
  section1HasIllustration: boolean;
  section5PlansSubtitle: string;
  section5PlansTable: TermsOfUsePlansTable;
  section5ContentBefore: string;
  section5ContentAfter: string;
  sections: TermsOfUseSection[];
};
