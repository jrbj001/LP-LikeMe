import { useEffect, useState } from "react";
import { LandingFooter } from "../../components/layout/LandingFooter";
import { LandingHeader } from "../../components/layout/LandingHeader";
import { useTermsOfUseLabels } from "../../hooks/useTermsOfUseLabels";
import { TermosAccordionItem } from "./TermosAccordionItem";
import { TermsSectionContent } from "./TermsSectionContent";
import { styles } from "../Home/styles";
import "./style.css";

function buildInitialOpenSections(defaultOpenSectionIds: number[]): Record<number, boolean> {
  const initial: Record<number, boolean> = {};
  for (const sectionId of defaultOpenSectionIds) {
    initial[sectionId] = true;
  }
  return initial;
}

export const Termos = (): JSX.Element => {
  const { labels, loading, error, reload } = useTermsOfUseLabels();
  const [openSections, setOpenSections] = useState<Record<number, boolean>>({});

  useEffect(() => {
    if (!labels) {
      return;
    }
    setOpenSections(buildInitialOpenSections(labels.defaultOpenSectionIds));
  }, [labels]);

  const toggle = (id: number) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <main className={styles.landingDesktop}>
      <section className={`${styles.heroSection} ${styles.heroSectionLegal}`}>
        <LandingHeader variant="legal" />
      </section>

      <div className="termos-page termos-page--with-landing">
        <div className="termos-content">
          {loading ? (
            <p className="termos-hero-intro">Carregando termos e condições…</p>
          ) : null}

          {!loading && error ? (
            <div className="termos-hero-intro">
              <p>Não foi possível carregar os termos e condições.</p>
              <p>{error}</p>
              <button type="button" className="termos-menu-link" onClick={reload}>
                Tentar novamente
              </button>
            </div>
          ) : null}

          {!loading && labels ? (
            <>
              <section className="termos-hero">
                <div className="termos-hero-bg" aria-hidden />
                <h1 className="termos-hero-title">
                  <span className="termos-hero-title-line">{labels.titleLine1}</span>
                  <span className="termos-hero-title-line">{labels.titleLine2}</span>
                </h1>
                <p className="termos-hero-date">{labels.dateLabel}</p>
                <p className="termos-hero-intro">{labels.intro}</p>
              </section>

              <section className="termos-sections">
                {labels.sections.map((section) => (
                  <TermosAccordionItem
                    key={section.id}
                    sectionId={section.id}
                    title={section.title}
                    isOpen={Boolean(openSections[section.id])}
                    onToggle={() => toggle(section.id)}
                    bodyModifierClass={
                      section.id === 1 ? "termos-accordion-body--with-image" : undefined
                    }
                  >
                    <TermsSectionContent section={section} labels={labels} />
                  </TermosAccordionItem>
                ))}
              </section>
            </>
          ) : null}
        </div>
      </div>

      <LandingFooter />
    </main>
  );
};
