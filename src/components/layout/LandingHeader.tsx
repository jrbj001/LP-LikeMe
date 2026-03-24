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

export function LandingHeader(props: LandingHeaderProps): JSX.Element {
  return (
    <div className={styles.heroSectionTop}>
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

          if (item.anchorId === SECTION_ANCHORS.HERO) {
            return (
              <Link
                key={item.anchorId}
                className={styles.chip}
                to={ROUTES.HOME}
              >
                {item.label}
              </Link>
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
