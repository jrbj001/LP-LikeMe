import { useState } from "react";
import { LandingFooter } from "../../components/layout/LandingFooter";
import { LandingHeader } from "../../components/layout/LandingHeader";
import { styles } from "../Home/styles";
import { TermosAccordionItem } from "./TermosAccordionItem";
import { TERMS_HERO, TERMS_SECTIONS } from "./termosConstants";
import { TermosSectionBody } from "./termosSectionBodies";
import "./style.css";

export const Termos = (): JSX.Element => {
  const [openSections, setOpenSections] = useState<Record<number, boolean>>(
    () => {
      const initial: Record<number, boolean> = {};
      TERMS_SECTIONS.forEach((s) => {
        initial[s.id] = s.defaultOpen;
      });
      return initial;
    },
  );

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
          <section className="termos-hero">
            <div className="termos-hero-bg" aria-hidden />
            <h1 className="termos-hero-title">
              <span className="termos-hero-title-line">{TERMS_HERO.titleLine1}</span>
              <span className="termos-hero-title-line">{TERMS_HERO.titleLine2}</span>
            </h1>
            <p className="termos-hero-date">{TERMS_HERO.dateLabel}</p>
            <p className="termos-hero-intro">{TERMS_HERO.intro}</p>
          </section>

          <section className="termos-sections">
            {TERMS_SECTIONS.map(({ id, title }) => (
              <TermosAccordionItem
                key={id}
                sectionId={id}
                title={title}
                isOpen={openSections[id]}
                onToggle={() => toggle(id)}
                bodyModifierClass={
                  id === 1 ? "termos-accordion-body--with-image" : undefined
                }
              >
                <TermosSectionBody sectionId={id} />
              </TermosAccordionItem>
            ))}
          </section>
        </div>
      </div>

      <LandingFooter />
    </main>
  );
};
