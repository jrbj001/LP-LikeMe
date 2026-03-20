import React from "react";
import "./style.css";

const ASSETS = {
  logo: "https://www.figma.com/api/mcp/asset/09537643-5401-4d23-b0dd-2c3dfcaff836",
  heroBg: "https://www.figma.com/api/mcp/asset/3044ae66-bdd2-47fe-aa38-4505ec72e07c",
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
    <main className="landing-desktop">
      <section className="top-menu">
        <span className="chip chip--active">Home</span>
        <span className="chip">Sobre</span>
        <span className="chip">Versão Beta</span>
        <span className="chip">Junte-se a nós</span>
      </section>

      <section className="hero">
        <img className="hero__bg" src={ASSETS.heroBg} alt="" />
        <div className="hero__inner">
          <img className="hero__logo" src={ASSETS.logo} alt="Like:me" />
        </div>
      </section>

      <section className="intro">
        <div className="intro__content">
          <div className="intro__copy">
            <h1>Já pensou em ter tudo que importa, num único lugar?</h1>
            <p>
              Aqui você reúne sua <strong>rotina de bem-estar</strong>, seus <strong>dados de saúde</strong>, descobre{" "}
              <strong>novas soluções</strong>, se conecta com <strong>comunidades</strong> e com{" "}
              <strong>quem cuida de você</strong>.
            </p>
            <p className="intro__highlight">Amplie o seu autocuidado, no seu tempo e do seu jeito.</p>
            <button type="button">Experimente a versão Beta</button>
          </div>
          <img className="intro__phone" src={ASSETS.heroPhone} alt="Mockup Like:me" />
        </div>
      </section>

      <section className="movement">
        <article className="movement__card">
          <div className="movement__text">
            <h2>Like: o seu Movimento</h2>
            <p>
              Seu corpo, seu ritmo. Profissionais e conteúdos que entendem onde você está e te ajudam a ir mais longe.
            </p>
          </div>
          <img src={ASSETS.movement} alt="Like: movimento" />
        </article>
      </section>

      <section className="simplify">
        <h2>Like:Me simplifica e conecta.</h2>
        <p>Bem-estar que cabe na sua vida real.</p>
        <small>Sem culpa. Sem pressão. No seu tempo.</small>
        <div className="simplify__art">
          <img src={ASSETS.simplifyBand} alt="" />
          <img src={ASSETS.simplifyOval} alt="" />
        </div>
      </section>

      <section className="avatar">
        <div className="avatar__card">
          <h3>Seu Avatar de bem-estar</h3>
          <p>
            Crie seu avatar de bem-estar para te guiar e apoiar diariamente, expandindo sua rotina de autocuidado através
            de descobertas personalizadas, com base nos seus hábitos e informações de saúde.
          </p>
        </div>
        <img className="avatar__phone" src={ASSETS.avatarPhone} alt="Avatar app" />
      </section>

      <section className="app">
        <h3>App</h3>
        <div className="app__grid">
          <article className="app__left">
            <h4>Tudo que importa para o seu bem-estar, em um só lugar.</h4>
            <p>Ajudando usuários e profissionais a se conectarem.</p>
            <span>Do seu jeito, no seu tempo</span>
          </article>
          <article className="app__middle">
            <img src={ASSETS.appChecklist} alt="" />
          </article>
          <article className="app__right">
            <img src={ASSETS.appAvatar} alt="" />
          </article>
        </div>
      </section>

      <section className="newsletter">
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

      <footer className="footer">
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
