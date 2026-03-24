import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { publicImg } from "../../utils/publicImg";
import type { TermsSectionId } from "./termosConstants";

const TERMS_ACCEPTANCE_ILLUSTRATION = publicImg("like-me-20.svg");

function TermosPlansBlock(): JSX.Element {
  return (
    <>
      <div className="termos-accordion-text">
        <p>
          5.1. A Like:Me poderá disponibilizar diferentes planos de acesso,
          gratuitos e/ou pagos, denominados, exemplificativamente, Básico,
          Premium e Avançado, cujas funcionalidades, limites e benefícios
          poderão variar conforme o plano contratado.
        </p>
      </div>
      <h3 className="termos-plans-subtitle">
        Tipos de Like: Me Plans (&quot;Planos&quot;)
      </h3>
      <div className="termos-plans-cards">
        <div className="termos-plan-card">
          <h4 className="termos-plan-card-title">Plano Free</h4>
          <p className="termos-plan-card-desc">Para começar, no seu ritmo.</p>
          <p className="termos-plan-card-desc">
            Explore o ecossistema Like:Me com liberdade e pague apenas pelo que
            consumir.
          </p>
          <p className="termos-plan-card-price">
            R$ 0,00 <span>| Mensal</span>
          </p>
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
          <p className="termos-plan-card-desc">
            Para aprofundar sua experiência.
          </p>
          <p className="termos-plan-card-desc">
            Mais benefícios, mais personalização e mais conexão com o seu
            bem-estar.
          </p>
          <p className="termos-plan-card-price">
            R$ 60,00 <span>| Mensal</span>
          </p>
          <p className="termos-plan-card-annual">
            Anual: R$ 660,00 | 10% de desconto
          </p>
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
          <p className="termos-plan-card-desc">
            A experiência mais completa do Like:Me, com dados aprofundados e
            acesso prioritário.
          </p>
          <p className="termos-plan-card-price">
            R$ 90,00 <span>| Mensal</span>
          </p>
          <p className="termos-plan-card-annual">
            Anual: R$ 972,00 | 10% de desconto
          </p>
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
      <div className="termos-accordion-text">
        <p>
          5.2. As funcionalidades específicas de cada plano serão informadas ao
          Usuário LikeMe no momento da contratação ou adesão.
        </p>
        <p>
          5.3. O Usuário LikeMe está ciente e reconhece que qualquer decisão
          relacionada à sua saúde deve ser tomada sempre com base na orientação
          de profissional qualificado.
        </p>
      </div>
    </>
  );
}

export function TermosSectionBody({
  sectionId,
}: {
  sectionId: TermsSectionId;
}): JSX.Element {
  switch (sectionId) {
    case 1:
      return (
        <>
          <div className="termos-accordion-text">
            <p>
              1.1. Ao acessar, baixar ou utilizar o Like:Me, o Usuário declara
              ter lido, compreendido e aceitado integralmente os presentes Termos
              e Condições de Uso, bem como a Política de Privacidade, que é parte
              integrante deste instrumento.
            </p>
            <p>
              1.2. Caso o Usuário LikeMe não concorde com quaisquer das
              disposições aqui previstas, deverá abster-se de acessar ou utilizar
              a plataforma.
            </p>
          </div>
          <div className="termos-accordion-image">
            <img src={TERMS_ACCEPTANCE_ILLUSTRATION} alt="" />
          </div>
        </>
      );
    case 2:
      return (
        <div className="termos-accordion-text">
          <p>
            2.1. O presente Termo tem por objeto regular o acesso e a
            utilização, pelo Usuário LikeMe, da plataforma digital Like:Me, de
            titularidade da Like:Me, que consiste em um ecossistema digital de
            autocuidado e bem-estar.
          </p>
          <p>2.2. A plataforma Like:Me permite, entre outras funcionalidades:</p>
          <p>a) a exploração de pilares de bem-estar;</p>
          <p>b) o recebimento de recomendações personalizadas;</p>
          <p>c) a criação e o acompanhamento de hábitos saudáveis;</p>
          <p>d) a interação em comunidades temáticas;</p>
          <p>
            e) a conexão com profissionais, serviços e/ou produtos de
            bem-estar;
          </p>
          <p>
            f) o comércio eletrônico, no qual determinados usuários poderão
            ofertar e vender produtos, serviços e/ou protocolos (doravante
            denominados &quot;Providers&quot;), enquanto outros usuários poderão
            adquiri-los, utilizando diferentes soluções de pagamento e envio;
          </p>
          <p>
            g) a realização de upload e arquivamento de dados de saúde, de
            acordo com o plano;
          </p>
          <p>
            h) a utilização de avatar digital com apoio de inteligência
            artificial e inteligência humana (&quot;LikeMe Wellness Avatar&quot;);
          </p>
          <p>
            i) descontos e benefícios exclusivos, tais como, mas não se
            limitando, a cashback, que serão ofertados a critério da Like:Me.
          </p>
          <p>
            2.3. A Like:Me é uma ferramenta de apoio informativo, não
            substituindo, em nenhuma hipótese, a consulta, o diagnóstico, o
            tratamento ou o acompanhamento por profissionais de saúde
            habilitados.
          </p>
        </div>
      );
    case 3:
      return (
        <div className="termos-accordion-text">
          <p>
            3.1. O uso da plataforma Like:Me é destinado exclusivamente a
            pessoas físicas maiores de 18 (dezoito) anos, plenamente capazes.
          </p>
          <p>
            3.2. O Usuário LikeMe declara que as informações fornecidas no
            cadastro e durante o uso da plataforma são verdadeiras, completas e
            atualizadas, responsabilizando-se civil e criminalmente por sua
            exatidão.
          </p>
          <p>
            3.3. A conta é pessoal e intransferível. É vedado compartilhar
            credenciais de acesso com terceiros ou permitir o uso da conta por
            outra pessoa.
          </p>
          <p>
            3.4. O Usuário LikeMe deverá manter ambiente de dispositivo seguro,
            conexão à internet adequada e atualizar o aplicativo quando
            solicitado, observando as políticas das lojas oficiais de
            distribuição.
          </p>
          <p>
            3.5. O descumprimento destes requisitos poderá ensejar suspensão ou
            encerramento da conta, sem prejuízo das medidas legais cabíveis.
          </p>
        </div>
      );
    case 4:
      return (
        <div className="termos-accordion-text">
          <p>
            4.1. A plataforma Like:Me não constitui serviço de saúde, nem
            substitui diagnóstico, tratamento, prescrição ou acompanhamento
            médico ou de outros profissionais regulamentados.
          </p>
          <p>
            4.2. Conteúdos, recomendações, indicadores e funcionalidades têm
            caráter informativo e de apoio ao bem-estar, não configurando
            parecer médico ou de emergência.
          </p>
          <p>
            4.3. Em caso de urgência ou emergência de saúde, o Usuário LikeMe
            deve contatar imediatamente serviços de emergência ou procurar
            atendimento presencial qualificado.
          </p>
          <p>
            4.4. A Like:Me não se responsabiliza por decisões de saúde tomadas
            com base exclusiva nas informações da plataforma, isentando-se de
            danos decorrentes de tal uso, na medida permitida pela legislação
            aplicável.
          </p>
        </div>
      );
    case 5:
      return <TermosPlansBlock />;
    case 6:
      return (
        <div className="termos-accordion-text">
          <p>
            6.1. O LikeMe Wellness Avatar é recurso que pode combinar dados
            fornecidos pelo Usuário LikeMe, algoritmos e, quando aplicável,
            revisão humana, para personalização da experiência na plataforma.
          </p>
          <p>
            6.2. O Usuário LikeMe reconhece que respostas ou sugestões geradas
            podem conter imprecisões e não substituem avaliação profissional.
          </p>
          <p>
            6.3. O uso do avatar está sujeito aos limites do plano contratado e
            às políticas de privacidade e consentimentos aplicáveis.
          </p>
        </div>
      );
    case 7:
      return (
        <div className="termos-accordion-text">
          <p>
            7.1. Eventuais transações com Providers são celebradas entre o
            Usuário LikeMe e o Provider, podendo a Like:Me atuar como
            intermediadora tecnológica, conforme cada funcionalidade.
          </p>
          <p>
            7.2. A Like:Me não garante a qualidade, segurança ou licitude de
            ofertas de terceiros, embora possa adotar critérios de integração
            na plataforma.
          </p>
          <p>
            7.3. Reclamações sobre produtos, serviços ou protocolos de Providers
            devem ser dirimidas primariamente com o respectivo Provider, sem
            prejuízo dos direitos do consumidor.
          </p>
        </div>
      );
    case 8:
      return (
        <div className="termos-accordion-text">
          <p>
            8.1. O tratamento de dados pessoais segue a Lei nº 13.709/2018
            (LGPD), o Regulamento (UE) 2016/679 (GDPR), quando aplicável, e a{" "}
            <Link to={ROUTES.PRIVACY}>Política de Privacidade</Link>, que
            integra estes Termos por referência.
          </p>
          <p>
            8.2. O Usuário LikeMe declara ciência de que dados de saúde ou
            sensíveis, quando tratados, dependem de bases legais e
            consentimentos específicos, conforme descrito na Política de
            Privacidade.
          </p>
        </div>
      );
    case 9:
      return (
        <div className="termos-accordion-text">
          <p>
            9.1. A plataforma, marcas, layout, textos, imagens, software e demais
            conteúdos são de titularidade da Like:Me ou licenciados, protegidos
            pela legislação de propriedade intelectual.
          </p>
          <p>
            9.2. É concedida ao Usuário LikeMe licença limitada, não exclusiva,
            intransferível e revogável para uso da plataforma conforme estes
            Termos, vedada a cópia, engenharia reversa ou exploração comercial não
            autorizada.
          </p>
          <p>
            9.3. Conteúdo gerado pelo Usuário LikeMe permanece de sua titularidade,
            concedendo à Like:Me licença para exibição e operação da plataforma,
            nos termos da Política de Privacidade.
          </p>
        </div>
      );
    case 10:
      return (
        <div className="termos-accordion-text">
          <p>
            10.1. Na máxima extensão permitida pela lei, a Like:Me não será
            responsável por danos indiretos, lucros cessantes, perda de dados ou
            interrupção de negócios decorrentes do uso ou impossibilidade de uso
            da plataforma.
          </p>
          <p>
            10.2. A responsabilidade total da Like:Me, quando reconhecida, ficará
            limitada ao valor efetivamente pago pelo Usuário LikeMe à Like:Me no
            período de 12 (doze) meses anteriores ao fato gerador, salvo
            disposição legal em contrário.
          </p>
        </div>
      );
    case 11:
      return (
        <div className="termos-accordion-text">
          <p>
            11.1. A Like:Me poderá alterar estes Termos a qualquer tempo, com
            publicação da versão atualizada na plataforma e indicação da data de
            vigência.
          </p>
          <p>
            11.2. O uso continuado após a entrada em vigor das alterações
            importará aceitação, salvo quando a lei exigir consentimento
            adicional.
          </p>
        </div>
      );
    case 12:
      return (
        <div className="termos-accordion-text">
          <p>
            12.1. A Like:Me poderá suspender ou encerrar o acesso do Usuário
            LikeMe em caso de violação destes Termos, de ordem legal ou risco à
            segurança da plataforma.
          </p>
          <p>
            12.2. O Usuário LikeMe poderá encerrar sua conta conforme fluxo
            disponível na plataforma, observados os prazos de retenção legal de
            dados.
          </p>
        </div>
      );
    case 13:
      return (
        <div className="termos-accordion-text">
          <p>
            13.1. A plataforma é fornecida &quot;no estado em que se encontra&quot; e
            &quot;conforme disponível&quot;, sem garantias de resultado específico ou
            ausência de falhas.
          </p>
          <p>
            13.2. A Like:Me emprega esforços razoáveis para manter a
            disponibilidade e a segurança, sem garantir operação ininterrupta ou
            livre de erros.
          </p>
        </div>
      );
    case 14:
      return (
        <div className="termos-accordion-text">
          <p>
            14.1. Comunicações operacionais, avisos legais e conteúdos de marketing
            (quando autorizados) poderão ser enviados pelos canais informados no
            cadastro ou na plataforma.
          </p>
          <p>
            14.2. O Usuário LikeMe poderá gerenciar preferências de comunicação
            conforme opções disponíveis na conta, respeitados comunicados
            obrigatórios por lei.
          </p>
        </div>
      );
    case 15:
      return (
        <div className="termos-accordion-text">
          <p>
            15.1. Estes Termos são regidos pelas leis da República Federativa do
            Brasil.
          </p>
          <p>
            15.2. Fica eleito o foro da comarca de São Paulo/SP para dirimir
            controvérsias, com renúncia a qualquer outro, por mais privilegiado
            que seja, salvo hipótese de consumidor com foro imperativo diverso.
          </p>
        </div>
      );
  }
}
