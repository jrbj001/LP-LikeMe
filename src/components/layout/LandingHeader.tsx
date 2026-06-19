import { Link } from "react-router-dom";
import { LANDING_HEADER_ASSETS } from "../../constants/landingAssets";
import { LANDING_HEADER_NAV_ITEMS } from "../../constants/headerNav";
import { ROUTES } from "../../constants/routes";
import {
  SECTION_ANCHORS,
  type SectionAnchorId,
} from "../../constants/sectionAnchors";
import { styles } from "../../screens/Home/styles";

export type LandingHeaderProps =
  | {
      variant: "home";
      activeHeaderNav: SectionAnchorId;
      onNavigateSection: (anchorId: SectionAnchorId) => void;
    }
  | { variant: "legal" };

function homeNavChipClassName(): string {
  return [styles.chip, styles.chipHome].join(" ");
}

function HomeNavChipContent(): JSX.Element {
  return (
    <>
      <span className={styles.chipHomeIconWrap} aria-hidden>
        <img
          className={styles.chipHomeIcon}
          src={LANDING_HEADER_ASSETS.homeNavIcon}
          alt=""
        />
      </span>
      <span className={styles.chipHomeLabel}>Home</span>
    </>
  );
}

export function LandingHeader(props: LandingHeaderProps): JSX.Element {
  const isLegal = props.variant === "legal";

  return (
    <div className={styles.heroSectionTop}>
      {isLegal ? (
        <img
          className={`${styles.heroSectionBg} ${styles.heroSectionBgLegal}`}
          src={LANDING_HEADER_ASSETS.legalHeroBg}
          alt=""
        />
      ) : (
        <picture>
          <source
            media="(max-width: 900px)"
            srcSet={LANDING_HEADER_ASSETS.heroMobileBg}
          />
          <img
            className={styles.heroSectionBg}
            src={LANDING_HEADER_ASSETS.heroBg}
            alt=""
          />
        </picture>
      )}

      <div className={styles.heroSectionLogoWrap}>
        {props.variant === "legal" ? (
          <Link to={ROUTES.HOME}>
            <picture>
              <source
                media="(max-width: 900px)"
                srcSet={LANDING_HEADER_ASSETS.heroMobileLogo}
              />
              <img
                className={styles.heroSectionLogo}
                src={LANDING_HEADER_ASSETS.logo}
                alt="Like:me"
              />
            </picture>
          </Link>
        ) : (
          <picture>
            <source
              media="(max-width: 900px)"
              srcSet={LANDING_HEADER_ASSETS.heroMobileLogo}
            />
            <img
              className={styles.heroSectionLogo}
              src={LANDING_HEADER_ASSETS.logo}
              alt="Like:me"
            />
          </picture>
        )}
      </div>

      <nav className={styles.heroSectionMenu} aria-label="Seções da página">
        {LANDING_HEADER_NAV_ITEMS.map((item) => {
          if (item.anchorId === SECTION_ANCHORS.HERO) {
            if (props.variant === "home") {
              return (
                <a
                  key={item.anchorId}
                  className={homeNavChipClassName()}
                  href={`#${item.anchorId}`}
                  onClick={(event) => {
                    event.preventDefault();
                    props.onNavigateSection(item.anchorId);
                  }}
                >
                  <HomeNavChipContent />
                </a>
              );
            }

            return (
              <Link
                key={item.anchorId}
                className={homeNavChipClassName()}
                to={ROUTES.HOME}
              >
                <HomeNavChipContent />
              </Link>
            );
          }

          if (props.variant === "home") {
            const isActive = props.activeHeaderNav === item.anchorId;
            return (
              <a
                key={item.anchorId}
                className={`${styles.chip} ${isActive ? styles.chipActive : ""}`}
                href={`#${item.anchorId}`}
                onClick={(event) => {
                  event.preventDefault();
                  props.onNavigateSection(item.anchorId);
                }}
              >
                {item.label}
              </a>
            );
          }

          return (
            <Link
              key={item.anchorId}
              className={styles.chip}
              to={`${ROUTES.HOME}#${item.anchorId}`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
