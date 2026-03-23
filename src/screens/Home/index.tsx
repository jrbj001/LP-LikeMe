import { useEffect, useRef, useState } from "react";
import "./style.css";
import { styles } from "./styles";

const ASSETS = {
  logo: "https://www.figma.com/api/mcp/asset/09537643-5401-4d23-b0dd-2c3dfcaff836",
  heroBg:
    "https://www.figma.com/api/mcp/asset/3044ae66-bdd2-47fe-aa38-4505ec72e07c",
  heroMobileBg:
    "https://www.figma.com/api/mcp/asset/6110e62b-970f-445e-bb57-0b412f77ea35",
  heroMobileLogo:
    "https://www.figma.com/api/mcp/asset/bb249594-0e06-4b26-b838-0fa6eaaecea1",
  heroMobilePhone:
    "https://www.figma.com/api/mcp/asset/7bf32a0a-ac01-4885-9956-462f9c72ad60",
  heroPhone:
    "https://www.figma.com/api/mcp/asset/af1e6c92-72c8-49f2-b8c2-05a6064123f0",
  movement:
    "https://www.figma.com/api/mcp/asset/7b52847a-a711-4f0e-91ad-7eeb952183c5",
  simplifyBand:
    "https://www.figma.com/api/mcp/asset/18af2641-08b8-4527-900b-10257787fa9d",
  simplifyOval:
    "https://www.figma.com/api/mcp/asset/38e63133-a86c-40a5-95b9-8f8ee130b02c",
  simplifyDesktopMask:
    "https://www.figma.com/api/mcp/asset/151d70c0-9048-4bb6-ada2-ccbc0d494951",
  simplifyDesktopBase:
    "https://www.figma.com/api/mcp/asset/096500ff-976c-41f6-afa3-e66dcc255544",
  simplifyDesktopOverlay:
    "https://www.figma.com/api/mcp/asset/0e02a83d-d2d2-4f2c-82d2-e980d74ba8ac",
  simplifyMobileMask:
    "https://www.figma.com/api/mcp/asset/ff4e43a1-7a18-4510-bd16-0b7125ca2e36",
  simplifyMobileBase:
    "https://www.figma.com/api/mcp/asset/bc388148-6cc2-434c-987a-c2b35dcc3bcc",
  simplifyMobileOverlay:
    "https://www.figma.com/api/mcp/asset/d973d0e7-f4d2-4395-90e8-1e2e27553560",
  simplifyArtHighRes: "/static/img/section3-simplify-art.png",
  avatarPhone:
    "https://www.figma.com/api/mcp/asset/0b7500c4-bcce-4288-9792-7acc8078e81c",
  appChecklist:
    "https://www.figma.com/api/mcp/asset/1259753d-593c-4463-ad3f-e94e26e7ca23",
  appAvatar:
    "https://www.figma.com/api/mcp/asset/2a89b917-7134-4202-b99e-0dddcbfab36d",
};

type MovementCard = {
  title: string;
  description: string;
  image: string;
  marker: string;
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

export const Home = (): JSX.Element => {
  const movementCarouselRef = useRef<HTMLDivElement | null>(null);
  const [activeMovementIndex, setActiveMovementIndex] = useState(0);

  useEffect(() => {
    const carousel = movementCarouselRef.current;

    if (!carousel) {
      return;
    }

    const getSlideStep = (): number => {
      const firstSlide = carousel.firstElementChild as HTMLElement | null;

      if (!firstSlide) {
        return 0;
      }

      const carouselStyles = window.getComputedStyle(carousel);
      const gapValue = Number.parseFloat(
        carouselStyles.columnGap || carouselStyles.gap || "0",
      );

      return firstSlide.offsetWidth + gapValue;
    };

    const handleScroll = (): void => {
      const step = getSlideStep();

      if (!step) {
        return;
      }

      const nextIndex = Math.round(carousel.scrollLeft / step);
      setActiveMovementIndex(
        Math.max(0, Math.min(MOVEMENT_CARDS.length - 1, nextIndex)),
      );
    };

    const autoplay = window.setInterval(() => {
      const step = getSlideStep();

      if (!step) {
        return;
      }

      const nextIndex = (activeMovementIndex + 1) % MOVEMENT_CARDS.length;
      carousel.scrollTo({
        left: nextIndex * step,
        behavior: "smooth",
      });
    }, 3500);

    carousel.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      carousel.removeEventListener("scroll", handleScroll);
      window.clearInterval(autoplay);
    };
  }, [activeMovementIndex]);

  return (
    <main className={styles.landingDesktop}>
      <section className={styles.heroSection}>
        <div className={styles.heroSectionTop}>
          <picture>
            <source media="(max-width: 900px)" srcSet={ASSETS.heroMobileBg} />
            <img className={styles.heroSectionBg} src={ASSETS.heroBg} alt="" />
          </picture>

          <div className={styles.heroSectionLogoWrap}>
            <picture>
              <source
                media="(max-width: 900px)"
                srcSet={ASSETS.heroMobileLogo}
              />
              <img
                className={styles.heroSectionLogo}
                src={ASSETS.logo}
                alt="Like:me"
              />
            </picture>
          </div>

          <div className={styles.heroSectionMenu}>
            <span className={`${styles.chip} ${styles.chipActive}`}>Home</span>
            <span className={styles.chip}>Sobre</span>
            <span className={styles.chip}>Versão Beta</span>
            <span className={styles.chip}>Junte-se a nós</span>
          </div>
        </div>

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
            <button type="button">Experimente a versão Beta</button>
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
        <div className={styles.movementPagination} aria-hidden>
          {MOVEMENT_CARDS.map((card, index) => (
            <span
              className={`${styles.movementPaginationDot} ${index === activeMovementIndex ? styles.movementPaginationDotActive : ""}`}
              key={card.title}
              onClick={() => {
                const carousel = movementCarouselRef.current;

                if (!carousel) {
                  return;
                }

                const firstSlide =
                  carousel.firstElementChild as HTMLElement | null;

                if (!firstSlide) {
                  return;
                }

                const carouselStyles = window.getComputedStyle(carousel);
                const gapValue = Number.parseFloat(
                  carouselStyles.columnGap || carouselStyles.gap || "0",
                );
                const step = firstSlide.offsetWidth + gapValue;

                carousel.scrollTo({
                  left: index * step,
                  behavior: "smooth",
                });
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key !== "Enter" && event.key !== " ") {
                  return;
                }

                event.preventDefault();
                const carousel = movementCarouselRef.current;

                if (!carousel) {
                  return;
                }

                const firstSlide =
                  carousel.firstElementChild as HTMLElement | null;

                if (!firstSlide) {
                  return;
                }

                const carouselStyles = window.getComputedStyle(carousel);
                const gapValue = Number.parseFloat(
                  carouselStyles.columnGap || carouselStyles.gap || "0",
                );
                const step = firstSlide.offsetWidth + gapValue;

                carousel.scrollTo({
                  left: index * step,
                  behavior: "smooth",
                });
              }}
            />
          ))}
        </div>
      </section>

      <section className={styles.simplify}>
        <div className={styles.simplifyHeader}>
          <h2 className={styles.simplifyTitle}>Like:Me simplifica e conecta.</h2>
          <p className={styles.simplifySubtitle}>Bem-estar que cabe na sua vida real.</p>
          <small className={styles.simplifyTagline}>Sem culpa. Sem pressão. No seu tempo.</small>
        </div>
        <div className={styles.simplifyArt}>
          <img className={styles.simplifyArtImage} src={ASSETS.simplifyArtHighRes} alt="" />
        </div>
      </section>

      <section className={styles.avatar}>
        <div className={styles.avatarCard}>
          <h3>Seu Avatar de bem-estar</h3>
          <p>
            Crie seu avatar de bem-estar para te guiar e apoiar diariamente,
            expandindo sua rotina de autocuidado através de descobertas
            personalizadas, com base nos seus hábitos e informações de saúde.
          </p>
        </div>
        <img
          className={styles.avatarPhone}
          src={ASSETS.avatarPhone}
          alt="Avatar app"
        />
      </section>

      <section className={styles.app}>
        <h3>App</h3>
        <div className={styles.appGrid}>
          <article className={styles.appLeft}>
            <h4>Tudo que importa para o seu bem-estar, em um só lugar.</h4>
            <p>Ajudando usuários e profissionais a se conectarem.</p>
            <span>Do seu jeito, no seu tempo</span>
          </article>
          <article className={styles.appMiddle}>
            <img src={ASSETS.appChecklist} alt="" />
          </article>
          <article className={styles.appRight}>
            <img src={ASSETS.appAvatar} alt="" />
          </article>
        </div>
      </section>

      <section className={styles.newsletter}>
        <h3>
          Receba novidades, acesso antecipado e conteúdos exclusivos sobre
          bem-estar.
        </h3>
        <form>
          <input placeholder="Primeiro nome" />
          <input placeholder="Sobrenome" />
          <select defaultValue="">
            <option value="" disabled>
              Qual o seu perfil?
            </option>
            <option value="usuario">Usuário</option>
            <option value="profissional">Profissional</option>
          </select>
          <input placeholder="E-mail*" />
          <textarea rows={3} placeholder="Sua mensagem" />
          <button type="button">Cadastre-se</button>
        </form>
      </section>

      <footer className={styles.footer}>
        <div>
          <strong>LIKE:ME</strong>
          <p>Faça parte do Like:Me</p>
        </div>
        <div>
          <strong>Contato</strong>
          <p>like.me@global.com</p>
        </div>
        <div>
          <strong>Links rápidos</strong>
          <p>Termos e condições</p>
        </div>
      </footer>
    </main>
  );
};
