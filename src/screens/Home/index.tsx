import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useRef, useState } from "react";
import { LandingFooter } from "../../components/layout/LandingFooter";
import { LandingHeader } from "../../components/layout/LandingHeader";
import {
  SECTION_ANCHORS,
  isSectionAnchorId,
  type SectionAnchorId,
} from "../../constants/sectionAnchors";
import { APP_STORE_URL, PLAY_STORE_URL } from "../../constants/socialLinks";
import { publicImg } from "../../utils/publicImg";
import { styles } from "./styles";

function storeUrl(): string {
  const ua = navigator.userAgent;
  if (/android/i.test(ua)) return PLAY_STORE_URL;
  return APP_STORE_URL;
}

const ASSETS = {
  heroMobilePhone: publicImg("figma-hero-phone-mockup.png"),
  heroPhone: publicImg("figma-hero-phone-mockup.png"),
  simplifyArtHighRes: publicImg("section3-simplify-art.png"),
  appLastSlide: publicImg("group-10321-app-last-slide.svg"),
  chevronRight: publicImg("figma-chevron-right.svg"),
  avatarScreen: publicImg("section4-bem-estar-screen.png"),
  showcaseLogo: publicImg("showcase-likeme-logo.svg"),
  showcasePhoto: publicImg("showcase-photo.png"),
  showcasePhone: publicImg("showcase-phone.png"),
  showcaseBodyAvatar: publicImg("showcase-body-avatar.svg"),
  showcaseMindAvatar: publicImg("showcase-mind-avatar.svg"),
};

type MovementCard = {
  titleSuffix: string;
  description: string;
  image: string;
  marker: string;
};

const LIKEME_LOGO_TITLE = publicImg("likeme-logo-title.png");


const MOVEMENT_CARDS: MovementCard[] = [
  {
    titleSuffix: "o seu Movimento",
    description:
      "Seu corpo, seu ritmo. Profissionais e conteúdos que entendem onde você está e te ajudam a ir mais longe.",
    image: publicImg("movement-like-seu-movimento.png"),
    marker: publicImg("likeme-movement-slide-01.svg"),
  },
  {
    titleSuffix: "o seu Sono",
    description:
      "Sono reparador não é luxo, é fundamental. Especialistas, protocolos e produtos selecionados para você dormir melhor.",
    image: publicImg("movement-like-seu-sono.png"),
    marker: publicImg("likeme-sleep-marker.svg"),
  },
  {
    titleSuffix: "a sua Nutrição",
    description:
      "Comer bem não precisa ser difícil. Profissionais, comunidade e protocolos que ajudam a traduzir dados em escolhas reais para o seu dia a dia.",
    image: publicImg("movement-like-sua-nutricao.png"),
    marker: publicImg("likeme-nutrition-marker.svg"),
  },
  {
    titleSuffix: "os seus Relacionamentos",
    description:
      "Porque conexões reais fazem bem para a saúde, física e mental.",
    image: publicImg("movement-like-seus-relacionamentos.png"),
    marker: publicImg("likeme-relationships-marker.svg"),
  },
  {
    titleSuffix: "o seu Estresse",
    description:
      "Sua saúde emocional é tão importante quanto a física. Descubra conteúdos, produtos e especialistas que te ajudam a viver com mais equilíbrio.",
    image: publicImg("movement-like-seu-estresse.png"),
    marker: publicImg("likeme-stress-marker.svg"),
  },
  {
    titleSuffix: "a sua Autoestima",
    description:
      "Hábitos e atitudes que te ajudam a gostar cada vez mais de você.",
    image: publicImg("movement-like-sua-autoestima.png"),
    marker: publicImg("likeme-self-esteem-marker.svg"),
  },
  {
    titleSuffix: "a sua Espiritualidade",
    description:
      "Pequenos gestos para além do corpo e mente, que te ajudam a se sentir cada vez melhor.",
    image: publicImg("movement-like-sua-espiritualidade.png"),
    marker: publicImg("likeme-spirituality-marker.svg"),
  },
  {
    titleSuffix: "o seu Propósito",
    description:
      "O que te move, importa. Conteúdos e comunidades para você viver com mais sentido e menos ruído.",
    image: publicImg("movement-like-seu-proposito.png"),
    marker: publicImg("likeme-purpose-marker.svg"),
  },
  {
    titleSuffix: "o seu Ambiente",
    description:
      "O espaço onde você vive afeta como você se sente. Pequenas mudanças no ambiente podem fazer uma grande diferença no seu bem-estar.",
    image: publicImg("movement-like-seu-ambiente.png"),
    marker: publicImg("likeme-environment-marker.svg"),
  },
  {
    titleSuffix: "a sua Saúde bucal",
    description:
      "Saúde bucal é saúde integral. Profissionais e conteúdos para cuidar do seu sorriso sem medo.",
    image: publicImg("movement-like-sua-saude-bucal.png"),
    marker: publicImg("likeme-oral-health-marker.svg"),
  },
];


type FeatureSlide = {
  icon: string;
  title: string;
  description: string;
  image: string;
};

const FEATURE_SLIDES: FeatureSlide[] = [
  {
    icon: publicImg("icon-face-happy.png"),
    title: "Seu Avatar de bem-estar",
    description:
      "Crie seu avatar de bem-estar, para te guiar e apoiar diariamente, expandindo sua rotina de autocuidado através de descobertas personalizadas, com base nos seus hábitos e informações de saúde.",
    image: publicImg("avatar-slide-avatar.png"),
  },
  {
    icon: publicImg("icon-global.png"),
    title: "Comunidades",
    description:
      "Conecte-se com pessoas reais, descubra marcas e profissionais que inspiram e soluções que cabem na sua rotina. A curadoria é feita por especialistas em saúde e bem-estar.\n\nParticipe de conversas, acesse conteúdos exclusivos, organize sua jornada e fique por dentro das novidades.",
    image: publicImg("avatar-slide-comunidades.png"),
  },
  {
    icon: publicImg("icon-price-tag.png"),
    title: "Shop",
    description:
      "O lugar certo para encontrar tudo que você procura. Sem complicação e com curadoria de quem entende do assunto.\n\nConecte-se, descubra novas possibilidades, automatize itens recorrentes e amplie a sua rotina de autocuidado.",
    image: publicImg("avatar-slide-shop.png"),
  },
  {
    icon: publicImg("icon-message.png"),
    title: "Chats",
    description:
      "Converse com especialistas e com a sua comunidade em um só lugar. Tire dúvidas, receba orientações e evolua sua jornada com chats baseados em IA, treinados com o conhecimento de cada profissional.\n\nParticipe de conversas nas comunidades e troque experiências com pessoas que compartilham dos mesmos objetivos.",
    image: publicImg("avatar-slide-chats.png"),
  },
  {
    icon: publicImg("icon-checklist.png"),
    title: "Atividades",
    description:
      "Descubra práticas, experiências e rotinas que ajudam você a evoluir no dia a dia. Explore atividades por categoria, participe de experiências digitais e físicas e encontre novas formas de cuidar do corpo e da mente, no seu ritmo.\n\nIntegre o que você já prática, crie lembretes, automatize compras e gerencie sua rotina de saúde com o apoio do Like:Me.",
    image: publicImg("avatar-slide-atividades.png"),
  },
];

const APP_FEATURES = [
  "Shop",
  "Automação de atividades",
  "Integração de dados, exames, prescrições e outros apps",
  "Cashback e descontos exclusivos",
  "Comunidades exclusivas",
  "Protocolos, serviços e profissionais",
] as const;

const APP_BULLET = publicImg("app-likeme-bullet.svg");

export const Home = (): JSX.Element => {
  const [activeMovementIndex, setActiveMovementIndex] = useState(0);
  const [activeShowcaseIndex, setActiveShowcaseIndex] = useState(0);
  const [activeFeaturesIndex, setActiveFeaturesIndex] = useState(0);
  const movementAutoplayPlugin = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false }),
  );
  const showcaseAutoplayPlugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  );
  const featuresAutoplayPlugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false }),
  );
  const [movementCarouselRef, movementCarouselApi] = useEmblaCarousel(
    { loop: true, align: "center", containScroll: false },
    [movementAutoplayPlugin.current],
  );
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 900;
  const [showcaseCarouselRef, showcaseCarouselApi] = useEmblaCarousel(
    { loop: true, align: "center", containScroll: false, active: isMobile },
    isMobile ? [showcaseAutoplayPlugin.current] : [],
  );
  const [featuresCarouselRef, featuresCarouselApi] = useEmblaCarousel(
    { loop: true, align: "center", containScroll: false },
    [featuresAutoplayPlugin.current],
  );
  const [activeHeaderNav, setActiveHeaderNav] = useState<SectionAnchorId>(
    SECTION_ANCHORS.HERO,
  );

  const scrollToSection = (anchorId: SectionAnchorId): void => {
    setActiveHeaderNav(anchorId);
    document.getElementById(anchorId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    window.history.replaceState(null, "", `#${anchorId}`);
  };

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash && isSectionAnchorId(hash)) {
      setActiveHeaderNav(hash);
      requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }, []);

  useEffect(() => {
    if (!movementCarouselApi) {
      return;
    }

    const onSelect = (): void => {
      setActiveMovementIndex(movementCarouselApi.selectedScrollSnap());
    };

    onSelect();
    movementCarouselApi.on("select", onSelect);
    movementCarouselApi.on("reInit", onSelect);

    return () => {
      movementCarouselApi.off("select", onSelect);
      movementCarouselApi.off("reInit", onSelect);
    };
  }, [movementCarouselApi]);

  useEffect(() => {
    if (!showcaseCarouselApi) {
      return;
    }

    const onSelect = (): void => {
      setActiveShowcaseIndex(showcaseCarouselApi.selectedScrollSnap());
    };

    onSelect();
    showcaseCarouselApi.on("select", onSelect);
    showcaseCarouselApi.on("reInit", onSelect);

    return () => {
      showcaseCarouselApi.off("select", onSelect);
      showcaseCarouselApi.off("reInit", onSelect);
    };
  }, [showcaseCarouselApi]);

  useEffect(() => {
    if (!featuresCarouselApi) {
      return;
    }

    const onSelect = (): void => {
      setActiveFeaturesIndex(featuresCarouselApi.selectedScrollSnap());
    };

    onSelect();
    featuresCarouselApi.on("select", onSelect);
    featuresCarouselApi.on("reInit", onSelect);

    return () => {
      featuresCarouselApi.off("select", onSelect);
      featuresCarouselApi.off("reInit", onSelect);
    };
  }, [featuresCarouselApi]);

  return (
    <main className={styles.landingDesktop}>
      {/* 1. Hero */}
      <section className={styles.heroSection} id={SECTION_ANCHORS.HERO}>
        <LandingHeader
          variant="home"
          activeHeaderNav={activeHeaderNav}
          onNavigateSection={scrollToSection}
        />

        <div className={styles.heroSectionContent}>
          <div className={styles.heroSectionCopy}>
            <h1>Já pensou em ter tudo que importa, num único lugar?</h1>
            <p>
              Aqui você reúne sua <strong>rotina de bem-estar</strong>, seus{" "}
              <strong>dados de saúde</strong>, descobre{" "}
              <strong>novas soluções</strong>, se conecta com{" "}
              <strong>comunidades</strong> e com{" "}
              <strong>quem cuida de você</strong>.
            </p>
            <div className={styles.heroCtaCard}>
              <p className={styles.heroCtaCardText}>
                Amplie o seu autocuidado, no seu tempo e do seu jeito
              </p>
              <a
                className={styles.heroCtaCardButton}
                href={storeUrl()}
                target="_blank"
                rel="noopener noreferrer"
              >
                Experimente a versão beta
              </a>
            </div>
          </div>
          <picture className={styles.heroSectionPhoneWrap}>
            <source
              media="(max-width: 900px)"
              srcSet={ASSETS.heroMobilePhone}
            />
            <img
              className={styles.heroSectionPhone}
              src={ASSETS.heroPhone}
              alt="Mockup Like:me"
            />
          </picture>
        </div>
      </section>

      {/* 2. Carrossel de categorias com peek */}
      <section className={styles.movement}>
        <div className={styles.movementCarousel} ref={movementCarouselRef}>
          <div className={styles.movementCarouselTrack}>
            {MOVEMENT_CARDS.map((card) => (
              <article className={styles.movementCard} key={card.titleSuffix}>
                <div className={styles.movementText}>
                  <div className={styles.movementHeading}>
                    <h2>
                      <img
                        className={styles.movementTitleLogo}
                        src={LIKEME_LOGO_TITLE}
                        alt="Like"
                      />
                      <span className={styles.movementTitleColon}>:</span>{" "}
                      {card.titleSuffix}
                    </h2>
                    <img
                      className={`${styles.movementMarker} ${styles.movementMarkerMobile}`}
                      src={card.marker}
                      alt=""
                    />
                  </div>
                  <div className={styles.movementDescription}>
                    <img
                      className={`${styles.movementMarker} ${styles.movementMarkerDesktop}`}
                      src={card.marker}
                      alt=""
                    />
                    <p>{card.description}</p>
                  </div>
                </div>
                <img
                  className={styles.movementImage}
                  src={card.image}
                  alt={card.titleSuffix}
                  loading="lazy"
                />
              </article>
            ))}
          </div>
        </div>
        <div className={styles.movementPagination} aria-hidden>
          {MOVEMENT_CARDS.map((card, index) => (
            <span
              className={`${styles.movementPaginationDot} ${index === activeMovementIndex ? styles.movementPaginationDotActive : ""}`}
              key={card.titleSuffix}
              onClick={() => {
                movementCarouselApi?.scrollTo(index);
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key !== "Enter" && event.key !== " ") {
                  return;
                }

                event.preventDefault();
                movementCarouselApi?.scrollTo(index);
              }}
            />
          ))}
        </div>
      </section>

      {/* 2b. Carrossel showcase */}
      <section className={styles.showcase}>
        <div className={styles.showcaseCarousel} ref={showcaseCarouselRef}>
          <div className={styles.showcaseCarouselTrack}>
            {/* Card 1 — Brand */}
            <article
              className={`${styles.showcaseCard} ${styles.showcaseCardBrand}`}
            >
              <img
                className={styles.showcaseLogo}
                src={ASSETS.showcaseLogo}
                alt="Like:Me"
              />
              <div className={styles.showcaseText}>
                <p>Simplifica e conecta.</p>
                <p>Bem-estar que cabe na sua vida real.</p>
              </div>
            </article>

            {/* Card 2 — Foto */}
            <article
              className={`${styles.showcaseCard} ${styles.showcaseCardPhoto}`}
            >
              <div className={styles.showcasePhotoWrap}>
                <img
                  className={styles.showcasePhotoImg}
                  src={publicImg("showcase-photo-card.svg")}
                  alt=""
                  loading="lazy"
                />
              </div>
            </article>

            {/* Card 3 — Avatar */}
            <article
              className={`${styles.showcaseCard} ${styles.showcaseCardAvatar}`}
            >
              <span className={styles.showcaseBadge}>
                SEM CULPA. SEM PRESSÃO.
              </span>
              <div className={styles.showcaseAvatars}>
                <img src={publicImg("showcase-avatars.png")} alt="" />
              </div>
              <span
                className={`${styles.showcaseBadge} ${styles.showcaseBadgeSmall}`}
              >
                NO SEU TEMPO.
              </span>
            </article>
          </div>
        </div>
        <div className={styles.showcasePagination} aria-hidden>
          {[0, 1, 2].map((i) => (
            <span
              className={`${styles.showcasePaginationDot} ${i === activeShowcaseIndex ? styles.showcasePaginationDotActive : ""}`}
              key={i}
              onClick={() => showcaseCarouselApi?.scrollTo(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  showcaseCarouselApi?.scrollTo(i);
                }
              }}
            />
          ))}
        </div>
      </section>

      {/* 4. Carrossel de features */}
      <section className={styles.features}>
        <div className={styles.featuresCarousel} ref={featuresCarouselRef}>
          <div className={styles.featuresCarouselTrack}>
            {FEATURE_SLIDES.map((slide) => (
              <article className={styles.featuresCard} key={slide.title}>
                <div className={styles.featuresCardHeader}>
                  <img
                    className={styles.featuresCardIcon}
                    src={slide.icon}
                    alt=""
                  />
                  <h2 className={styles.featuresCardTitle}>{slide.title}</h2>
                </div>
                <p className={styles.featuresCardDescription}>
                  {slide.description}
                </p>
                <img
                  className={styles.featuresCardImage}
                  src={slide.image}
                  alt={slide.title}
                  loading="lazy"
                />
              </article>
            ))}
          </div>
        </div>
        <div className={styles.featuresPagination} aria-hidden>
          {FEATURE_SLIDES.map((slide, i) => (
            <span
              className={`${styles.featuresPaginationDot} ${i === activeFeaturesIndex ? styles.featuresPaginationDotActive : ""}`}
              key={slide.title}
              onClick={() => featuresCarouselApi?.scrollTo(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  featuresCarouselApi?.scrollTo(i);
                }
              }}
            />
          ))}
        </div>
      </section>

      {/* 5. App */}
      <section className={styles.app} id={SECTION_ANCHORS.VERSAO_BETA}>
        <article className={styles.appLeft}>
          <h4>
            Tudo que importa para o seu bem-estar, em um só{" "}
            <span className={styles.appHighlightWord}>lugar.</span>
          </h4>
          <ul className={styles.appFeatureList}>
            {APP_FEATURES.map((feature) => (
              <li key={feature}>
                <img src={APP_BULLET} alt="" className={styles.appBulletIcon} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <div className={styles.appBottomRow}>
            <span className={styles.appBadge}>Do seu jeito, no seu tempo</span>
            <span className={styles.appBadgeBlur}>Sempre.</span>
          </div>
        </article>
      </section>

      {/* 6. Newsletter + Footer */}
      <LandingFooter showNewsletter />
    </main>
  );
};
