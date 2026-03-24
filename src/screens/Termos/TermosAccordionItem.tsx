import React from "react";
import type { TermsSectionId } from "./termosConstants";

export type TermosAccordionItemProps = {
  sectionId: TermsSectionId;
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  bodyModifierClass?: string;
};

export function TermosAccordionItem({
  sectionId,
  title,
  isOpen,
  onToggle,
  children,
  bodyModifierClass,
}: TermosAccordionItemProps): JSX.Element {
  const bodyClass = [
    "termos-accordion-body",
    bodyModifierClass ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="termos-accordion">
      <button
        type="button"
        className="termos-accordion-header"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`termos-section-${sectionId}-panel`}
        id={`termos-section-${sectionId}-trigger`}
      >
        <span className="termos-accordion-header-main">
          <span className="termos-accordion-number">{sectionId}.</span>
          <span className="termos-accordion-title">{title}</span>
        </span>
        <span className="termos-accordion-chevron-wrap" aria-hidden>
          <span
            className={`termos-accordion-chevron${isOpen ? " is-open" : ""}`}
          />
        </span>
      </button>
      {isOpen ? (
        <div
          className={bodyClass}
          id={`termos-section-${sectionId}-panel`}
          role="region"
          aria-labelledby={`termos-section-${sectionId}-trigger`}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
}
