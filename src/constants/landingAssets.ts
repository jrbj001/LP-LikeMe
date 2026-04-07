import { publicImg } from "../utils/publicImg";

export const LANDING_HEADER_ASSETS = {
  logo: publicImg("figma-header-logo-main.svg"),
  legalHeroBg: publicImg("hero-terms-privacy.png"),
  heroBg: publicImg("figma-hero-bg-container.svg"),
  heroMobileBg: publicImg("figma-hero-bg-container.svg"),
  heroMobileLogo: publicImg("figma-footer-logo.svg"),
} as const;

export const LANDING_FOOTER_ASSETS = {
  footerLogo: publicImg("figma-footer-logo.svg"),
  footerSocialX: publicImg("footer-social-x.svg"),
  footerSocialInstagram: publicImg("figma-social-instagram-1.svg"),
  footerSocialLinkedin: publicImg("footer-social-linkedin.svg"),
  footerSocialTiktok: publicImg("footer-social-tiktok.svg"),
} as const;
