import { useMemo, useState } from "react";
import { LandingFooter } from "../../components/layout/LandingFooter";
import { LandingHeader } from "../../components/layout/LandingHeader";
import { PRIVACY_POLICY_DEFAULT_OPEN_SECTION_IDS } from "../../constants/privacyPolicySections";
import { usePrivacyPoliciesLabels } from "../../hooks/usePrivacyPoliciesLabels";
import { privacyIntroParts } from "../../utils/privacyPoliciesFromTranslation";
import { MarkdownText } from "../../components/text/MarkdownText";
import { TermosAccordionItem } from "../Termos/TermosAccordionItem";
import { styles } from "../Home/styles";
import "../Termos/style.css";

function buildInitialOpenSections(): Record<number, boolean> {
  const initial: Record<number, boolean> = {};
  for (const sectionId of PRIVACY_POLICY_DEFAULT_OPEN_SECTION_IDS) {
    initial[sectionId] = true;
  }
  return initial;
}

export const Privacy = (): JSX.Element => {
  const { labels, loading, error, reload } = usePrivacyPoliciesLabels();
  const [openSections, setOpenSections] = useState<Record<number, boolean>>(buildInitialOpenSections);

  const intro = useMemo(
    () => (labels ? privacyIntroParts(labels.intro) : null),
    [labels],
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
          {loading ? (
            <p className="termos-hero-intro">Carregando política de privacidade…</p>
          ) : null}

          {!loading && error ? (
            <div className="termos-hero-intro">
              <p>Não foi possível carregar a política de privacidade.</p>
              <p>{error}</p>
              <button type="button" className="termos-menu-link" onClick={reload}>
                Tentar novamente
              </button>
            </div>
          ) : null}

          {!loading && labels && intro ? (
            <>
              <section className="termos-hero">
                <div className="termos-hero-bg" aria-hidden />
                <h1 className="termos-hero-title">{labels.title.toUpperCase()}</h1>
                {labels.description ? (
                  <MarkdownText className="termos-hero-description" text={labels.description} />
                ) : null}
                {intro.dateLine ? (
                  <p className="termos-hero-date">{intro.dateLine}</p>
                ) : null}
                {intro.paragraphs.map((paragraph, index) => (
                  <p key={index} className="termos-hero-intro">
                    {paragraph}
                  </p>
                ))}
              </section>

              <section className="termos-sections">
                {labels.sections.map(({ id, title, content }) => (
                  <TermosAccordionItem
                    key={id}
                    sectionId={id}
                    title={title}
                    isOpen={Boolean(openSections[id])}
                    onToggle={() => toggle(id)}
                  >
                    <MarkdownText className="termos-accordion-text" text={content} />
                  </TermosAccordionItem>
                ))}
                {labels.disclaimer ? (
                  <MarkdownText className="termos-privacy-disclaimer" text={labels.disclaimer} />
                ) : null}
              </section>
            </>
          ) : null}
        </div>
      </div>

      <LandingFooter />
    </main>
  );
};
