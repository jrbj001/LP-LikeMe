import "./style.css";
import { styles } from "./styles";

const ASSETS = {
  logo: "https://www.figma.com/api/mcp/asset/09537643-5401-4d23-b0dd-2c3dfcaff836",
  heroBg: "https://www.figma.com/api/mcp/asset/3044ae66-bdd2-47fe-aa38-4505ec72e07c",
  heroMobileBg: "https://www.figma.com/api/mcp/asset/6110e62b-970f-445e-bb57-0b412f77ea35",
  heroMobileLogo: "https://www.figma.com/api/mcp/asset/bb249594-0e06-4b26-b838-0fa6eaaecea1",
  heroMobilePhone: "https://www.figma.com/api/mcp/asset/7bf32a0a-ac01-4885-9956-462f9c72ad60",
  heroPhone: "https://www.figma.com/api/mcp/asset/af1e6c92-72c8-49f2-b8c2-05a6064123f0",
  movement: "https://www.figma.com/api/mcp/asset/7b52847a-a711-4f0e-91ad-7eeb952183c5",
  simplifyBand: "https://www.figma.com/api/mcp/asset/18af2641-08b8-4527-900b-10257787fa9d",
  simplifyOval: "https://www.figma.com/api/mcp/asset/38e63133-a86c-40a5-95b9-8f8ee130b02c",
  avatarPhone: "https://www.figma.com/api/mcp/asset/0b7500c4-bcce-4288-9792-7acc8078e81c",
  appChecklist: "https://www.figma.com/api/mcp/asset/1259753d-593c-4463-ad3f-e94e26e7ca23",
  appAvatar: "https://www.figma.com/api/mcp/asset/2a89b917-7134-4202-b99e-0dddcbfab36d",
};

export const Home = (): JSX.Element => {
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
              <source media="(max-width: 900px)" srcSet={ASSETS.heroMobileLogo} />
              <img className={styles.heroSectionLogo} src={ASSETS.logo} alt="Like:me" />
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
              Aqui você reúne sua <strong>rotina de bem-estar</strong>, seus <strong>dados de saúde</strong>, descobre{" "}
              <strong>novas soluções</strong>, se conecta com <strong>comunidades</strong> e com{" "}
              <strong>quem cuida de você</strong>.
            </p>
            <p className={styles.heroSectionHighlight}>Amplie o seu autocuidado, no seu tempo e do seu jeito.</p>
            <button type="button">Experimente a versão Beta</button>
          </div>
          <picture className={styles.heroSectionPhoneWrap}>
            <source media="(max-width: 900px)" srcSet={ASSETS.heroMobilePhone} />
            <img className={styles.heroSectionPhone} src={ASSETS.heroPhone} alt="Mockup Like:me" />
          </picture>
        </div>
      </section>

      <section className={styles.movement}>
        <article className={styles.movementCard}>
          <div className={styles.movementText}>
            <h2>Like: o seu Movimento</h2>
            <p>
              Seu corpo, seu ritmo. Profissionais e conteúdos que entendem onde você está e te ajudam a ir mais longe.
            </p>
          </div>
          <img src={ASSETS.movement} alt="Like: movimento" />
        </article>
      </section>

      <section className={styles.simplify}>
        <h2>Like:Me simplifica e conecta.</h2>
        <p>Bem-estar que cabe na sua vida real.</p>
        <small>Sem culpa. Sem pressão. No seu tempo.</small>
        <div className={styles.simplifyArt}>
          <img src={ASSETS.simplifyBand} alt="" />
          <img src={ASSETS.simplifyOval} alt="" />
        </div>
      </section>

      <section className={styles.avatar}>
        <div className={styles.avatarCard}>
          <h3>Seu Avatar de bem-estar</h3>
          <p>
            Crie seu avatar de bem-estar para te guiar e apoiar diariamente, expandindo sua rotina de autocuidado através
            de descobertas personalizadas, com base nos seus hábitos e informações de saúde.
          </p>
        </div>
        <img className={styles.avatarPhone} src={ASSETS.avatarPhone} alt="Avatar app" />
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
        <h3>Receba novidades, acesso antecipado e conteúdos exclusivos sobre bem-estar.</h3>
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
