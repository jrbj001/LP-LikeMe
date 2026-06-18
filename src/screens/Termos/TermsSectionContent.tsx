import { publicImg } from "../../utils/publicImg";
import { parsePlainLegalText } from "../../utils/parsePlainLegalText";
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
        <div className="termos-accordion-text">
          {parsePlainLegalText(labels.section5ContentBefore)}
        </div>
        <TermsPlansTable
          subtitle={labels.section5PlansSubtitle}
          table={labels.section5PlansTable}
        />
        <div className="termos-accordion-text">
          {parsePlainLegalText(labels.section5ContentAfter)}
        </div>
      </>
    );
  }

  if (section.id === 1 && labels.section1HasIllustration) {
    return (
      <>
        <div className="termos-accordion-text">
          {parsePlainLegalText(section.content ?? "")}
        </div>
        <div className="termos-accordion-image">
          <img src={TERMS_ACCEPTANCE_ILLUSTRATION} alt="" />
        </div>
      </>
    );
  }

  return (
    <div className="termos-accordion-text">
      {parsePlainLegalText(section.content ?? "")}
    </div>
  );
}
