import { injectGlobal } from "@emotion/css";
import { LEGAL_HERO_SURFACE } from "../../constants/landingColors";

export const styles = {
  landingDesktop: "landing-desktop",
  heroSection: "hero-section",
  heroSectionLegal: "hero-section--legal",
  heroSectionTop: "hero-section__top",
  heroSectionBg: "hero-section__bg",
  heroSectionBgLegal: "hero-section__bg--legal",
  heroSectionLogoWrap: "hero-section__logo-wrap",
  heroSectionLogo: "hero-section__logo",
  heroSectionMenu: "hero-section__menu",
  heroSectionContent: "hero-section__content",
  heroSectionCopy: "hero-section__copy",
  heroCtaCard: "hero-cta-card",
  heroCtaCardText: "hero-cta-card__text",
  heroCtaCardButton: "hero-cta-card__button",
  heroSectionPhoneWrap: "hero-section__phone-wrap",
  heroSectionPhone: "hero-section__phone",
  chip: "chip",
  chipActive: "chip--active",
  movement: "movement",
  movementCarousel: "movement__carousel",
  movementCarouselTrack: "movement__carousel-track",
  movementCard: "movement__card",
  movementText: "movement__text",
  movementHeading: "movement__heading",
  movementTitleLogo: "movement__title-logo",
  movementTitleColon: "movement__title-colon",
  movementDescription: "movement__description",
  movementMarker: "movement__marker",
  movementMarkerDesktop: "movement__marker-desktop",
  movementMarkerMobile: "movement__marker-mobile",
  movementImage: "movement__image",
  movementPagination: "movement__pagination",
  movementPaginationDot: "movement__pagination-dot",
  movementPaginationDotActive: "movement__pagination-dot--active",
  showcase: "showcase",
  showcaseCarousel: "showcase__carousel",
  showcaseCarouselTrack: "showcase__carousel-track",
  showcaseCard: "showcase__card",
  showcaseCardBrand: "showcase__card--brand",
  showcaseCardPhoto: "showcase__card--photo",
  showcaseCardAvatar: "showcase__card--avatar",
  showcaseLogo: "showcase__logo",
  showcaseText: "showcase__text",
  showcasePhotoWrap: "showcase__photo-wrap",
  showcasePhotoImg: "showcase__photo-img",
  showcaseBadge: "showcase__badge",
  showcaseAvatars: "showcase__avatars",
  showcaseBadgeSmall: "showcase__badge--small",
  showcasePagination: "showcase__pagination",
  showcasePaginationDot: "showcase__pagination-dot",
  showcasePaginationDotActive: "showcase__pagination-dot--active",
  institutional: "institutional",
  institutionalTitle: "institutional__title",
  institutionalGrid: "institutional__grid",
  institutionalCard: "institutional__card",
  institutionalCardImageWrap: "institutional__card-image-wrap",
  institutionalCardBody: "institutional__card-body",
  features: "features",
  featuresCarousel: "features__carousel",
  featuresCarouselTrack: "features__carousel-track",
  featuresCard: "features__card",
  featuresCardHeader: "features__card-header",
  featuresCardIcon: "features__card-icon",
  featuresCardTitle: "features__card-title",
  featuresCardDescription: "features__card-description",
  featuresCardImage: "features__card-image",
  featuresPagination: "features__pagination",
  featuresPaginationDot: "features__pagination-dot",
  featuresPaginationDotActive: "features__pagination-dot--active",
  simplify: "simplify",
  simplifyHeader: "simplify__header",
  simplifyTitle: "simplify__title",
  simplifySubtitle: "simplify__subtitle",
  simplifyTagline: "simplify__tagline",
  simplifyArt: "simplify__art",
  simplifyArtMask: "simplify__art-mask",
  simplifyArtBase: "simplify__art-base",
  simplifyArtOverlay: "simplify__art-overlay",
  simplifyArtOverlaySecondary: "simplify__art-overlay-secondary",
  simplifyArtImage: "simplify__art-image",
  benefitsList: "benefits__list",
  app: "app",
  appLeft: "app__left",
  appRow: "app__row",
  appHighlightWord: "app__highlight-word",
  appRight: "app__right",
  appRightTitle: "app__right-title",
  appRightPhoto: "app__right-photo",
  appFeatureList: "app__feature-list",
  appBulletIcon: "app__bullet-icon",
  appBottomRow: "app__bottom-row",
  appBadge: "app__badge",
  appBadgeBlur: "app__badge-blur",
  footerArea: "footer-area",
  newsletter: "newsletter",
  newsletterSelect: "newsletter__select",
  newsletterSelectButton: "newsletter__select-button",
  newsletterSelectButtonOpen: "newsletter__select-button--open",
  newsletterSelectButtonHasValue: "newsletter__select-button--has-value",
  newsletterSelectLabel: "newsletter__select-label",
  newsletterSelectIcon: "newsletter__select-icon",
  newsletterSelectOptions: "newsletter__select-options",
  newsletterSelectOption: "newsletter__select-option",
  newsletterSubmitButton: "newsletter__submit-button",
  newsletterFormFeedback: "newsletter__form-feedback",
  newsletterFormFeedbackSuccess: "newsletter__form-feedback--success",
  newsletterFormFeedbackError: "newsletter__form-feedback--error",
  footer: "footer",
} as const;

injectGlobal(`
.landing-desktop {
  background: #f4f3ec;
  color: #001137;
  font-family: "DM Sans", Helvetica, Arial, sans-serif;
  position: relative;
  --legal-hero-surface: ${LEGAL_HERO_SURFACE};
}

.hero-section {
  position: relative;
  width: 100%;
  max-width: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.hero-section--legal {
  background-color: ${LEGAL_HERO_SURFACE};
}

.hero-section--legal .hero-section__top {
  background-color: ${LEGAL_HERO_SURFACE};
}

.chip {
  border: 1.037px solid #001137;
  border-radius: 11.411px;
  font-family: "Instrument Sans", "DM Sans", Helvetica, Arial, sans-serif;
  font-size: 12.257px;
  line-height: 1;
  padding: 6px 16px;
  height: 26px;
  display: inline-flex;
  align-items: center;
}

.chip--active {
  background: #001137;
  color: #fff;
}

.hero-section__menu a.chip {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  box-sizing: border-box;
}

.hero-section__menu a.chip--active {
  color: #fff;
}

.hero-section,
.simplify,
.app,
.newsletter {
  scroll-margin-top: 40px;
}

.hero-section__top {
  position: relative;
  overflow: hidden;
  height: 852px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-section__bg {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 852px;
  height: 2193.85px;
  transform: translate(-50%, -50%) rotate(90deg) scale(0.92);
  transform-origin: center;
  object-fit: cover;
  opacity: 1;
}

.hero-section__bg--legal {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transform: none;
  transform-origin: initial;
  object-fit: cover;
  object-position: center;
  background-color: ${LEGAL_HERO_SURFACE};
}

.hero-section__logo-wrap {
  position: relative;
  z-index: 1;
}

.hero-section__logo {
  width: 392.735px;
  height: 72.34px;
}

.hero-section__menu {
  position: absolute;
  left: 50%;
  top: 50px;
  transform: translateX(-50%);
  width: min(1360px, calc(100% - 48px));
  display: flex;
  gap: 24px;
  z-index: 3;
}

.hero-section__content {
  display: grid;
  grid-template-columns: minmax(22rem, 33.75rem) minmax(24rem, 1fr);
  gap: 2.5rem;
  align-items: center;
  padding: 0 0 0 clamp(3rem, 10vw, 14.625rem);
  width: 100%;
}

.hero-section__copy {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 33.75rem;
  gap: 4rem;
  padding: 0 0 0 100px;
}

.hero-section__copy > p {
  margin: 0;
}

.hero-section__copy h1 {
  margin: 0 0 1.5rem;
  color: #001137;
  font-family: "Bricolage Grotesque", Helvetica, Arial, sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: -0.8px;
}

.hero-section__copy p {
  margin: 0 0 1.5rem;
  color: #6E6A6A;
  font-family: "DM Sans", Helvetica, Arial, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
}

.hero-section__copy strong {
  font-weight: inherit;
}

.hero-cta-card {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 32px 24px;
  border-radius: 24px;
  background: #F6DEA9;
  box-shadow: 0px 4px 16px 8px rgba(0, 0, 0, 0.04);
}

@media (max-width: 1240px) {
  .hero-cta-card {
    margin-top: 48px;
  }
}

.hero-section__copy .hero-cta-card__text {
  margin: 0;
  color: #001137;
  font-family: "Bricolage Grotesque", Helvetica, Arial, sans-serif;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: -0.56px;
}

.hero-cta-card__button {
  border: 0;
  border-radius: 40px 40px 36px 36px;
  background: #fdfbee;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.08);
  display: flex;
  min-height: 48px;
  padding: 24px 20px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  align-self: stretch;
  color: #001137;
  font-family: "DM Sans", Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
  text-decoration: none;
  cursor: pointer;
}

.hero-section__phone-wrap {
  display: block;
  width: 50vw;
  max-width: 61.9375rem;
  justify-self: end;
  overflow: hidden;
}

.hero-section__phone {
  width: 124%;
  max-width: none;
  margin-left: auto;
  display: block;
}

@media (max-width: 1240px) {
  .hero-section__content {
    grid-template-columns: minmax(18rem, 28rem) minmax(18rem, 1fr);
    gap: 1.5rem;
    padding: 0;
  }

  .hero-section__copy {
    gap: 2.75rem;
    padding: 0;
  }

  .hero-section__copy h1 {
    margin-bottom: 1rem;
  }

  .hero-section__copy p {
    margin-bottom: 1rem;
  }

  .hero-section__phone {
    width: 118%;
    max-width: none;
    margin-left: auto;
  }
}

.movement,
.simplify,
.avatar,
.newsletter,
.footer {
  max-width: 1360px;
  margin: 0 auto;
}

.movement {
  padding: 0px 24px 40px;
}

.movement__carousel {
  overflow: hidden;
  overflow-y: hidden;
  touch-action: pan-y;
}

.movement__carousel-track {
  display: flex;
}

.movement__card {
  background: #fdfbee;
  border-radius: 44px;
  padding: 44px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(20rem, 43.7%);
  gap: 40px;
  align-items: center;
  min-width: 0;
  scroll-snap-align: center;
  flex: 0 0 calc(100% - 24px);
  margin: 0 12px;
}

.movement__text h2 {
  margin: 0;
  color: #001137;
  font-family: "Bricolage Grotesque", sans-serif;
  font-size: 60px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -2.48px;
}

.movement__text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  height: 100%;
  padding: 60px 0;
}

.movement__heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}

.movement__heading h2 {
  display: inline;
}

.movement__title-logo {
  height: 0.75em;
  width: auto;
  object-fit: contain;
  vertical-align: baseline;
  display: inline;
}

.movement__title-colon {
  color: #001137;
  font-family: "Bricolage Grotesque", sans-serif;
  font-size: 60px;
  font-style: normal;
  font-weight: 650;
  line-height: 100%;
  letter-spacing: -2.48px;
  margin-left: 5px;
}

.movement__description {
  display: flex;
  align-items: center;
  gap: 40px;
}

.movement__description p {
  margin: 0;
  color: #6E6A6A;
  font-family: "DM Sans", Helvetica, Arial, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
}

.movement__marker {
  width: 89px;
  height: 79.69px;
  flex: 0 0 auto;
}

.movement__marker-desktop {
  display: none;
}

.movement__marker-mobile {
  display: block;
}

.movement__image {
  width: 100%;
  aspect-ratio: 594 / 514;
  height: auto;
  border-radius: 44px;
  object-fit: cover;
}

.movement__pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  margin-top: 16px;
}

.movement__pagination-dot {
  width: 7px;
  height: 6px;
  border-radius: 2px;
  background-color: transparent;
  background-image: url("/img/movement-dot-inactive.svg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  box-shadow: none;
  cursor: pointer;
  border: 0;
}

.movement__pagination-dot--active {
  background-color: transparent;
  background-image: url("/img/movement-dot-active.svg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  box-shadow: none;
}

.simplify {
  padding: 3.75rem 0rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 11.5rem;
}

.simplify__header {
  position: relative;
  z-index: 2;
  width: min(100%, 58.625rem);
  padding: 0.4375rem 0rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
}

.simplify__header::before {
  content: "";
  position: absolute;
  top: 0rem;
  left: 50%;
  transform: translateX(-50%);
  width: 62.0625rem;
  height: 5.1875rem;
  border-radius: 41.766px;
  background: rgba(246, 207, 251, 0.9);
  filter: blur(9.478px);
}

.simplify__title {
  margin: 0;
  position: relative;
  z-index: 1;
  font-family: "Bricolage Grotesque", Helvetica, Arial, sans-serif;
  font-weight: 700;
  font-size: 68px;
  line-height: 1;
  letter-spacing: -1.36px;
  text-align: center;
}

.simplify__subtitle {
  margin: 0;
  position: relative;
  z-index: 1;
  font-family: "Bricolage Grotesque", Helvetica, Arial, sans-serif;
  font-weight: 500;
  font-size: 42px;
  line-height: 1.15;
  text-transform: uppercase;
  text-align: center;
}

.simplify__tagline {
  margin: 0;
  position: relative;
  z-index: 1;
  font-family: "DM Sans", Helvetica, Arial, sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 1;
  text-align: center;
}

.simplify__art {
  position: relative;
  z-index: 1;
  width: min(100%, 75rem);
  height: min(27.875rem, 58vh);
  min-height: 0;
  max-height: min(27.875rem, 58vh);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.simplify__art-image {
  width: 100%;
  height: 100%;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  object-position: center;
}

.benefits__list {
  width: min(100%, 58.625rem);
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem 3rem;
  list-style: none;
}

.benefits__list li {
  position: relative;
  padding-left: 1.5rem;
  font-family: "DM Sans", Helvetica, Arial, sans-serif;
  font-size: 18px;
  line-height: 1.4;
  color: #001137;
}

.benefits__list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.55em;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #0154f8;
}

@media (max-width: 1240px) {
  .simplify {
    padding: 3.75rem 2rem;
    gap: 5rem;
  }

  .simplify__header {
    width: 100%;
    padding: 0.4375rem 1rem;
    gap: 1.75rem;
  }

  .simplify__header::before {
    width: min(100%, 52rem);
  }

  .simplify__title {
    font-size: clamp(2.5rem, 4.5vw, 4rem);
    letter-spacing: -0.03em;
  }

  .simplify__subtitle {
    font-size: clamp(1.5rem, 3vw, 2.5rem);
  }

  .simplify__tagline {
    font-size: clamp(1.25rem, 2vw, 2rem);
  }

  .simplify__art {
    width: min(100%, 68rem);
    aspect-ratio: 1200 / 446;
    max-height: min(50vh, 28rem);
    height: auto;
    min-height: 0;
    overflow: hidden;
  }

  .simplify__art-image {
    max-height: min(50vh, 28rem);
  }

  .benefits__list {
    grid-template-columns: 1fr;
    gap: 0.75rem;
    padding: 0 1rem;
  }

  .benefits__list li {
    font-size: 15px;
  }
}

/* Seção showcase */
.showcase {
  padding: 80px 0px 50px;
  max-width: 1360px;
  margin: 0 auto;
}

.showcase__carousel {
  overflow: visible;
}

.showcase__carousel-track {
  display: flex;
  gap: 20px;
}

.showcase__card {
  flex: 1 1 0;
  border-radius: 44px;
  display: flex;
  flex-direction: column;
  min-width: 0;
  height: 500px;
}

.showcase__pagination {
  display: none;
}

.showcase__card.showcase__card--brand {
  background: #ff6300;
  padding: 60px 24px;
}

.showcase__logo {
  width: 135.509px;
  height: 25.419px;
  object-fit: contain;
  object-position: left;
}

.showcase__text {
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-top: 60px;
}

.showcase__text p {
  margin: 0;
  color: #001137;
  font-family: "Bricolage Grotesque", sans-serif;
  font-size: 38px;
  font-weight: 650;
  line-height: 1;
  letter-spacing: -2px;
}

.showcase__text p:first-child {
  position: relative;
  z-index: 1;
}

.showcase__text p:first-child::before {
  content: "";
  position: absolute;
  inset: -6px -10px;
  background: rgba(253, 251, 237, 0.72);
  backdrop-filter: blur(1.25px);
  border-radius: 312px;
  z-index: -1;
  filter: blur(2.5px);
}

.showcase__card.showcase__card--photo {
  background: #f6dea9;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 70px;
}

.showcase__photo-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 24px;
}

.showcase__photo-img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.showcase__card.showcase__card--avatar {
  background: #f0eee1;
  align-items: center;
  justify-content: space-between;
  padding: 60px 20px;
  max-width: 250px;
  flex: 0 0 250px;
}

.showcase__badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border: 0.623px solid #001137;
  border-radius: 20px;
  color: #001137;
  font-family: "DM Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.12px;
  text-align: center;
  width: 100%;
}

.showcase__badge--small {
  padding: 6px;
  width: auto;
}

.showcase__avatars {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.showcase__avatars img {
  width: 100px;
  height: auto;
}

.showcase__pagination-dot {
  width: 7px;
  height: 6px;
  border-radius: 2px;
  background-color: transparent;
  background-image: url("/img/movement-dot-inactive.svg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  box-shadow: none;
  cursor: pointer;
  border: 0;
}

.showcase__pagination-dot--active {
  background-color: transparent;
  background-image: url("/img/movement-dot-active.svg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  box-shadow: none;
}

/* Seção institucional — grid de cards */
.institutional {
  max-width: 1360px;
  margin: 0 auto;
  padding: 5rem 24px;
}

.institutional__title {
  margin: 0 0 3rem;
  font-family: "Bricolage Grotesque", Helvetica, Arial, sans-serif;
  font-size: 68px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -1.36px;
  text-align: center;
}

.institutional__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.institutional__card {
  background: #fdfbee;
  border-radius: 32px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.institutional__card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 17, 55, 0.08);
}

.institutional__card-image-wrap {
  width: 100%;
  height: 260px;
  overflow: hidden;
  background: var(--card-accent, #f0eee1);
}

.institutional__card-image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.institutional__card-body {
  padding: 2rem 2.5rem 2.5rem;
}

.institutional__card-body h3 {
  margin: 0 0 0.75rem;
  font-family: "Bricolage Grotesque", Helvetica, Arial, sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.64px;
}

.institutional__card-body p {
  margin: 0;
  font-size: 16px;
  line-height: 1.4;
  color: #001137;
}

@media (max-width: 1240px) {
  .institutional {
    padding: 3rem 24px;
  }

  .institutional__title {
    font-size: 36px;
    margin-bottom: 2rem;
    letter-spacing: -0.72px;
  }

  .institutional__grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .institutional__card-image-wrap {
    height: 200px;
  }

  .institutional__card-body {
    padding: 1.25rem 1.5rem 1.5rem;
  }

  .institutional__card-body h3 {
    font-size: 24px;
  }

  .institutional__card-body p {
    font-size: 14px;
  }
}

/* Carrossel de features */
.features {
  padding: 32px 24px;
  max-width: 1360px;
  margin: 0 auto;
}

.features__carousel {
  overflow: hidden;
}

.features__carousel-track {
  display: flex;
}

.features__card {
  flex: 0 0 354px;
  height: 700px;
  background: #fdfbed;
  border-radius: 24px;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  box-shadow: 0 4px 16px 8px rgba(0, 0, 0, 0.04);
  margin: 0 12px;
  scroll-snap-align: center;
}

.features__card-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 32px;
}

.features__card-icon {
  width: 60px;
  height: 60px;
  flex-shrink: 0;
}

.features__card-title {
  margin: 0;
  color: #001137;
  font-family: "Bricolage Grotesque", sans-serif;
  font-size: 40px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.8px;
}

.features__card-description {
  margin: 0;
  color: #6e6a6a;
  font-family: "DM Sans", sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.2;
  white-space: pre-line;
}

.features__card-image {
  width: 100%;
  height: auto;
  border-radius: 20px;
  object-fit: cover;
  margin-top: auto;
}

.features__pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  margin-top: 16px;
}

.features__pagination-dot {
  width: 7px;
  height: 6px;
  border-radius: 2px;
  background-color: transparent;
  background-image: url("/img/movement-dot-inactive.svg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  box-shadow: none;
  cursor: pointer;
  border: 0;
}

.features__pagination-dot--active {
  background-color: transparent;
  background-image: url("/img/movement-dot-active.svg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  box-shadow: none;
}

.movement__carousel img {
  -webkit-user-drag: none;
  user-select: none;
}

.app {
  max-width: 1360px;
  margin: 0 auto;
  padding: 32px 24px 80px;
  box-sizing: border-box;
}

.app__row {
  display: flex;
  gap: 24px;
  align-items: stretch;
}

.app__left,
.app__right {
  border-radius: 24px;
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  box-sizing: border-box;
  min-width: 0;
}

.app__left {
  flex: 0 0 35%;
  background: #958aaa;
  color: #001137;
}

.app__right {
  flex: 0 0 calc(65% - 24px);
  background: #d5e4d5;
  color: #001137;
  opacity: 0.88;
  overflow: clip;
}

.app__right-title {
  margin: 0;
  font-family: "Bricolage Grotesque", sans-serif;
  font-size: 40px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.8px;
  color: #001137;
}

.app__right-photo {
  width: 100%;
  flex: 1 1 0;
  min-height: 0;
  object-fit: cover;
  border-radius: 16px;
}

.app__left h4 {
  margin: 0;
  font-family: "Bricolage Grotesque", sans-serif;
  font-size: 40px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.8px;
}

.app__highlight-word {
  position: relative;
  z-index: 1;
}

.app__highlight-word::before {
  content: "";
  position: absolute;
  inset: -1px -1px;
  background: #f8e186;
  border-radius: 1000px;
  filter: blur(8px);
  z-index: -1;
}

.app__feature-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.app__feature-list li {
  display: flex;
  align-items: center;
  gap: 16px;
  font-family: "DM Sans", sans-serif;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: -0.4px;
  color: #001137;
}

.app__bullet-icon {
  width: 32px;
  height: 28px;
  flex-shrink: 0;
}

.app__bottom-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.app__badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 32px;
  padding: 0 12px;
  border-radius: 18px 18px 16px 16px;
  font-family: "DM Sans", sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #001137;
}

.app__badge-blur {
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 32px;
  backdrop-filter: blur(4px);
  font-family: "DM Sans", sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #001137;
  text-align: center;
}

.app__badge-blur::before {
  content: "";
  position: absolute;
  inset: -4px -2px;
  background: rgba(240, 238, 225, 0.72);
  border-radius: 1000px;
  filter: blur(2px);
  z-index: -1;
}

.newsletter {
  width: 100%;
  padding: 0;
}

.footer-area {
  max-width: none;
  margin: 0;
  background: linear-gradient(
    180deg,
    rgba(246, 207, 251, 0) 81.56%,
    #f6cffb 95.94%,
    #eb7dc6 112.35%
  );
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  gap: 60px;
}

.newsletter h3 {
  margin: 0 0 40px;
  text-align: left;
  font-family: "Bricolage Grotesque", sans-serif;
  font-size: 40px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -0.8px;
  color: #001137;
}

.newsletter form {
  width: 100%;
  max-width: 354px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.newsletter form > *:not(button) {
  width: 100%;
}

.newsletter input {
  box-sizing: border-box;
  width: 100%;
  height: 48px;
  border: 0;
  border-radius: 32px;
  background: #fdfbee;
  color: #001137;
  padding: 12px 40px;
  font-family: "DM Sans", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.2px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.08);
}

.newsletter input::placeholder {
  color: #6e6a6a;
}

.newsletter__select {
  position: relative;
}

.newsletter__select-button {
  box-sizing: border-box;
  height: 48px;
  width: 100%;
  border: 0;
  border-radius: 32px;
  background: #fdfbee;
  color: #6e6a6a;
  padding: 12px 0 12px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "DM Sans", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.2px;
  text-align: left;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.08);
  cursor: pointer;
}

.newsletter__select-button--open {
  border: 0.784px solid #0154f8;
}

.newsletter__select-button--has-value {
  color: #001137;
}

.newsletter__select-label {
  display: inline-block;
}

.newsletter__select-icon {
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 4px;
  color: #8fa3a1;
}

.newsletter__select-icon svg {
  display: block;
  flex-shrink: 0;
  transition: transform 0.2s ease, color 0.15s ease;
}

.newsletter__select-button--has-value .newsletter__select-icon,
.newsletter__select-button--open .newsletter__select-icon {
  color: #001137;
}

.newsletter__select-button--open .newsletter__select-icon svg {
  transform: rotate(180deg);
}

.newsletter__select-options {
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  z-index: 4;
}

.newsletter__select-option {
  width: 100%;
  border: 0;
  background: #fff;
  color: #001137;
  text-align: left;
  padding: 12px 24px;
  font-family: "DM Sans", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.2px;
  cursor: pointer;
}

.newsletter__select-option:hover {
  background: #f8f8f8;
}

.newsletter__submit-button {
  border: 0;
  border-radius: 24px 24px 22px 22px;
  background: #001137;
  color: #fff;
  margin-top: 8px;
  min-height: 48px;
  padding: 12px 16px;
  width: fit-content;
  font-family: "DM Sans", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.08);
  cursor: pointer;
}

.newsletter__submit-button:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}

.newsletter__form-feedback {
  margin: 12px 0 0;
  min-height: 1.25em;
  font-family: "DM Sans", Helvetica, Arial, sans-serif;
  font-size: 13px;
  line-height: 1.35;
  text-align: center;
  color: #001137;
}

.newsletter__form-feedback--success {
  color: #0d5c2e;
}

.newsletter__form-feedback--error {
  color: #b00020;
}

.footer {
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.footer > div {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer img {
  display: block;
}

.footer > div:first-child {
  gap: 32px;
}

.footer > div:first-child img {
  width: 162.879px;
  height: 30px;
}

.footer strong {
  display: block;
  font-family: "Bricolage Grotesque", sans-serif;
  font-size: 24px;
  font-weight: 600;
  letter-spacing: -0.48px;
  color: #001137;
}

.footer > div:first-child strong {
  font-size: 28px;
  letter-spacing: -0.56px;
}

.footer p {
  margin: 0;
  font-family: "DM Sans", sans-serif;
  font-size: 20px;
  line-height: 1.3;
  letter-spacing: -0.4px;
  color: #001137;
}

.footer > div:nth-child(2) p {
  text-decoration: underline;
}

.footer > div:nth-child(3) a {
  color: inherit;
  text-decoration: none;
}

.footer > div:nth-child(3) a:hover {
  text-decoration: underline;
}

.footer > div:last-child p {
  display: flex;
  gap: 12px;
  align-items: center;
}

.footer > div:last-child p img {
  width: 16.407px;
  height: 16.407px;
}

.footer > div:last-child a {
  display: inline-flex;
  color: inherit;
  text-decoration: none;
  line-height: 0;
}

.footer > div:last-child a:hover {
  opacity: 0.82;
}

@media (min-width: 901px) {
  .footer-area {
    padding: 120px 48px 80px;
    gap: 80px;
    background: linear-gradient(
      180deg,
      rgba(246, 207, 251, 0) 75.76%,
      #f6cffb 93.5%,
      #eb7dc6 113.76%
    );
  }

  .newsletter h3 {
    font-size: 48px;
    font-weight: 650;
    letter-spacing: -0.96px;
    margin-bottom: 48px;
    max-width: 700px;
  }

  .newsletter form {
    max-width: 520px;
    gap: 16px;
  }

  .newsletter input {
    height: 48px;
    font-size: 16px;
    padding: 12px 40px;
  }

  .newsletter__select-button {
    height: 48px;
    font-size: 16px;
  }

  .newsletter__submit-button {
    width: fit-content;
    height: 48px;
    border-radius: 24px;
    font-size: 14px;
    font-weight: 500;
    padding: 12px 24px;
    margin-top: 8px;
  }

  .footer {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: space-between;
    gap: 0;
  }

  .footer > div:first-child {
    flex: 0 0 45%;
    gap: 16px;
  }

  .footer > div:first-child img {
    width: 200px;
    height: 37px;
  }

  .footer > div:first-child strong {
    font-size: 28px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: -0.56px;
  }

  .footer > div:first-child p {
    font-size: 16px;
    letter-spacing: -0.32px;
  }

  .footer > div:nth-child(2),
  .footer > div:nth-child(3),
  .footer > div:last-child {
    flex: 0 0 auto;
  }

  .footer > div:nth-child(2) {
    gap: 20px;
  }

  .footer strong {
    font-size: 20px;
    font-weight: 700;
    line-height: 1;
  }

  .footer p {
    font-size: 16px;
    letter-spacing: -0.32px;
  }
}

@media (max-width: 1240px) {
  .simplify {
    display: flex;
    padding: 4.5rem 2rem;
    gap: 2.5rem;
  }

  .simplify__header {
    width: 100%;
    padding: 0.4375rem 0;
    gap: 2rem;
  }

  .simplify__header::before {
    width: calc(100% - 84px);
    height: 3.25rem;
    top: 0.9rem;
    border-radius: 200px;
    align-items: center;
  }

  .simplify__title {
    font-size: 36px;
    line-height: 1.05;
    letter-spacing: -0.02em;
  }

  .simplify__subtitle {
    font-size: 24px;
    line-height: 1.1;
  }

  .simplify__tagline {
    font-size: 16px;
    line-height: 1;
  }

  .simplify__art {
    width: calc(100% - 3rem);
    height: min(278.506px, 48vh);
    max-height: min(278.506px, 48vh);
    min-height: 0;
    margin: 0rem 1.5rem;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: auto;
  }

  .simplify__art-image {
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    object-position: center;
  }

  .hero-section {
    padding: 0;
  }

  .hero-section__top {
    position: relative;
    width: 100%;
    min-height: 100vh;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: visible;
  }

  .hero-section__bg {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 446px;
    height: 1065px;
    transform: translate(-50%, -50%) rotate(90deg);
    object-fit: cover;
    max-width: none;
  }

  @media (max-width: 900px) {
    .hero-section__bg {
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      transform: none;
    }
  }

  .hero-section__bg--legal {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    transform: none;
    max-width: none;
    background-color: ${LEGAL_HERO_SURFACE};
  }

  .hero-section__logo-wrap {
    position: relative;
    z-index: 1;
    margin-top: -22px;
  }

  .hero-section__logo {
    width: 217.162px;
    height: 38.167px;
    max-width: calc(100vw - 64px);
    object-fit: contain;
    display: block;
  }

  .hero-section__menu {
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    width: 100%;
    transform: none;
    display: flex;
    gap: 8px;
    padding: 0 16px;
    overflow-x: auto;
    z-index: 2;
    scrollbar-width: none;
  }

  .hero-section__menu::-webkit-scrollbar {
    display: none;
  }

  .hero-section__menu .chip {
    flex: 0 0 auto;
  }

  .hero-section__menu .chip:first-child {
    padding-left: 30px;
    position: relative;
  }

  .hero-section__menu .chip:first-child::before {
    content: "";
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: radial-gradient(
      circle at 30% 30%,
      #f6cffb 0%,
      #f2e984 55%,
      #0067ff 100%
    );
  }

  .hero-section__content {
    width: 100%;
    padding: 60px 32px;
    display: flex;
    flex-direction: column;
    gap: 32px;
    align-items: center;
    justify-content: center;
  }

  .hero-section__copy {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .hero-section__copy h1 {
    margin: 0 0 16px;
  }

  .hero-section__copy p {
    margin: 0;
  }


  .hero-section__phone-wrap {
    width: 100%;
    display: block;
    overflow: hidden;
  }

  .hero-section__phone {
    width: 100%;
    height: 100%;
    display: block;
    transform: scale(1.4);
    transform-origin: -40% 50%;
  }

  .movement {
    display: block;
    padding: 0;
    margin-top: 16px;
  }

  .movement__carousel {
    overflow: hidden;
    padding: 0;
  }

  .movement__carousel-track {
    gap: 12px;
  }

  .movement__card {
    flex: 0 0 82%;
    min-width: 0;
    height: auto;
    min-height: clamp(360px, calc(100vh - 220px), 460px);
    border-radius: 24px;
    padding: 24px;
    grid-template-columns: 1fr;
    gap: 20px;
    align-content: start;
    scroll-snap-align: center;
  }

  .movement__image {
    order: -1;
    width: 100%;
    aspect-ratio: 252 / 216;
    height: auto;
    border-radius: 20px;
  }

  .movement__text {
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;
    padding: 0;
  }

  .movement__heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    width: 100%;
  }

  .movement__text h2 {
    margin: 0;
    font-size: 24px;
    font-weight: 700;
    line-height: 1;
    letter-spacing: -0.02em;
  }

  .movement__title-colon {
    font-size: 30px;
  }

  .movement__description {
    display: block;
    width: 100%;
  }

  .movement__marker {
    width: 40px;
    height: 35.816px;
    flex: 0 0 auto;
  }

  .movement__marker-desktop {
    display: none;
  }

  .movement__marker-mobile {
    display: block;
  }

  .movement__description p {
    margin: 0;
    font-style: italic;
    font-size: 16px;
    line-height: normal;
    width: 100%;
  }

  .movement__pagination {
    margin-top: 8px;
    justify-content: center;
    gap: 6px;
    padding: 0 16px;
  }

  .showcase__carousel {
    overflow: hidden;
  }

  .showcase__card,
  .showcase__card.showcase__card--avatar {
    flex: 0 0 82%;
    max-width: none;
    height: 400px;
    min-height: auto;
    border-radius: 24px;
    padding: 24px;
    scroll-snap-align: center;
    margin: 0 12px;
  }

  .showcase__text p {
    font-size: 26px;
  }

  .showcase__pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    margin-top: 16px;
  }

  .features__card {
    flex: 0 0 82%;
    height: 500px;
    margin: 0 12px;
    padding: 24px;
  }

  .features__card-title {
    font-size: 28px;
  }

  .features__card-description {
    font-size: 14px;
  }

  .features__card-icon {
    width: 40px;
    height: 40px;
  }

  .app {
    display: flex;
    max-width: none;
    width: 100%;
    padding: 0 clamp(16px, 5vw, 32px) 24px;
    box-sizing: border-box;
    gap: 24px;
    align-items: stretch;
  }

  .app__row {
    flex-direction: column;
  }

  .app__left,
  .app__right {
    flex: 0 0 auto;
    width: 100%;
  }

  .app__left h4 {
    font-size: 32px;
    letter-spacing: -0.64px;
  }

  .app__feature-list li {
    font-size: 16px;
  }

  .app__right-title {
    font-size: 32px;
    letter-spacing: -0.64px;
  }

  .app__right-photo {
    flex: 0 0 auto;
    height: 240px;
  }

  .newsletter h3 {
    font-size: 32px;
    letter-spacing: -0.64px;
  }

  .newsletter form {
    max-width: 100%;
  }
}

`);
