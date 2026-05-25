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
  movementDescription: "movement__description",
  movementMarker: "movement__marker",
  movementMarkerDesktop: "movement__marker-desktop",
  movementMarkerMobile: "movement__marker-mobile",
  movementImage: "movement__image",
  movementPagination: "movement__pagination",
  movementPaginationDot: "movement__pagination-dot",
  movementPaginationDotActive: "movement__pagination-dot--active",
  institutional: "institutional",
  institutionalTitle: "institutional__title",
  institutionalGrid: "institutional__grid",
  institutionalCard: "institutional__card",
  institutionalCardImageWrap: "institutional__card-image-wrap",
  institutionalCardBody: "institutional__card-body",
  avatarStandalone: "avatar-standalone",
  avatarStandaloneContent: "avatar-standalone__content",
  avatarStandaloneText: "avatar-standalone__text",
  avatarStandaloneImageWrap: "avatar-standalone__image-wrap",
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
  appCarousel: "app__carousel",
  appCarouselTrack: "app__carousel-track",
  appLeft: "app__left",
  appMiddle: "app__middle",
  appRight: "app__right",
  appHighlightGlow: "app__highlight-glow",
  appRightSlideImage: "app__right-slide-image",
  appButton: "app__button",
  appButtonIcon: "app__button-icon",
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
  gap: 20px;
}

.movement__card {
  background: #fdfbee;
  border-radius: 44px;
  padding: 44px 44px 44px 116px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(20rem, 43.7%);
  gap: 40px;
  align-items: center;
  min-width: 0;
  scroll-snap-align: center;
  flex: 0 0 100%;
}

.movement__text h2 {
  margin: 0;
  font-family: "Bricolage Grotesque", Helvetica, Arial, sans-serif;
  font-size: 58px;
  line-height: 1;
}

.movement__text {
  display: flex;
  flex-direction: column;
  gap: 100px;
}

.movement__heading {
  display: flex;
  align-items: center;
  gap: 40px;
}

.movement__description {
  display: flex;
  align-items: center;
  gap: 40px;
}

.movement__description p {
  margin: 0;
  font-size: 24px;
  font-style: italic;
  line-height: 1.1;
}

.movement__marker {
  width: 89px;
  height: 79.69px;
  flex: 0 0 auto;
}

.movement__marker-desktop {
  display: block;
}

.movement__marker-mobile {
  display: none;
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
  justify-content: flex-end;
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

/* Avatar de bem-estar — seção standalone */
.avatar-standalone {
  max-width: 1360px;
  margin: 0 auto;
  padding: 5rem 24px;
}

.avatar-standalone__content {
  background: #fdfbee;
  border-radius: 42px;
  padding: 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  overflow: hidden;
}

.avatar-standalone__text h2 {
  margin: 0 0 1.5rem;
  font-family: "Bricolage Grotesque", Helvetica, Arial, sans-serif;
  font-size: 68px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -1.36px;
}

.avatar-standalone__text p {
  margin: 0;
  font-size: 24px;
  line-height: 1.2;
  color: #001137;
}

.avatar-standalone__image-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}

.avatar-standalone__image-wrap img {
  width: 350px;
  max-width: 100%;
  height: auto;
  object-fit: contain;
}

@media (max-width: 1240px) {
  .avatar-standalone {
    padding: 2rem 24px;
  }

  .avatar-standalone__content {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 2rem 1.5rem;
    border-radius: 24px;
  }

  .avatar-standalone__text h2 {
    font-size: clamp(28px, 8.2vw, 36px);
    letter-spacing: -0.02em;
  }

  .avatar-standalone__text p {
    font-size: 16px;
    line-height: 1.35;
  }

  .avatar-standalone__image-wrap img {
    width: 280px;
  }
}

.movement__carousel img {
  -webkit-user-drag: none;
  user-select: none;
}

.app {
  width: 100%;
  max-width: none;
  margin: 0 auto;
  padding: 0 clamp(16px, 4vw, 48px) 80px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 80px;
}

.app h3 {
  margin: 0;
  width: 100%;
  font-family: "Bricolage Grotesque", Helvetica, Arial, sans-serif;
  font-size: 68px;
  font-weight: 700;
  line-height: 0.9;
  letter-spacing: -1.36px;
}

.app__carousel {
  width: 100%;
  max-width: 100%;
  overflow: hidden;
  box-sizing: border-box;
}

.app__carousel-track {
  display: flex;
  gap: 32px;
  width: 100%;
  box-sizing: border-box;
}

.app__left,
.app__middle,
.app__right {
  flex: 0 0 calc((100% - 64px) / 3);
  min-width: 0;
  width: calc((100% - 64px) / 3);
  border-radius: 40px;
  height: 619px;
  box-sizing: border-box;
}

.app__left {
  position: relative;
  background: #958aaa;
  padding: 72px 68px;
  color: #001137;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
}

.app__highlight-glow {
  position: absolute;
  left: 52px;
  top: 96px;
  width: 262px;
  height: 83px;
  border-radius: 41.766px;
  background: #edec80;
  filter: blur(9.478px);
  pointer-events: none;
}

.app__left h4 {
  margin: 0;
  max-width: 303px;
  position: relative;
  z-index: 1;
  font-family: "Bricolage Grotesque", Helvetica, Arial, sans-serif;
  font-size: 40px;
  font-weight: 700;
  line-height: 1.02;
  letter-spacing: -0.8px;
}

.app__left p {
  margin: 41px 0 0;
  max-width: 303px;
  font-family: "DM Sans", Helvetica, Arial, sans-serif;
  font-size: 24px;
  line-height: 1.18;
  letter-spacing: -0.48px;
}

.app__left span {
  display: inline-block;
  width: fit-content;
  border: 1.748px solid #001137;
  border-radius: 19.231px;
  padding: 12px 25px 11px;
  font-family: "Instrument Sans", "DM Sans", Helvetica, Arial, sans-serif;
  font-size: 20.656px;
  font-weight: 500;
  line-height: 0.998;
}

.app__middle {
  background: #d8e4d6;
  padding: 72px 68px;
  display: flex;
  align-items: center;
}

.app__middle ul {
  margin: 0;
  padding-left: 24px;
  display: flex;
  flex-direction: column;
  gap: 22px;
  font-family: "DM Sans", Helvetica, Arial, sans-serif;
  font-size: 24px;
  line-height: 1.16;
  letter-spacing: -0.48px;
}

.app__middle li::marker {
  font-size: 0.8em;
}

.app__right {
  background: #f0eee1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 68px;
}

.app__right-slide-image {
  width: 276px;
  height: auto;
  max-height: 543.328px;
  object-fit: contain;
}

.app__button {
  align-self: center;
  border: 0;
  min-height: 48px;
  width: 304px;
  border-radius: 24px 24px 22px 22px;
  background: #001137;
  color: #fff;
  padding: 12px 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-family: "DM Sans", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
}

.app__button:disabled {
  cursor: not-allowed;
  opacity: 0.7;
}

.app__button-icon {
  width: 24px;
  height: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.app__button-icon img {
  width: 4px;
  height: 8px;
  display: block;
}

.newsletter {
  width: min(100%, 1360px);
  padding: 0 120px;
}

.footer-area {
  max-width: none;
  margin: 0;
  background: linear-gradient(
    180deg,
    rgba(246, 207, 251, 0) 40%,
    #f6cffb 70%,
    #eb7dc6 100%
  );
  padding: 140px 40px 96px;
  display: grid;
  gap: 114px;
}

.newsletter h3 {
  max-width: 892px;
  margin: 0 auto 66px;
  text-align: center;
  font-family: "Bricolage Grotesque", Helvetica, Arial, sans-serif;
  font-size: 48px;
  line-height: 1.08;
  letter-spacing: -0.02em;
}

.newsletter form {
  width: 100%;
  max-width: min(50vw, 100%);
  margin: 0 auto;
  display: grid;
  gap: 16px;
}

.newsletter form > * {
  width: 100%;
}

.newsletter input,
.newsletter textarea {
  box-sizing: border-box;
  width: 100%;
  height: 48px;
  border: 0;
  border-radius: 20.367px;
  background: #fdfbee;
  color: #001137;
  padding: 17px 24px 18px;
  font-family: "DM Sans", Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
}

.newsletter input::placeholder,
.newsletter textarea::placeholder {
  color: #8fa3a1;
}

.newsletter textarea {
  height: 93px;
  min-height: 93px;
  resize: none;
}

.newsletter__select {
  position: relative;
}

.newsletter__select-button {
  box-sizing: border-box;
  height: 48px;
  width: 100%;
  border: 0;
  border-radius: 20.367px;
  background: #fdfbee;
  color: #8fa3a1;
  padding: 17px 24px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "DM Sans", Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
  text-align: left;
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
  font-family: "DM Sans", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
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
  margin: 0 auto;
  padding: 0;
  display: grid;
  grid-template-columns: calc((100% - 342px) / 2) repeat(
      3,
      calc((100% - 342px) / 6)
    );
  align-items: start;
  gap: 114px;
}

.footer > div {
  width: 100%;
}

.footer > div:first-child {
  max-width: 492px;
}

.footer img {
  display: block;
}

.footer > div:first-child img {
  width: 129.618px;
  height: 23.874px;
  margin-bottom: 34px;
}

.footer strong {
  display: block;
  font-family: "Bricolage Grotesque", Helvetica, Arial, sans-serif;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 12px;
  color: #001137;
}

.footer p {
  margin: 0;
  font-family: "DM Sans", Helvetica, Arial, sans-serif;
  font-size: 13.125px;
  line-height: 1.3;
  letter-spacing: -0.2625px;
  color: #001137;
}

.footer > div:nth-child(2) p {
  font-size: 16.393px;
  line-height: 1.1;
  letter-spacing: -0.3279px;
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
    opacity: 0.5;
    transition: opacity 0.3s ease;
  }

  .movement__card.is-selected {
    opacity: 1;
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
  }

  .movement__heading {
    display: flex;
    align-items: center;
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

  .app {
    display: flex;
    max-width: none;
    width: 100%;
    padding: 0 clamp(16px, 5vw, 32px) 24px;
    box-sizing: border-box;
    gap: 24px;
    align-items: stretch;
  }

  .app h3 {
    font-size: 36px;
    line-height: 1;
    letter-spacing: -0.72px;
  }

  .app__carousel {
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    touch-action: pan-y;
    padding-right: 0;
    box-sizing: border-box;
  }

  .app__carousel-track {
    gap: 16px;
  }

  .app__left,
  .app__middle,
  .app__right {
    flex: 0 0 100%;
    width: 100%;
    min-width: 100%;
    height: 400px;
    border-radius: 40px;
  }

  .app__left {
    padding: 32px 24px;
  }

  .app__highlight-glow {
    top: 56px;
    left: 8px;
  }

  .app__left h4 {
    max-width: 100%;
    width: 100%;
    font-size: 32px;
    line-height: 1.06;
    letter-spacing: -0.32px;
  }

  .app__left p {
    margin-top: 24px;
    max-width: 100%;
    width: 100%;
    font-size: 16px;
    line-height: 1.2;
    letter-spacing: -0.32px;
  }

  .app__left span {
    width: 100%;
    text-align: center;
    padding: 12px 20px;
    font-size: 20px;
    line-height: 1;
  }

  .app__middle {
    padding: 32px;
  }

  .app__middle ul {
    padding-left: 20px;
    gap: 16px;
    font-size: 16px;
    line-height: 1.25;
    letter-spacing: 0.2px;
  }

  .app__right {
    padding: 60px 68px;
  }

  .app__right-slide-image {
    width: 172.711px;
    height: auto;
    max-height: 340px;
  }

  .app__button {
    width: 100%;
  }

  .newsletter {
    width: 100%;
    padding: 0;
  }

  .footer-area {
    padding: 104px 32px 56px;
    gap: 24px;
  }

  .newsletter h3 {
    margin-bottom: 24px;
    font-size: 36px;
    line-height: 1.08;
  }

  .newsletter form {
    max-width: 100%;
    gap: 12px;
  }

  .newsletter input,
  .newsletter textarea {
    height: 48px;
    padding: 14px 16px;
    border-radius: 20px;
  }

  .newsletter__select-button {
    height: 48px;
    padding: 14px 16px;
    border-radius: 20px;
  }

  .newsletter textarea {
    height: 84px;
    min-height: 84px;
  }

  .newsletter__submit-button {
    margin-top: 0;
  }

  .footer {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  .footer > div:first-child {
    max-width: 100%;
  }

  .footer > div:first-child img {
    margin-bottom: 20px;
  }

  .footer {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 24px;
    row-gap: 32px;
    align-items: start;
  }

  .footer > div:first-child {
    grid-column: 1 / -1;
  }

  .footer > div:nth-child(2) {
    grid-column: 1;
  }

  .footer > div:nth-child(3) {
    grid-column: 2;
  }

  .footer > div:last-child {
    grid-column: 1 / -1;
  }

  .footer > div:nth-child(2),
  .footer > div:nth-child(3) {
    width: 100%;
  }

  .footer > div:nth-child(2) p {
    font-size: 16.393px;
    line-height: 1.1;
    letter-spacing: -0.3279px;
  }
}

`);
