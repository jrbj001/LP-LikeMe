import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const SECTIONS = [
  { id: 1, title: "Aceitação do Termo", expanded: true },
  { id: 2, title: "Do Objeto", expanded: true },
  { id: 3, title: "Dos Requisitos para Utilização", expanded: false },
  { id: 4, title: "Limitações de Responsabilidade Médica e de Saúde", expanded: false },
  { id: 5, title: "Dos Planos Disponíveis", expanded: true },
  { id: 6, title: "Do LikeMe Wellness Avatar", expanded: false },
  { id: 7, title: "Da Relação com Terceiros (Providers)", expanded: false },
  { id: 8, title: "Do Tratamento de Dados Pessoais", expanded: false },
  { id: 9, title: "Conteúdos, Propriedade Intelectual e Licença de Uso", expanded: false },
  { id: 10, title: "Das Limitações de Responsabilidade", expanded: false },
  { id: 11, title: "Das Alterações dos Termos", expanded: false },
  { id: 12, title: "Da Suspensão e Encerramento", expanded: false },
  { id: 13, title: "Da Isenção de Garantias", expanded: false },
  { id: 14, title: "Das Comunicações", expanded: false },
  { id: 15, title: "Da Legislação Aplicável e do Foro", expanded: false },
];

export const Termos = (): JSX.Element => {
  const [openSections, setOpenSections] = useState<Record<number, boolean>>(() => {
    const initial: Record<number, boolean> = {};
    SECTIONS.forEach((s) => (initial[s.id] = s.expanded));
    return initial;
  });

  const toggle = (id: number) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="termos-page">
      {/* Menu */}
      <nav className="termos-menu">
        <Link to="/" className="termos-menu-link termos-menu-link--active">
          Home
        </Link>
        <span className="termos-menu-link">Recursos</span>
        <span className="termos-menu-link">Vídeo</span>
        <span className="termos-menu-link">Junte-se a nós</span>
      </nav>

      <div className="termos-content">
        {/* Hero */}
        <section className="termos-hero">
          <div className="termos-hero-bg" aria-hidden />
          <h1 className="termos-hero-title">
            TERMOS E CONDIÇÕES DE USO DA PLATAFORMA LIKE:ME
          </h1>
          <p className="termos-hero-date">Última atualização: 26/02/2026</p>
          <p className="termos-hero-intro">
            Pelo presente instrumento particular de Termos e Condições de Uso (&quot;Termo&quot;), de um lado LIKEME GLOBAL BRASIL LTDA, sociedade empresária limitada, com sede na Alameda Santos, nº 122, conjunto 603, São Paulo/SP, CEP 01418-000, inscrita no CNPJ/MF sob o nº 61.840.894/0001-12, doravante denominada simplesmente &quot;Like:Me&quot;, e, de outro lado, o USUÁRIO ou Usuário LikeMe, pessoa física maior de 18 (dezoito) anos, doravante denominado simplesmente &quot;USUÁRIO&quot; ou &quot;Usuário LikeMe&quot;, têm entre si justo e acordado o quanto segue:
          </p>
        </section>

        {/* Seções accordion */}
        <section className="termos-sections">
          {/* 1. Aceitação do Termo */}
          <div className="termos-accordion">
            <button
              type="button"
              className="termos-accordion-header"
              onClick={() => toggle(1)}
              aria-expanded={openSections[1]}
            >
              <span className="termos-accordion-number">1.</span>
              <span className="termos-accordion-title">Aceitação do Termo</span>
              <span className={`termos-accordion-icon ${openSections[1] ? "is-open" : ""}`}>▼</span>
            </button>
            {openSections[1] && (
              <div className="termos-accordion-body termos-accordion-body--with-image">
                <div className="termos-accordion-text">
                  <p>1.1. Ao acessar, baixar ou utilizar o Like:Me, o Usuário declara ter lido, compreendido e aceitado integralmente os presentes Termos e Condições de Uso, bem como a Política de Privacidade, que é parte integrante deste instrumento.</p>
                  <p>1.2. Caso o Usuário LikeMe não concorde com quaisquer das disposições aqui previstas, deverá abster-se de acessar ou utilizar a plataforma.</p>
                </div>
                <div className="termos-accordion-image">
                  <img src="/img/rectangle-34624226.png" alt="Like:Me app" />
                </div>
              </div>
            )}
          </div>

          {/* 2. Do Objeto */}
          <div className="termos-accordion">
            <button
              type="button"
              className="termos-accordion-header"
              onClick={() => toggle(2)}
              aria-expanded={openSections[2]}
            >
              <span className="termos-accordion-number">2.</span>
              <span className="termos-accordion-title">Do Objeto</span>
              <span className={`termos-accordion-icon ${openSections[2] ? "is-open" : ""}`}>▼</span>
            </button>
            {openSections[2] && (
              <div className="termos-accordion-body">
                <div className="termos-accordion-text">
                  <p>2.1. O presente Termo tem por objeto regular o acesso e a utilização, pelo Usuário LikeMe, da plataforma digital Like:Me, de titularidade da Like:Me, que consiste em um ecossistema digital de autocuidado e bem-estar.</p>
                  <p>2.2. A plataforma Like:Me permite, entre outras funcionalidades:</p>
                  <p>a) a exploração de pilares de bem-estar;</p>
                  <p>b) o recebimento de recomendações personalizadas;</p>
                  <p>c) a criação e o acompanhamento de hábitos saudáveis;</p>
                  <p>d) a interação em comunidades temáticas;</p>
                  <p>e) a conexão com profissionais, serviços e/ou produtos de bem-estar;</p>
                  <p>f) o comércio eletrônico, no qual determinados usuários poderão ofertar e vender produtos, serviços e/ou protocolos (doravante denominados &quot;Providers&quot;), enquanto outros usuários poderão adquiri-los, utilizando diferentes soluções de pagamento e envio;</p>
                  <p>g) a realização de upload e arquivamento de dados de saúde, de acordo com o plano;</p>
                  <p>h) a utilização de avatar digital com apoio de inteligência artificial e inteligência humana (&quot;LikeMe Wellness Avatar&quot;);</p>
                  <p>i) descontos e benefícios exclusivos, tais como, mas não se limitando, a cashback, que serão ofertados a critério da Like:Me.</p>
                  <p>2.3. A Like:Me é uma ferramenta de apoio informativo, não substituindo, em nenhuma hipótese, a consulta, o diagnóstico, o tratamento ou o acompanhamento por profissionais de saúde habilitados.</p>
                </div>
              </div>
            )}
          </div>

          {/* 3–4 colapsados */}
          {[3, 4].map((id) => (
            <div key={id} className="termos-accordion">
              <button
                type="button"
                className="termos-accordion-header"
                onClick={() => toggle(id)}
                aria-expanded={openSections[id]}
              >
                <span className="termos-accordion-number">{id}.</span>
                <span className="termos-accordion-title">{SECTIONS.find((s) => s.id === id)?.title}</span>
                <span className={`termos-accordion-icon termos-accordion-icon--right ${openSections[id] ? "is-open" : ""}`}>▶</span>
              </button>
              {openSections[id] && (
                <div className="termos-accordion-body">
                  <p className="termos-accordion-text">Conteúdo desta seção.</p>
                </div>
              )}
            </div>
          ))}

          {/* 5. Dos Planos Disponíveis */}
          <div className="termos-accordion">
            <button
              type="button"
              className="termos-accordion-header"
              onClick={() => toggle(5)}
              aria-expanded={openSections[5]}
            >
              <span className="termos-accordion-number">5.</span>
              <span className="termos-accordion-title">Dos Planos Disponíveis</span>
              <span className={`termos-accordion-icon ${openSections[5] ? "is-open" : ""}`}>▼</span>
            </button>
            {openSections[5] && (
              <div className="termos-accordion-body">
                <p className="termos-accordion-text">5.1. A Like:Me poderá disponibilizar diferentes planos de acesso, gratuitos e/ou pagos, denominados, exemplificativamente, Básico, Premium e Advançado, cujas funcionalidades, limites e benefícios poderão variar conforme o plano contratado.</p>
                <h3 className="termos-plans-subtitle">Tipos de Like: Me Plans (&quot;Planos&quot;)</h3>
                <div className="termos-plans-cards">
                  <div className="termos-plan-card">
                    <h4 className="termos-plan-card-title">Plano Free</h4>
                    <p className="termos-plan-card-desc">Para começar, no seu ritmo.</p>
                    <p className="termos-plan-card-desc">Explore o ecossistema Like:Me com liberdade e pague apenas pelo que consumir.</p>
                    <p className="termos-plan-card-price">R$ 0,00 <span>| Mensal</span></p>
                    <p className="termos-plan-card-annual">Anual: R$ 0,00</p>
                    <p className="termos-plan-card-inclui">Inclui:</p>
                    <ul>
                      <li>Acesso a todas as comunidades abertas;</li>
                      <li>Compra de produtos e soluções de bem-estar;</li>
                      <li>Agendamento com profissionais;</li>
                      <li>Pagamento apenas pelo que consumir.</li>
                    </ul>
                  </div>
                  <div className="termos-plan-card">
                    <h4 className="termos-plan-card-title">Plano Básico</h4>
                    <p className="termos-plan-card-desc">Para aprofundar sua experiência.</p>
                    <p className="termos-plan-card-desc">Mais benefícios, mais personalização e mais conexão com o seu bem-estar.</p>
                    <p className="termos-plan-card-price">R$ 60,00 <span>| Mensal</span></p>
                    <p className="termos-plan-card-annual">Anual: R$ 660,00 | 10% de desconto</p>
                    <p className="termos-plan-card-inclui">Inclui:</p>
                    <ul>
                      <li>Descontos exclusivos em produtos e serviços;</li>
                      <li>Pontos no programa de vantagens;</li>
                      <li>Upload de exames (limitado);</li>
                      <li>Conexão com dispositivos de bem-estar (limitado).</li>
                    </ul>
                  </div>
                  <div className="termos-plan-card">
                    <h4 className="termos-plan-card-title">Plano Premium</h4>
                    <p className="termos-plan-card-desc">Para quem quer ir mais longe.</p>
                    <p className="termos-plan-card-desc">A experiência mais completa do Like:Me, com dados aprofundados e acesso prioritário.</p>
                    <p className="termos-plan-card-price">R$ 90,00 <span>| Mensal</span></p>
                    <p className="termos-plan-card-annual">Anual: R$ 972,00 | 10% de desconto</p>
                    <p className="termos-plan-card-inclui">Inclui:</p>
                    <ul>
                      <li>Descontos exclusivos ampliados;</li>
                      <li>Pontos no programa de vantagens;</li>
                      <li>Upload ilimitado de exames;</li>
                      <li>Conexão ilimitada com dispositivos;</li>
                      <li>Mapa genético;</li>
                      <li>Prioridade de acesso a comunidades exclusivas.</li>
                    </ul>
                  </div>
                </div>
                <div className="termos-plans-table-wrap">
                  <div className="termos-plans-table-header">
                    <span />
                    <span>Free</span>
                    <span>Básico</span>
                    <span>Premium</span>
                  </div>
                  <div className="termos-plans-table-row">
                    <span>Acesso às comunidades</span>
                    <span className="termos-table-check">✓</span>
                    <span className="termos-table-check">✓</span>
                    <span className="termos-table-check">✓</span>
                  </div>
                  <div className="termos-plans-table-row">
                    <span>Comprar produtos e serviços</span>
                    <span className="termos-table-dash">–</span>
                    <span className="termos-table-check">✓</span>
                    <span className="termos-table-check">✓</span>
                  </div>
                  <div className="termos-plans-table-row">
                    <span>Descontos exclusivos</span>
                    <span className="termos-table-dash">–</span>
                    <span className="termos-table-check">✓</span>
                    <span className="termos-table-check">✓</span>
                  </div>
                  <div className="termos-plans-table-row">
                    <span>Upload de exames</span>
                    <span className="termos-table-dash">–</span>
                    <span>Limitado</span>
                    <span>Ilimitado</span>
                  </div>
                  <div className="termos-plans-table-row">
                    <span>Conectar dispositivos</span>
                    <span className="termos-table-dash">–</span>
                    <span>Limitado</span>
                    <span>Ilimitado</span>
                  </div>
                  <div className="termos-plans-table-row">
                    <span>Mapa genético</span>
                    <span className="termos-table-dash">–</span>
                    <span className="termos-table-dash">–</span>
                    <span className="termos-table-check">✓</span>
                  </div>
                  <div className="termos-plans-table-row">
                    <span>Comunidades exclusivas</span>
                    <span className="termos-table-dash">–</span>
                    <span className="termos-table-dash">–</span>
                    <span className="termos-table-check">✓</span>
                  </div>
                </div>
                <p className="termos-accordion-text">5.2. As funcionalidades específicas de cada plano serão informadas ao Usuário LikeMe no momento da contratação ou adesão. 5.3. O Usuário LikeMe está ciente e reconhece que qualquer decisão relacionada à sua saúde deve ser tomada sempre com base na orientação de profissional qualificado.</p>
              </div>
            )}
          </div>

          {/* 6–15 colapsados */}
          {SECTIONS.slice(5).map(({ id, title }) => (
            <div key={id} className="termos-accordion">
              <button
                type="button"
                className="termos-accordion-header"
                onClick={() => toggle(id)}
                aria-expanded={openSections[id]}
              >
                <span className="termos-accordion-number">{id}.</span>
                <span className="termos-accordion-title">{title}</span>
                <span className={`termos-accordion-icon termos-accordion-icon--right ${openSections[id] ? "is-open" : ""}`}>▶</span>
              </button>
              {openSections[id] && (
                <div className="termos-accordion-body">
                  <p className="termos-accordion-text">Conteúdo da seção {id}.</p>
                </div>
              )}
            </div>
          ))}
        </section>

        {/* Footer / CTA */}
        <footer className="termos-footer">
          <div className="termos-footer-bg" aria-hidden />
          <h2 className="termos-footer-title">Inscreva-se para saber mais!</h2>
          <div className="termos-footer-grid">
            <div className="termos-footer-contact">
              <p className="termos-footer-label">CONTATO</p>
              <a href="mailto:like.me@global.com" className="termos-footer-link">like.me@global.com</a>
            </div>
            <div className="termos-footer-status">
              <p className="termos-footer-label">STATUS</p>
              <p>Provedor de saúde</p>
              <p>Usuário</p>
              <p>Representante comercial</p>
            </div>
            <div className="termos-footer-form">
              <input type="text" placeholder="PRIMEIRO NOME" className="termos-footer-input" />
              <input type="text" placeholder="SOBRENOME" className="termos-footer-input" />
              <input type="email" placeholder="E-MAIL *" className="termos-footer-input" />
              <textarea placeholder="SUA MENSAGEM" className="termos-footer-input termos-footer-textarea" rows={3} />
            </div>
          </div>
          <div className="termos-footer-bottom">
            <div className="termos-footer-logo">
              <Link to="/">
                <img src="/img/like-me-26.svg" alt="Like:Me" />
              </Link>
            </div>
            <div className="termos-footer-newsletter">
              <p className="termos-footer-newsletter-title">Faça parte do Like:me</p>
              <p className="termos-footer-newsletter-desc">Assine a nossa newsletter e receba dicas, insights e inspirações de autocuidado.</p>
              <button type="button" className="termos-footer-btn">Assine</button>
            </div>
            <div className="termos-footer-links">
              <p className="termos-footer-links-title">Links rápidos</p>
              <Link to="/terms">Termos e condições</Link>
              <Link to="/privacy">Política de privacidade</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
