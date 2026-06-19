import { MarkdownText } from "../../components/text/MarkdownText";
import { publicImg } from "../../utils/publicImg";
import {
  TERMS_OF_USE_PLANS_SECTION_ID,
} from "../../constants/termsOfUseSections";
import type { TermsOfUseLabels, TermsOfUseSection } from "../../types/termsOfUse";
import { TermsPlansTable } from "./TermsPlansTable";

const TERMS_ACCEPTANCE_ILLUSTRATION = publicImg("like-me-20.svg");

type TermsSectionContentProps = {
  section: TermsOfUseSection;
  labels: TermsOfUseLabels;
};

export function TermsSectionContent({
  section,
  labels,
}: TermsSectionContentProps): JSX.Element {
  if (section.id === TERMS_OF_USE_PLANS_SECTION_ID) {
    return (
      <>
        <MarkdownText className="termos-accordion-text" text={labels.section5ContentBefore} />
        <TermsPlansTable
          subtitle={labels.section5PlansSubtitle}
          table={labels.section5PlansTable}
        />
        <MarkdownText className="termos-accordion-text" text={labels.section5ContentAfter} />
      </>
    );
  }

  if (section.id === 1 && labels.section1HasIllustration) {
    return (
      <>
        <MarkdownText className="termos-accordion-text" text={section.content ?? ""} />
        <div className="termos-accordion-image">
          <img src={TERMS_ACCEPTANCE_ILLUSTRATION} alt="" />
        </div>
      </>
    );
  }

  return <MarkdownText className="termos-accordion-text" text={section.content ?? ""} />;
}
