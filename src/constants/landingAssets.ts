import { publicImg } from "../utils/publicImg";

export const LANDING_HEADER_ASSETS = {
  logo: publicImg("figma-header-logo-main.svg"),
  homeNavIcon: publicImg("header-nav-home-icon.svg"),
  legalHeroBg: publicImg("hero-terms-privacy.png"),
  heroBg: publicImg("figma-hero-bg-container.svg"),
  heroMobileBg: publicImg("hero-mobile-bg.png"),
  heroMobileLogo: publicImg("figma-footer-logo.svg"),
} as const;

export const LANDING_FOOTER_ASSETS = {
  footerLogo: publicImg("figma-footer-logo.svg"),
  footerInstagram: publicImg("footer-social-instagram.svg"),
} as const;
