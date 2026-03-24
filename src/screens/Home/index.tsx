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
import { publicImg } from "../../utils/publicImg";
import { styles } from "./styles";

const ASSETS = {
  heroMobilePhone:
    "https://www.figma.com/api/mcp/asset/7bf32a0a-ac01-4885-9956-462f9c72ad60",
  heroPhone:
    "https://www.figma.com/api/mcp/asset/af1e6c92-72c8-49f2-b8c2-05a6064123f0",
  simplifyArtHighRes: publicImg("section3-simplify-art.png"),
  appLastSlide: publicImg("section5-app-last-slide.png"),
  chevronRight:
    "https://www.figma.com/api/mcp/asset/2949c660-804b-4f60-adb5-fad7ff1dd893",
};

type MovementCard = {
  title: string;
  description: string;
  image: string;
  marker: string;
};

type Section4Card = {
  title: string;
  description: string;
  image: string;
  logo: string;
  imageClassName?: string;
};

const MOVEMENT_CARDS: MovementCard[] = [
  {
    title: "Like: o seu Movimento",
    description:
      "Seu corpo, seu ritmo. Profissionais e conteúdos que entendem onde você está e te ajudam a ir mais longe.",
    image:
      "https://www.figma.com/api/mcp/asset/2b05b508-6618-437e-adea-82a38d41dbfe",
    marker:
      "https://www.figma.com/api/mcp/asset/5fd624e0-031f-45d3-93fd-2e42ad62198a",
  },
  {
    title: "Like: o seu Sono",
    description:
      "Sono reparador não é luxo, é fundamental. Especialistas, protocolos e produtos selecionados para você dormir melhor.",
    image:
      "https://www.figma.com/api/mcp/asset/e0aa996d-d977-4eb1-92f8-d1cf712f097e",
    marker:
      "https://www.figma.com/api/mcp/asset/4c84ee31-68e5-4159-89f8-742f48719e8c",
  },
  {
    title: "Like: a sua Nutrição",
    description:
      "Comer bem não precisa ser difícil. Profissionais, comunidade e protocolos que ajudam a traduzir dados em escolhas reais para o seu dia a dia.",
    image:
      "https://www.figma.com/api/mcp/asset/ed7ea4b4-f689-4f07-8f58-11d2bf99b060",
    marker:
      "https://www.figma.com/api/mcp/asset/a7ea6526-1139-46ee-8cc8-14c477f163a7",
  },
  {
    title: "Like: os seus Relacionamentos",
    description:
      "Porque conexões reais fazem bem para a saúde, física e mental.",
    image:
      "https://www.figma.com/api/mcp/asset/faccfab3-bb0b-44d0-bea0-ff21dceb1c82",
    marker:
      "https://www.figma.com/api/mcp/asset/90d16550-d497-4701-90c5-426334645f18",
  },
  {
    title: "Like: o seu Estresse",
    description:
      "Sua saúde emocional é tão importante quanto a física. Descubra conteúdos, produtos e especialistas que te ajudam a viver com mais equilíbrio.",
    image:
      "https://www.figma.com/api/mcp/asset/e36ca3f0-357a-4557-8f95-8cdb3b00fff8",
    marker:
      "https://www.figma.com/api/mcp/asset/a1b4343d-c298-477a-96aa-7c8a23a7b009",
  },
  {
    title: "Like: a sua Autoestima",
    description:
      "Hábitos e atitudes que te ajudam a gostar cada vez mais de você.",
    image:
      "https://www.figma.com/api/mcp/asset/67ffd6c9-dec1-45c2-a35e-2f4f7fcd0657",
    marker:
      "https://www.figma.com/api/mcp/asset/eea316c3-4145-44d5-b7ba-3342a8035328",
  },
  {
    title: "Like: a sua Espiritualidade",
    description:
      "Pequenos gestos para além do corpo e mente, que te ajudam a se sentir cada vez melhor.",
    image:
      "https://www.figma.com/api/mcp/asset/a66fdaae-333f-4ff6-9674-dba4fc85d732",
    marker:
      "https://www.figma.com/api/mcp/asset/028d8f0a-4a1a-48ea-9276-a215cabe98ff",
  },
  {
    title: "Like: o seu Propósito",
    description:
      "O que te move, importa. Conteúdos e comunidades para você viver com mais sentido e menos ruído.",
    image:
      "https://www.figma.com/api/mcp/asset/7b68c0b6-22c2-4af1-a123-8bf495727902",
    marker:
      "https://www.figma.com/api/mcp/asset/3e5a80b9-1bdc-4e11-ac63-fbc106054c01",
  },
  {
    title: "Like: o seu Ambiente",
    description:
      "O espaço onde você vive afeta como você se sente. Pequenas mudanças no ambiente podem fazer uma grande diferença no seu bem-estar.",
    image:
      "https://www.figma.com/api/mcp/asset/ba84529e-51b7-4e44-8d85-d59d8582d9b8",
    marker:
      "https://www.figma.com/api/mcp/asset/7d15164f-bdc3-45e3-8f1e-760d4154bd74",
  },
  {
    title: "Like: a sua Saúde bucal",
    description:
      "Saúde bucal é saúde integral. Profissionais e conteúdos para cuidar do seu sorriso sem medo.",
    image:
      "https://www.figma.com/api/mcp/asset/b53ea40a-5929-44f1-9fd5-0280c6c0fbef",
    marker:
      "https://www.figma.com/api/mcp/asset/6f570639-8094-484a-8f1f-a03ad6e18b0c",
  },
];

const SECTION4_CARDS: Section4Card[] = [
  {
    title: "Seu Avatar de bem-estar",
    description:
      "Crie seu avatar de bem-estar, para te guiar e apoiar diariamente, expandindo sua rotina de autocuidado através de descobertas personalizadas, com base nos seus hábitos e informações de saúde.",
    image:
      "https://www.figma.com/api/mcp/asset/e4d776c0-6370-4d95-b7cf-b1742a076a9e",
    logo: "https://www.figma.com/api/mcp/asset/f1cd772d-2a44-4ab6-8f17-89e3bb5a79a6",
    imageClassName: styles.avatarSlideImageAvatar,
  },
  {
    title: "Comunidades",
    description:
      "Conecte-se com pessoas reais e descubra marcas, profissionais que inspiram e soluções que cabem na sua rotina. A curadoria é feita por especialistas em saúde e bem-estar.\n\nParticipe de conversas, acesse conteúdos exclusivos, organize sua jornada e fique por dentro das novidades.",
    image:
      "https://www.figma.com/api/mcp/asset/9c69728b-9256-4cd5-a9e0-73983a5e2d50",
    logo: "https://www.figma.com/api/mcp/asset/c91e9ddd-ca9c-478d-a6dc-deb6661e87c1",
    imageClassName: styles.avatarSlideImageCommunity,
  },
  {
    title: "Shop",
    description:
      "O lugar certo para encontrar tudo que você procura. Sem complicação e com curadoria de quem entende do assunto.\n\nConecte-se, descubra novas possibilidades, automatize itens recorrentes e amplie a sua rotina de autocuidado.",
    image:
      "https://www.figma.com/api/mcp/asset/4e68cb39-d433-470b-92d8-1115a7a39209",
    logo: "https://www.figma.com/api/mcp/asset/079737fa-39a0-4702-819f-1dcf1b364fb5",
    imageClassName: styles.avatarSlideImageShop,
  },
];

const APP_FEATURES = [
  "Integração de dados, exames, prescrições e outros aplicativos;",
  "Automação de atividades;",
  "Shop;",
  "Cash back e descontos exclusivos;",
  "Protocolos, serviços e profissionais;",
  "Comunidades exclusivas.",
] as const;

export const Home = (): JSX.Element => {
  const [activeMovementIndex, setActiveMovementIndex] = useState(0);
  const [activeSection4Index, setActiveSection4Index] = useState(0);
  const movementAutoplayPlugin = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false }),
  );
  const section4AutoplayPlugin = useRef(
    Autoplay({ delay: 4200, stopOnInteraction: false }),
  );
  const appAutoplayPlugin = useRef(
    Autoplay({ delay: 4500, stopOnInteraction: false }),
  );
  const [movementCarouselRef, movementCarouselApi] = useEmblaCarousel(
    { loop: false, align: "start", containScroll: "keepSnaps" },
    [movementAutoplayPlugin.current],
  );
  const [section4CarouselRef, section4CarouselApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [section4AutoplayPlugin.current],
  );
  const [appCarouselRef] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
    },
    [appAutoplayPlugin.current],
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
    if (!section4CarouselApi) {
      return;
    }

    const onSelect = (): void => {
      setActiveSection4Index(section4CarouselApi.selectedScrollSnap());
    };

    onSelect();
    section4CarouselApi.on("select", onSelect);
    section4CarouselApi.on("reInit", onSelect);

    return () => {
      section4CarouselApi.off("select", onSelect);
      section4CarouselApi.off("reInit", onSelect);
    };
  }, [section4CarouselApi]);

  return (
    <main className={styles.landingDesktop}>
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
            <p className={styles.heroSectionHighlight}>
              Amplie o seu autocuidado, no seu tempo e do seu jeito.
            </p>
            <button type="button" disabled>
              Experimente a versão Beta
            </button>
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

      <section className={styles.movement}>
        <div className={styles.movementCarousel} ref={movementCarouselRef}>
          <div className={styles.movementCarouselTrack}>
            {MOVEMENT_CARDS.map((card) => (
              <article className={styles.movementCard} key={card.title}>
                <div className={styles.movementText}>
                  <div className={styles.movementHeading}>
                    <img
                      className={`${styles.movementMarker} ${styles.movementMarkerMobile}`}
                      src={card.marker}
                      alt=""
                    />
                    <h2>{card.title}</h2>
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
                  alt={card.title}
                />
              </article>
            ))}
          </div>
        </div>
        <div className={styles.movementPagination} aria-hidden>
          {MOVEMENT_CARDS.map((card, index) => (
            <span
              className={`${styles.movementPaginationDot} ${index === activeMovementIndex ? styles.movementPaginationDotActive : ""}`}
              key={card.title}
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

      <section className={styles.simplify} id={SECTION_ANCHORS.SOBRE}>
        <div className={styles.simplifyHeader}>
          <h2 className={styles.simplifyTitle}>
            Like:Me simplifica e conecta.
          </h2>
          <p className={styles.simplifySubtitle}>
            Bem-estar que cabe na sua vida real.
          </p>
          <small className={styles.simplifyTagline}>
            Sem culpa. Sem pressão. No seu tempo.
          </small>
        </div>
        <div className={styles.simplifyArt}>
          <img
            className={styles.simplifyArtImage}
            src={ASSETS.simplifyArtHighRes}
            alt=""
          />
        </div>
      </section>

      <section className={styles.avatar}>
        <div className={styles.avatarCarousel} ref={section4CarouselRef}>
          <div className={styles.avatarCarouselTrack}>
            {SECTION4_CARDS.map((card) => (
              <article className={styles.avatarSlide} key={card.title}>
                <div className={styles.avatarCard}>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  <img
                    className={`${styles.avatarPhone} ${card.imageClassName || ""}`}
                    src={card.image}
                    alt={card.title}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className={styles.avatarPagination} aria-hidden>
          {SECTION4_CARDS.map((card, index) => (
            <span
              className={`${styles.avatarPaginationDot} ${index === activeSection4Index ? styles.avatarPaginationDotActive : ""}`}
              key={card.title}
              onClick={() => {
                section4CarouselApi?.scrollTo(index);
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key !== "Enter" && event.key !== " ") {
                  return;
                }

                event.preventDefault();
                section4CarouselApi?.scrollTo(index);
              }}
            />
          ))}
        </div>
      </section>

      <section className={styles.app} id={SECTION_ANCHORS.VERSAO_BETA}>
        <h3>App</h3>
        <div className={styles.appCarousel} ref={appCarouselRef}>
          <div className={styles.appCarouselTrack}>
            <article className={styles.appLeft}>
              <div className={styles.appHighlightGlow} aria-hidden />
              <h4>Tudo que importa para o seu bem-estar, em um só lugar.</h4>
              <p>Ajudando usuários e profissionais a se conectarem.</p>
              <span>Do seu jeito, no seu tempo</span>
            </article>
            <article className={styles.appMiddle}>
              <ul>
                {APP_FEATURES.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>
            <article className={styles.appRight}>
              <img
                className={styles.appRightSlideImage}
                src={ASSETS.appLastSlide}
                alt=""
              />
            </article>
          </div>
        </div>
        <button className={styles.appButton} type="button" disabled>
          Experimente a versão Beta
          <span className={styles.appButtonIcon} aria-hidden>
            <img src={ASSETS.chevronRight} alt="" />
          </span>
        </button>
      </section>

      <LandingFooter showNewsletter />
    </main>
  );
};
