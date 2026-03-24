import React, { useState } from "react";
import { LandingFooter } from "../../components/layout/LandingFooter";
import { LandingHeader } from "../../components/layout/LandingHeader";
import { styles } from "../Home/styles";
import "../Termos/style.css";

const PRIVACY_SECTIONS = [
  { id: 1, title: "Quais dados coletamos?", expanded: true },
  { id: 2, title: "Para que usamos seus dados (finalidade)?", expanded: true },
  { id: 3, title: "Qual a base legal para usarmos seus dados?", expanded: false },
  { id: 4, title: "Como protegemos seus dados?", expanded: false },
  { id: 5, title: "Transferência internacional de dados", expanded: false },
  { id: 6, title: "Com quem compartilhamos seus dados?", expanded: false },
  { id: 7, title: "Por quanto tempo guardamos seus dados?", expanded: false },
  { id: 8, title: "Seus direitos como titular de dados", expanded: false },
  { id: 9, title: "Cookies e Dados de Navegação", expanded: false },
  { id: 10, title: "Links para sites de terceiros", expanded: false },
  { id: 11, title: "Fale conosco", expanded: false },
  { id: 12, title: "Mudanças nesta Política", expanded: false },
];

export const Privacy = (): JSX.Element => {
  const [openSections, setOpenSections] = useState<Record<number, boolean>>(() => {
    const initial: Record<number, boolean> = {};
    PRIVACY_SECTIONS.forEach((s) => (initial[s.id] = s.expanded));
    return initial;
  });

  const toggle = (id: number) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <main className={styles.landingDesktop}>
      <section className={`${styles.heroSection} ${styles.heroSectionLegal}`}>
        <LandingHeader variant="legal" />
      </section>

      <div className="termos-page termos-page--with-landing">
        <div className="termos-content">
        <section className="termos-hero">
          <div className="termos-hero-bg" aria-hidden />
          <h1 className="termos-hero-title">POLÍTICA DE PRIVACIDADE</h1>
          <p className="termos-hero-date">Atualizada em: 02/02/2026</p>
          <p className="termos-hero-intro">
            LIKEME GLOBAL BRASIL LTDA, sociedade empresária limitada, com sede na Alameda Santos, nº 122, conjunto 603, São Paulo/SP, CEP 01418-000, inscrita no CNPJ/MF sob o nº 61.840.894/0001-12, doravante denominada simplesmente &quot;Like:Me&quot;, valoriza a sua privacidade e está comprometida com a proteção dos dados pessoais de seus clientes, parceiros e usuários, nos termos da Lei nº 13.709/2018 (Lei Geral de Proteção de Dados - LGPD) e do Regulamento (UE) 2016/679 (General Data Protection Regulation - GDPR).
          </p>
          <p className="termos-hero-intro">
            Esta Política explica de forma simples e transparente como coletamos, usamos e protegemos seus dados pessoais utilizados na plataforma Like:Me, para fins de personalização da experiência, criação do avatar, recomendações e integrações, nos termos da legislação aplicável e desta Política de Privacidade.
          </p>
        </section>

        <section className="termos-sections">
          {/* 1. Quais dados coletamos? */}
          <div className="termos-accordion">
            <button type="button" className="termos-accordion-header" onClick={() => toggle(1)} aria-expanded={openSections[1]}>
              <span className="termos-accordion-number">1.</span>
              <span className="termos-accordion-title">Quais dados coletamos?</span>
              <span className={`termos-accordion-icon ${openSections[1] ? "is-open" : ""}`}>▼</span>
            </button>
            {openSections[1] && (
              <div className="termos-accordion-body">
                <div className="termos-accordion-text">
                  <p>Ao utilizar a plataforma Like:Me, podemos coletar os dados pessoais e dados sensíveis indicados abaixo, ressaltando que a relação de dados coletados pode variar de acordo com o serviço solicitado e/ou ambiente utilizado na plataforma:</p>
                  <ul>
                    <li><strong>Dados cadastrais:</strong> nome completo, RG, CPF, idade, sexo, peso, altura, e-mail, telefone, endereço completo;</li>
                    <li><strong>Dados financeiros:</strong> quando necessário para compra de produtos e/ou serviços dentro da plataforma, tais como número do cartão de crédito ou débito, nome do titular do cartão de crédito ou débito, data de validade e código de segurança;</li>
                    <li><strong>Dados de saúde:</strong> dados de saúde inseridos por você (tais como, mas não se limitando, exames, prescrições médicas, biomarcadores, informações sobre saúde física e/ou mental), bem como respondidos durante a utilização da plataforma;</li>
                    <li><strong>Mídias de celular:</strong> fotos ou arquivos contendo os exames;</li>
                    <li><strong>Acesso a câmera/áudio do celular:</strong> a Like:Me precisa da sua permissão para acessar a câmera e/ou áudio do seu celular de modo a permitir o registro fotográfico dos seus exames;</li>
                    <li><strong>Arquivos do celular:</strong> a Like:Me precisa da sua permissão para acessar arquivos do celular (read/write_external_storage) para poder salvar os resultados dos exames em pdf no dispositivo;</li>
                    <li><strong>Dados técnicos:</strong> tais como IP, IMEI, WIFI, navegador, cookies e interações, check-in e interações em nossa plataforma;</li>
                    <li><strong>Dados integrados:</strong> dados provenientes dos seus dispositivos (devices) integrados à plataforma;</li>
                    <li><strong>Dados de check-in:</strong> dados de check-in fornecidos por você por meio de push de feedback realizado na própria plataforma.</li>
                  </ul>
                  <p>Os dados poderão ser solicitados mediante o preenchimento de cadastro no momento de acesso à plataforma Like:Me, bem como durante a aquisição de produtos e/ou serviços e a utilização das funcionalidades por ela disponibilizadas. Os dados coletados nas referidas situações são necessários para a plena execução dos serviços oferecidos pela Like:Me e podem variar segundo a solicitação feita, tipo de produto ou serviço contratado e/ou funcionalidade utilizada.</p>
                  <p>A Like:Me é uma plataforma destinada a pessoa física maior de 18 (dezoito) anos, conforme consta em nossos Termos e Condições de Uso. Se você for pai, mãe ou responsável legal e fornecer dados do menor, estará, desde já, expressamente consentindo com a coleta, tratamento e o uso desses dados pessoais conforme esta Política.</p>
                  <p><strong>1.3.1.</strong> Em razão do disposto acima, caso seja detectado o cadastro e/ou acesso na plataforma por um menor sem o seu conhecimento e/ou consentimento, a Like:Me desde já se reserva no direito de adotar as medidas legais cabíveis, ficando o canal oficial de atendimento à sua disposição para demais procedimentos (conforme item 11).</p>
                </div>
              </div>
            )}
          </div>

          {/* 2. Para que usamos seus dados? */}
          <div className="termos-accordion">
            <button type="button" className="termos-accordion-header" onClick={() => toggle(2)} aria-expanded={openSections[2]}>
              <span className="termos-accordion-number">2.</span>
              <span className="termos-accordion-title">Para que usamos seus dados (finalidade)?</span>
              <span className={`termos-accordion-icon ${openSections[2] ? "is-open" : ""}`}>▼</span>
            </button>
            {openSections[2] && (
              <div className="termos-accordion-body">
                <div className="termos-accordion-text">
                  <p>Usamos os seus dados para as seguintes finalidades:</p>
                  <ul>
                    <li>Realizar a identificação e cadastro na plataforma Like:Me;</li>
                    <li>Personalização da experiência;</li>
                    <li>Criação do seu perfil individualizado por meio do LikeMe Wellness Avatar e permitir sua constante atualização;</li>
                    <li>Produzir análises individualizadas e criação de indicadores;</li>
                    <li>Realizar monitoramento contínuo da evolução dos indicadores apurados;</li>
                    <li>Recomendações personalizadas e integrações;</li>
                    <li>Sugerir rotinas, enviar lembretes e acompanhar seu progresso de autocuidado;</li>
                    <li>Emitir notas fiscais;</li>
                    <li>Comunicação (atendimento, atualizações, suporte);</li>
                    <li>Cumprimento de obrigações legais e regulatórias;</li>
                    <li>Ajudar a realizar melhorias e aprimoramentos na nossa plataforma e experiência aos usuários;</li>
                    <li>Realizar campanhas de marketing e enviar publicidade por meio dos contatos informados.</li>
                  </ul>
                  <p>Os dados serão utilizados exclusivamente para as finalidades descritas nesta Política de Privacidade e em conformidade com a legislação aplicável.</p>
                </div>
              </div>
            )}
          </div>

          {/* 3. Base legal */}
          <div className="termos-accordion">
            <button type="button" className="termos-accordion-header" onClick={() => toggle(3)} aria-expanded={openSections[3]}>
              <span className="termos-accordion-number">3.</span>
              <span className="termos-accordion-title">Qual a base legal para usarmos seus dados?</span>
              <span className={`termos-accordion-icon termos-accordion-icon--right ${openSections[3] ? "is-open" : ""}`}>▶</span>
            </button>
            {openSections[3] && (
              <div className="termos-accordion-body">
                <div className="termos-accordion-text">
                  <p>Tratamos seus dados com base em:</p>
                  <ul>
                    <li><strong>Consentimento</strong> (art. 7º, I, e art. 11, I da LGPD / art. 6(1)(a) do GDPR): quando você nos autoriza a usar seus dados para alguma finalidade específica.</li>
                    <li><strong>Obrigação legal</strong> (art. 7º, II, e art. 11, II, &quot;a&quot; da LGPD / art. 6(1)(c) do GDPR): para cumprir obrigações legais ou regulatórias, inclusive fiscais.</li>
                    <li><strong>Execução de contrato</strong> (art. 7º, V e VIII, art. 11, II, &quot;f&quot; da LGPD / art. 6(1)(b) do GDPR): quando usamos seus dados para prestar os serviços contratados.</li>
                    <li><strong>Legítimo interesse</strong> (art. 7º, IX da LGPD / art. 6(1)(f) do GDPR): quando necessário para melhorar nossos serviços, com respeito aos seus direitos.</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* 4. Como protegemos */}
          <div className="termos-accordion">
            <button type="button" className="termos-accordion-header" onClick={() => toggle(4)} aria-expanded={openSections[4]}>
              <span className="termos-accordion-number">4.</span>
              <span className="termos-accordion-title">Como protegemos seus dados?</span>
              <span className={`termos-accordion-icon termos-accordion-icon--right ${openSections[4] ? "is-open" : ""}`}>▶</span>
            </button>
            {openSections[4] && (
              <div className="termos-accordion-body">
                <div className="termos-accordion-text">
                  <p>Adotamos medidas de segurança técnicas e administrativas para proteger seus dados contra acessos não autorizados, vazamento, perda e/ou uso indevido. Entre as medidas estão:</p>
                  <ul>
                    <li>Acesso restrito aos dados apenas por pessoas autorizadas;</li>
                    <li>Contratos com cláusulas de confidencialidade com todos os envolvidos;</li>
                    <li>Armazenamento seguro (nuvem com criptografia).</li>
                  </ul>
                  <p>Na hipótese de ocorrer, o que não se espera, qualquer incidente de segurança envolvendo os dados pessoais tratados — entendido como evento adverso confirmado que comprometa a confidencialidade, integridade, disponibilidade ou autenticidade dos dados, incluindo casos de acesso não autorizado, divulgação, perda, alteração ou indisponibilidade, seja por ação acidental ou intencional — a Like:Me adotará todas as medidas cabíveis para sua identificação, contenção e mitigação, nos termos do art. 48 da LGPD.</p>
                </div>
              </div>
            )}
          </div>

          {/* 5. Transferência internacional */}
          <div className="termos-accordion">
            <button type="button" className="termos-accordion-header" onClick={() => toggle(5)} aria-expanded={openSections[5]}>
              <span className="termos-accordion-number">5.</span>
              <span className="termos-accordion-title">Transferência internacional de dados</span>
              <span className={`termos-accordion-icon termos-accordion-icon--right ${openSections[5] ? "is-open" : ""}`}>▶</span>
            </button>
            {openSections[5] && (
              <div className="termos-accordion-body">
                <div className="termos-accordion-text">
                  <p>Há situações em que seus dados poderão ser armazenados, processados e/ou transferidos para fora do Brasil e/ou da União Europeia, especialmente, mas não se limitando, quando usamos plataformas como Google Drive, Dropbox e/ou ferramentas de tradução (CAT Tools). Quando isso acontece, buscamos garantir que os dados permaneçam protegidos por mecanismos legais válidos, como:</p>
                  <ul>
                    <li>Transferência para países com nível de proteção de dados reconhecido;</li>
                    <li>Adoção de cláusulas contratuais padrão e/ou mecanismos equivalentes para garantir a segurança e conformidade com a LGPD e a GDPR;</li>
                    <li>Busca pelo mesmo grau de proteção de segurança e conformidade com esta Política de Privacidade.</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* 6. Com quem compartilhamos */}
          <div className="termos-accordion">
            <button type="button" className="termos-accordion-header" onClick={() => toggle(6)} aria-expanded={openSections[6]}>
              <span className="termos-accordion-number">6.</span>
              <span className="termos-accordion-title">Com quem compartilhamos seus dados?</span>
              <span className={`termos-accordion-icon termos-accordion-icon--right ${openSections[6] ? "is-open" : ""}`}>▶</span>
            </button>
            {openSections[6] && (
              <div className="termos-accordion-body">
                <div className="termos-accordion-text">
                  <p>Seus dados poderão ser compartilhados com:</p>
                  <ul>
                    <li>Profissionais e/ou prestadores de serviços envolvidos direta ou indiretamente na execução da plataforma;</li>
                    <li>Empresas de contabilidade, bancos e meios de pagamento, quando necessário para contabilidade, emissão de notas fiscais e/ou sistemas de pagamento;</li>
                    <li>Plataformas e softwares utilizados na prestação dos serviços (CAT Tools, softwares de DTP, SDKs, APIs, UI Kits, armazenamento em nuvem); e</li>
                    <li>Autoridades públicas, mediante obrigação legal ou requisição.</li>
                  </ul>
                  <p><strong>A Like:Me não vende, aluga, negocia e/ou comercializa, sob nenhuma hipótese, os seus dados.</strong></p>
                </div>
              </div>
            )}
          </div>

          {/* 7. Por quanto tempo */}
          <div className="termos-accordion">
            <button type="button" className="termos-accordion-header" onClick={() => toggle(7)} aria-expanded={openSections[7]}>
              <span className="termos-accordion-number">7.</span>
              <span className="termos-accordion-title">Por quanto tempo guardamos seus dados?</span>
              <span className={`termos-accordion-icon termos-accordion-icon--right ${openSections[7] ? "is-open" : ""}`}>▶</span>
            </button>
            {openSections[7] && (
              <div className="termos-accordion-body">
                <div className="termos-accordion-text">
                  <p>Guardamos seus dados:</p>
                  <ul>
                    <li>Durante a sua utilização da plataforma;</li>
                    <li>Pelo tempo necessário para atender exigências legais, regulatórias e/ou fiscais.</li>
                  </ul>
                  <p>Os dados serão excluídos e/ou anonimizados de forma segura e de acordo com a legislação vigente.</p>
                </div>
              </div>
            )}
          </div>

          {/* 8. Seus direitos */}
          <div className="termos-accordion">
            <button type="button" className="termos-accordion-header" onClick={() => toggle(8)} aria-expanded={openSections[8]}>
              <span className="termos-accordion-number">8.</span>
              <span className="termos-accordion-title">Seus direitos como titular de dados</span>
              <span className={`termos-accordion-icon termos-accordion-icon--right ${openSections[8] ? "is-open" : ""}`}>▶</span>
            </button>
            {openSections[8] && (
              <div className="termos-accordion-body">
                <div className="termos-accordion-text">
                  <p>Você pode, a qualquer momento:</p>
                  <ul>
                    <li>Confirmar a existência de como tratamos seus dados;</li>
                    <li>Acessar e/ou corrigir seus dados (por ex. incompletos, inexatos e/ou desatualizados);</li>
                    <li>Pedir a exclusão de seus dados, exceto se para cumprimento de obrigação prevista em lei;</li>
                    <li>Portabilidade, anonimização, bloqueio e/ou eliminação de dados;</li>
                    <li>Revogar o consentimento dado anteriormente;</li>
                    <li>Fazer uma reclamação à Autoridade Nacional de Proteção de Dados (ANPD) e/ou à autoridade de proteção de dados competente.</li>
                  </ul>
                  <p>Para isso, é só entrar em contato conosco (veja abaixo item 11).</p>
                </div>
              </div>
            )}
          </div>

          {/* 9. Cookies */}
          <div className="termos-accordion">
            <button type="button" className="termos-accordion-header" onClick={() => toggle(9)} aria-expanded={openSections[9]}>
              <span className="termos-accordion-number">9.</span>
              <span className="termos-accordion-title">Cookies e Dados de Navegação</span>
              <span className={`termos-accordion-icon termos-accordion-icon--right ${openSections[9] ? "is-open" : ""}`}>▶</span>
            </button>
            {openSections[9] && (
              <div className="termos-accordion-body">
                <div className="termos-accordion-text">
                  <p>Ao utilizar a plataforma, podemos coletar informações suas automaticamente por meio de cookies, incluindo cookies fornecidos por terceiros. Utilizamos cookies e tecnologias similares em nossa plataforma, bem como as informações que eles coletam, para diversas finalidades, incluindo:</p>
                  <ul>
                    <li>Análise de desempenho;</li>
                    <li>Melhorar a navegação;</li>
                    <li>Analisar o uso da plataforma;</li>
                    <li>Oferecer conteúdo personalizado;</li>
                    <li>Segurança.</li>
                  </ul>
                  <p>Você pode desativar os cookies nas configurações do seu navegador. No entanto, isso pode afetar o funcionamento de algumas partes da plataforma.</p>
                </div>
              </div>
            )}
          </div>

          {/* 10. Links terceiros */}
          <div className="termos-accordion">
            <button type="button" className="termos-accordion-header" onClick={() => toggle(10)} aria-expanded={openSections[10]}>
              <span className="termos-accordion-number">10.</span>
              <span className="termos-accordion-title">Links para sites de terceiros</span>
              <span className={`termos-accordion-icon termos-accordion-icon--right ${openSections[10] ? "is-open" : ""}`}>▶</span>
            </button>
            {openSections[10] && (
              <div className="termos-accordion-body">
                <div className="termos-accordion-text">
                  <p>Na plataforma Like:Me podemos incluir links para sites de terceiros, o que não implica que sejam operados por nós ou de nossa propriedade. O processamento de dados pessoais por terceiros responsáveis por seus sites não é regido por esta Política.</p>
                  <p>Você declara estar ciente de que a Like:Me não exerce qualquer controle sobre sites de terceiros, tampouco se responsabiliza por seus conteúdos, produtos ou serviços oferecidos, nem pelo tratamento de dados pessoais por eles realizado. Assim, o acesso a tais sites é de sua exclusiva responsabilidade.</p>
                </div>
              </div>
            )}
          </div>

          {/* 11. Fale conosco */}
          <div className="termos-accordion">
            <button type="button" className="termos-accordion-header" onClick={() => toggle(11)} aria-expanded={openSections[11]}>
              <span className="termos-accordion-number">11.</span>
              <span className="termos-accordion-title">Fale conosco</span>
              <span className={`termos-accordion-icon termos-accordion-icon--right ${openSections[11] ? "is-open" : ""}`}>▶</span>
            </button>
            {openSections[11] && (
              <div className="termos-accordion-body">
                <div className="termos-accordion-text">
                  <p>Se você tiver qualquer dúvida sobre esta Política de Privacidade, a proteção de dados ou quiser exercer seus direitos como titular de dados (inclusive, mas não se limitando, a confirmação da existência de dados, alteração, atualização, portabilidade e/ou eliminação de seus dados pessoais), entre em contato com o nosso Encarregado de Proteção de Dados (DPO), pelo e-mail <a href="mailto:suporte@likeme.global">suporte@likeme.global</a>.</p>
                  <p>Responderemos às solicitações respeitados os prazos legais.</p>
                </div>
              </div>
            )}
          </div>

          {/* 12. Mudanças */}
          <div className="termos-accordion">
            <button type="button" className="termos-accordion-header" onClick={() => toggle(12)} aria-expanded={openSections[12]}>
              <span className="termos-accordion-number">12.</span>
              <span className="termos-accordion-title">Mudanças nesta Política</span>
              <span className={`termos-accordion-icon termos-accordion-icon--right ${openSections[12] ? "is-open" : ""}`}>▶</span>
            </button>
            {openSections[12] && (
              <div className="termos-accordion-body">
                <div className="termos-accordion-text">
                  <p>Esta Política pode ser atualizada periodicamente. Sempre que isso acontecer, a nova versão será publicada neste local com a data de revisão atualizada.</p>
                </div>
              </div>
            )}
          </div>
        </section>
        </div>
      </div>

      <LandingFooter />
    </main>
  );
};
