import { Link } from "react-router-dom";
import { NewsletterSection } from "../NewsletterSection";
import { LANDING_FOOTER_ASSETS } from "../../constants/landingAssets";
import { ROUTES } from "../../constants/routes";
import { styles } from "../../screens/Home/styles";

type LandingFooterProps = {
  showNewsletter?: boolean;
};

export function LandingFooter({
  showNewsletter = false,
}: LandingFooterProps): JSX.Element {
  return (
    <div className={styles.footerArea}>
      {showNewsletter ? <NewsletterSection /> : null}

      <footer className={styles.footer}>
        <div>
          <img src={LANDING_FOOTER_ASSETS.footerLogo} alt="Like:me" />
          <strong>Faça parte do Like:me</strong>
          <p>
            Assine a nossa newsletter e receba dicas, insights e inspirações de
            autocuidado. Curadoria humana, com conteúdo que faz sentido pra a sua
            jornada de bem-estar.
          </p>
        </div>
        <div>
          <strong>Contato</strong>
          <p>like.me@global.com</p>
        </div>
        <div>
          <strong>Links rápidos</strong>
          <p>
            <Link to={ROUTES.PRIVACY}>Política de privacidade</Link>
            <br />
            <Link to={ROUTES.TERMS}>Termos e condições</Link>
          </p>
        </div>
        <div>
          <strong>Siga nossas redes</strong>
          <p>
            <img src={LANDING_FOOTER_ASSETS.footerSocialX} alt="X" />
            <img
              src={LANDING_FOOTER_ASSETS.footerSocialInstagram}
              alt="Instagram"
            />
            <img
              src={LANDING_FOOTER_ASSETS.footerSocialLinkedin}
              alt="LinkedIn"
            />
            <img src={LANDING_FOOTER_ASSETS.footerSocialTiktok} alt="TikTok" />
          </p>
        </div>
      </footer>
    </div>
  );
}
