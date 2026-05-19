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
        Tipos de Like:Me Plans (&quot;Planos&quot;)
      </h3>
      <div className="termos-plans-table-wrap">
        <div className="termos-plans-table-header">
          <span>Suas vantagens</span>
          <span>Básico</span>
          <span>Premium</span>
          <span>Avançado</span>
        </div>
        <div className="termos-plans-table-row">
          <span>Acesso a conteúdos, comunidades e marcadores</span>
          <span className="termos-table-check">✓</span>
          <span className="termos-table-check">✓</span>
          <span className="termos-table-check">✓</span>
        </div>
        <div className="termos-plans-table-row">
          <span>Upload e arquivamento de dados de saúde</span>
          <span>Limitado</span>
          <span>Ilimitado</span>
          <span className="termos-table-dash">–</span>
        </div>
        <div className="termos-plans-table-row">
          <span>Integração com apps e dispositivos</span>
          <span>Limitado</span>
          <span>Ilimitado</span>
          <span className="termos-table-dash">–</span>
        </div>
        <div className="termos-plans-table-row">
          <span>Recomendação avançada do avatar</span>
          <span className="termos-table-dash">–</span>
          <span className="termos-table-check">✓</span>
          <span className="termos-table-check">✓</span>
        </div>
        <div className="termos-plans-table-row">
          <span>
            Benefícios e/ou descontos exclusivos (ver % indicado no plano
            contratado)
          </span>
          <span className="termos-table-dash">–</span>
          <span className="termos-table-check">✓</span>
          <span>✓ (maiores)</span>
        </div>
        <div className="termos-plans-table-row">
          <span>Cashback no marketplace (ver % indicado no plano contratado)</span>
          <span className="termos-table-dash">–</span>
          <span className="termos-table-dash">–</span>
          <span className="termos-table-check">✓</span>
        </div>
        <div className="termos-plans-table-row">
          <span>Acessos exclusivos</span>
          <span className="termos-table-dash">–</span>
          <span className="termos-table-dash">–</span>
          <span className="termos-table-check">✓</span>
        </div>
      </div>
      <div className="termos-accordion-text">
        <p>
          5.2. As funcionalidades específicas de cada plano serão informadas ao
          Usuário LikeMe no momento da contratação ou adesão, podendo incluir,
          entre outras:
        </p>
        <p>a) acesso a conteúdo, comunidades e marcadores;</p>
        <p>b) upload de dados de saúde;</p>
        <p>c) integração com aplicativos e dispositivos;</p>
        <p>
          d) recomendações avançadas do avatar, condicionadas aos dados
          disponibilizados na plataforma;
        </p>
        <p>e) benefícios exclusivos;</p>
        <p>f) suplementação e protocolos personalizados; e</p>
        <p>g) percentual de desconto e de cashback aplicado.</p>
        <p>
          5.3. O Usuário LikeMe está ciente e reconhece que qualquer decisão
          relacionada à sua saúde deve ser tomada sempre com base na orientação
          de profissional qualificado.
        </p>
        <p>
          5.4. A Like:Me reserva-se o direito de alterar, incluir e/ou excluir
          funcionalidades dos planos, mediante comunicação prévia ao Usuário.
          Caso o Usuário não concorde com as alterações promovidas, poderá
          solicitar o cancelamento do respectivo plano, observadas as condições
          aplicáveis, antes da data de início de vigência das modificações ou no
          prazo informado na comunicação. A continuidade da utilização do plano
          após a entrada em vigor das alterações será considerada como
          concordância com as novas condições.
        </p>
        <p>
          5.5. A Like:Me poderá, a seu exclusivo critério, disponibilizar ofertas
          promocionais, tais como sorteios, descontos e outros incentivos, bem
          como planos ou assinaturas em condições especiais (doravante
          denominadas &quot;Ofertas&quot;). A elegibilidade para participação nas
          Ofertas será definida pela Like:Me, conforme critérios próprios. Os
          requisitos aplicáveis, bem como eventuais limitações e demais
          condições, serão informados previamente à adesão do usuário ou por
          meio de outras comunicações disponibilizadas pela Like:Me.
        </p>
        <p>
          5.6. Quando aplicável, os pagamentos poderão ser realizados por meio
          de cartão de crédito, cartão de débito, boleto bancário, Pix ou outros
          meios disponibilizados na plataforma.
        </p>
        <p>
          5.7. As condições comerciais, valores, periodicidade, formas de
          pagamento e política de cancelamento serão informadas de forma clara
          no momento de sua contratação.
        </p>
        <p>
          5.8. Os valores pagos pelo Usuário LikeMe a título de assinatura ou
          contratação de plano referem-se exclusivamente à disponibilização e
          utilização das funcionalidades correspondentes, não se confundindo, em
          qualquer hipótese, com os valores devidos por aquisições de produtos,
          serviços, protocolos ou quaisquer outros itens realizados no âmbito da
          plataforma ofertados pelos Providers, os quais serão cobrados de forma
          independente, conforme as condições aplicáveis a cada operação.
        </p>
        <p>
          5.9. O Usuário LikeMe concorda que a falta de pagamento poderá
          resultar na suspensão e/ou cancelamento do acesso às funcionalidades
          pagas.
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
              e Condições de Uso, bem como a Política de Privacidade, que é
              parte integrante deste instrumento.
            </p>
            <p>
              1.2. Caso o Usuário LikeMe não concorde com quaisquer das
              disposições aqui previstas, deverá abster-se de acessar ou
              utilizar a plataforma.
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
            artificial e inteligência humana (&quot;LikeMe Wellness
            Avatar&quot;);
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
          <p>2.3.1. As informações disponibilizadas no aplicativo:</p>
          <ul>
            <li>não constituem aconselhamento médico individualizado;</li>
            <li>não substituem consulta com profissionais habilitados;</li>
            <li>
              devem ser utilizadas como apoio complementar ao cuidado com a
              saúde.
            </li>
          </ul>
          <p>
            2.3.2. O Usuário LikeMe reconhece que qualquer decisão relacionada
            à sua saúde deve ser tomada com base na orientação de profissional
            qualificado.
          </p>
        </div>
      );
    case 3:
      return (
        <div className="termos-accordion-text">
          <p>
            3.1. Para utilizar a plataforma Like:Me, o Usuário LikeMe declara e
            garante que:
          </p>
          <p>a) possui idade igual ou superior a 18 (dezoito) anos;</p>
          <p>b) possui capacidade civil plena; e</p>
          <p>c) fornecerá informações verdadeiras, completas e atualizadas.</p>
          <p>3.2. O Usuário LikeMe é responsável por:</p>
          <p>a) manter a confidencialidade de suas credenciais de acesso;</p>
          <p>b) todas as atividades realizadas em sua conta;</p>
          <p>
            c) informar imediatamente qualquer uso não autorizado, através do
            canal de suporte@likeme.global.
          </p>
          <p>3.3. É vedado ao usuário:</p>
          <ul>
            <li>fornecer informações falsas e/ou de terceiros sem autorização;</li>
            <li>
              utilizar o aplicativo para fins ilícitos, fraudulentos e/ou
              contrários à boa-fé;
            </li>
            <li>
              inserir e/ou compartilhar conteúdos ofensivos, discriminatórios ou
              ilegais;
            </li>
            <li>
              tentar acessar áreas restritas e/ou sistemas do aplicativo sem
              autorização;
            </li>
            <li>
              praticar qualquer ato que comprometa a segurança e/ou
              funcionamento da plataforma;
            </li>
            <li>publicar conteúdos inadequados ou ilegais; e</li>
            <li>
              manipular ou tentar manipular indevidamente as funcionalidades do
              avatar ou da plataforma.
            </li>
          </ul>
          <p>
            3.3.1. O descumprimento poderá resultar na suspensão ou exclusão da
            conta, sem prejuízo das medidas legais cabíveis.
          </p>
        </div>
      );
    case 4:
      return (
        <div className="termos-accordion-text">
          <p>
            4.1. A Like:Me é uma ferramenta destinada exclusivamente a fins
            informativos, não devendo ser interpretada como fornecedora de
            aconselhamento médico específico. Nenhum conteúdo disponibilizado
            nesta plataforma tem a finalidade de substituir orientação,
            diagnóstico e/ou tratamento médico adequado.
          </p>
          <p>
            4.2. A Like:Me não oferece quaisquer garantias — expressas,
            implícitas, legais ou residuais — quanto à exatidão, integridade ou
            confiabilidade das informações, opiniões, dados ou conteúdos nela
            disponibilizados, tampouco se vincula a qualquer informação aqui
            contida.
          </p>
          <p>
            4.3. O Usuário LikeMe deve consultar diretamente seu médico e/ou
            outro profissional de saúde qualificado para obter orientação acerca
            de quaisquer condições e/ou preocupações específicas. Jamais se deve
            ignorar ou postergar a busca por aconselhamento médico profissional
            em razão de informações visualizadas ou lidas nesta plataforma. A
            utilização das informações aqui disponibilizadas, ou a elas
            relacionadas, é de inteira responsabilidade do usuário.
          </p>
          <p>
            4.4. Adicionalmente, eventuais prestadores de serviços que atuem por
            meio da plataforma e que sejam profissionais licenciados exercem suas
            atividades de forma independente.
          </p>
          <p>
            4.5. A Like:Me não exerce a medicina nem qualquer outra profissão
            regulamentada, tampouco interfere na atuação profissional dos
            prestadores de serviços. Cada profissional é integralmente
            responsável pelos serviços que presta e pelo cumprimento das normas,
            exigências legais e requisitos aplicáveis à sua respectiva profissão
            e licença.
          </p>
        </div>
      );
    case 5:
      return <TermosPlansBlock />;
    case 6:
      return (
        <div className="termos-accordion-text">
          <p>
            6.1. O LikeMe Wellness Avatar é um recurso digital de apoio ao
            autocuidado que utiliza dados fornecidos pelo Usuário LikeMe para
            sugerir rotinas, enviar lembretes, acompanhar progresso e
            personalizar a experiência na plataforma.
          </p>
          <p>
            6.2. O Usuário LikeMe declara ciência e concordância de que o
            LikeMe Wellness Avatar:
          </p>
          <p>a) não realiza diagnóstico médico;</p>
          <p>b) não prescreve tratamentos;</p>
          <p>c) não substitui profissionais de saúde; e</p>
          <p>
            d) baseia-se exclusivamente nas informações fornecidas pelo próprio
            Usuário LikeMe.
          </p>
        </div>
      );
    case 7:
      return (
        <div className="termos-accordion-text">
          <p>
            7.1. A plataforma Like:Me poderá conectar o Usuário LikeMe a
            profissionais, fornecedores de produtos, criadores de protocolos e
            comunidades independentes, os Providers. Tais terceiros atuam de
            forma autônoma e independente, inexistindo qualquer vínculo
            societário, empregatício, associativo ou de representação com a
            Like:Me.
          </p>
          <p>
            7.2. Os Providers usam a plataforma Like:Me para publicar e definir
            as condições de sua oferta de produtos, serviços e/ou protocolos.
            Eles são os únicos responsáveis pela existência, qualidade,
            quantidade, regularidade, garantia, integridade e/ou legitimidade
            dos produtos, serviços e/ou protocolos que oferecem, e manterão
            indene a Like:Me por qualquer ação administrativa ou judicial que
            possa ser gerada por uma oferta e/ou venda.
          </p>
          <p>
            7.3. A Like:Me não se responsabiliza pelos serviços, conteúdos,
            produtos, atendimentos e/ou resultados fornecidos por
            terceiros/Providers. Da mesma forma, a Like:Me não se responsabiliza
            por qualquer dado pessoal que eventualmente possa ter sido inserido
            nos produtos eletrônicos comprados e devolvidos por qualquer razão,
            isentando-se de qualquer responsabilidade pela gestão destes dados.
          </p>
        </div>
      );
    case 8:
      return (
        <div className="termos-accordion-text">
          <p>
            8.1. Ao ingressar em qualquer uma das comunidades disponibilizadas
            na plataforma Like:Me, o Usuário declara que leu, compreendeu e
            concorda com os presentes Termos, bem como com a{" "}
            <Link to={ROUTES.PRIVACY}>Política de Privacidade</Link>,
            comprometendo-se a respeitar as regras de convivência e uso da
            plataforma Like:Me, bem como as regras específicas eventualmente
            estabelecidas para cada comunidade, as quais poderão complementar
            e/ou detalhar as diretrizes gerais aqui previstas.
          </p>
          <p>
            8.2. Ao participar de comunidades, o Usuário LikeMe se obriga a:
          </p>
          <p>(i) manter comportamento respeitoso e ético;</p>
          <p>
            (ii) não publicar conteúdos ofensivos, discriminatórios, ilegais ou
            que violem direitos de terceiros;
          </p>
          <p>
            (iii) não praticar assédio, spam, autopromoção indevida ou
            divulgação de serviços/produtos sem autorização; e
          </p>
          <p>(iv) não compartilhar informações falsas ou enganosas.</p>
          <p>
            8.3. Discussões envolvendo temas sensíveis (como saúde, política,
            religião, entre outros) devem:
          </p>
          <ul>
            <li>ser conduzidas com respeito;</li>
            <li>não conter ataques pessoais ou desinformação;</li>
            <li>respeitar as diretrizes da plataforma.</li>
          </ul>
          <p>
            8.3.1. A Like:Me poderá, a seu exclusivo critério, limitar ou
            encerrar discussões que violem essas diretrizes, bem como suspender
            ou encerrar o acesso do usuário.
          </p>
          <p>
            8.4. Em caso de violação deste Termo, a Like:Me se reserva o
            direito de, sem aviso prévio:
          </p>
          <ul>
            <li>moderar, editar ou remover conteúdos;</li>
            <li>advertir, suspender ou excluir usuários;</li>
            <li>encerrar discussões ou restringir funcionalidades.</li>
          </ul>
          <p>
            8.5. A participação a qualquer uma das comunidades não concede
            acesso automático a produtos, serviços, conteúdos exclusivos ou
            protocolos pagos. O acesso a tal conteúdo será liberado apenas após
            a confirmação do pagamento correspondente.
          </p>
          <p>
            8.6. Todo conteúdo disponibilizado nas comunidades, tais como, mas
            não se limitando, a textos, vídeos, fotos e materiais, é protegido
            por direitos autorais, sendo vedada a reprodução, distribuição e
            compartilhamento externo, sem a expressa autorização da Like:Me.
          </p>
          <p>
            8.7. Para as comunidades que disponibilizam encontros online por
            meio da plataforma Like:Me, o Usuário declara estar ciente de que
            tais sessões poderão ser gravadas, podendo envolver a captação de
            sua imagem, voz e interações.
          </p>
          <p>
            8.7.1. Ao participar desses encontros, o Usuário concorda
            expressamente com a referida captação, autorizando seu uso para fins
            de registro, segurança, uso dentro da ferramenta ou nas plataformas
            do Like:Me e também por parte do provider responsável pelo canal
            onde o conteúdo foi produzido.
          </p>
          <p>
            8.7.2. É autorizado à Like:Me divulgar publicamente tais gravações
            para fins comerciais e/ou promocionais, sem autorização prévia e
            específica do Usuário, respeitando a legislação aplicável.
          </p>
        </div>
      );
    case 9:
      return (
        <div className="termos-accordion-text">
          <p>
            9.1. A Like:Me realizará o tratamento dos dados pessoais do Usuário
            LikeMe para fins de personalização da experiência, criação do
            avatar, recomendações e integrações, nos termos da legislação
            aplicável e da sua Política de Privacidade.
          </p>
          <p>
            9.2. A{" "}
            <Link to={ROUTES.PRIVACY}>Política de Privacidade</Link> poderá ser
            acessada pelo Usuário LikeMe por meio do endereço eletrônico
            disponível na plataforma.
          </p>
        </div>
      );
    case 10:
      return (
        <div className="termos-accordion-text">
          <p>
            10.1. Todos os conteúdos da plataforma, incluindo textos, imagens,
            vídeos, marcas, layout, códigos e funcionalidades, são de
            titularidade da Like:Me ou licenciados a ela, sendo protegidos pela
            legislação vigente.
          </p>
          <p>
            10.2. O Usuário recebe uma licença limitada, não exclusiva,
            intransferível e revogável para uso da plataforma, exclusivamente
            para fins pessoais e não comerciais, observados os Termos e
            Condições ora expostos.
          </p>
          <p>
            10.3. É proibida a reprodução, modificação, distribuição e/ou
            exploração dos conteúdos sem autorização prévia e expressa da
            Like:Me.
          </p>
        </div>
      );
    case 11:
      return (
        <div className="termos-accordion-text">
          <p>
            11.1. A Like:Me não garante que a plataforma estará livre de falhas
            técnicas ou interrupções.
          </p>
          <p>11.2. A Like:Me não se responsabiliza por:</p>
          <p>b) diagnósticos ou resultados clínicos;</p>
          <p>c) expectativas específicas de melhora;</p>
          <p>d) atos ou omissões de terceiros;</p>
          <p>
            e) decisões tomadas pelo Usuário LikeMe com base nas informações
            fornecidas pela plataforma;
          </p>
          <p>
            f) serviços, conteúdos, produtos, atendimentos e/ou resultados
            fornecidos por terceiros/Providers.
          </p>
          <p>
            11.3. A Like:Me poderá, a seu exclusivo critério, disponibilizar
            links, redirecionamentos e/ou integrações que direcionem o Usuário
            LikeMe a sites, aplicações, marketplaces ou quaisquer outros
            ambientes digitais de terceiros, inclusive para fins de aquisição de
            produtos ou serviços.
          </p>
          <p>
            11.3.1. O Usuário LikeMe declara estar ciente de que, ao ser
            redirecionado para ambiente externo, passará a se submeter
            exclusivamente aos termos de uso, políticas de privacidade e demais
            condições estabelecidas pelo respectivo terceiro, não possuindo a
            Like:Me qualquer ingerência sobre tais ambientes.
          </p>
          <p>
            11.3.2. A Like:Me não se responsabiliza pelas informações, produtos,
            serviços, ofertas, práticas comerciais, políticas de tratamento de
            dados, nem por quaisquer danos, prejuízos ou ocorrências verificadas
            fora de seu ambiente digital.
          </p>
          <p>
            11.3.3. Compete exclusivamente ao Usuário LikeMe a responsabilidade
            pelas informações, dados pessoais, financeiros ou de qualquer outra
            natureza fornecidos em ambientes externos, bem como pela verificação
            da segurança, confiabilidade e adequação desses terceiros antes da
            realização de qualquer transação.
          </p>
        </div>
      );
    case 12:
      return (
        <div className="termos-accordion-text">
          <p>
            12.1. Este Termo poderá ser alterado a qualquer tempo. As
            alterações serão comunicadas por meio da plataforma ou por outros
            canais adequados.
          </p>
          <p>
            12.2. O uso contínuo da plataforma após a publicação das alterações
            implica aceitação tácita da nova versão.
          </p>
        </div>
      );
    case 13:
      return (
        <div className="termos-accordion-text">
          <p>
            13.1. A Like:Me poderá, a seu exclusivo critério, suspender ou
            encerrar o acesso do usuário ao aplicativo nos casos abaixo, sem
            prejuízo de outros indicados no presente Termo:
          </p>
          <ul>
            <li>violação deste Termo;</li>
            <li>uso indevido da plataforma;</li>
            <li>determinação legal ou regulatória.</li>
          </ul>
          <p>
            13.2. O Usuário LikeMe poderá exercer o direito de arrependimento
            no prazo de 7 (sete) dias contados da contratação da plataforma,
            hipótese em que poderá solicitar o cancelamento com restituição
            integral dos valores pagos, observadas as disposições legais
            aplicáveis.
          </p>
          <p>
            13.3. O Usuário LikeMe pode solicitar o encerramento de sua conta a
            qualquer momento, mediante solicitação realizada pelos meios
            indicados na plataforma.
          </p>
          <p>
            13.3.1. O cancelamento deverá ser efetuado com antecedência mínima
            de 3 (três) dias úteis da próxima data de cobrança, a fim de evitar
            a renovação automática e a cobrança do período subsequente. Após a
            solicitação de cancelamento, a renovação automática será
            interrompida.
          </p>
          <p>
            13.3.2. O plano permanecerá ativo até o término do período já pago,
            ou seja, até a próxima data de cobrança. Não haverá reembolso total
            ou proporcional da taxa de assinatura já paga, salvo se de outra
            forma exigido pela legislação aplicável.
          </p>
          <p>
            13.3.3. Não serão concedidos reembolsos ou créditos em razão do
            cancelamento da assinatura, exceto nas hipóteses previstas em lei.
          </p>
          <p>
            13.4. Poderão ainda ser aplicáveis condições adicionais relacionadas
            ao cancelamento, caso exigidas pela administradora do cartão de
            crédito ou pelo meio de pagamento utilizado.
          </p>
          <p>
            13.5. Caso o Usuário LikeMe cancele sua conta ou altere informações
            por engano, deverá entrar em contato imediatamente com o suporte da
            plataforma. Embora envidemos esforços para auxiliar, não garantimos
            a recuperação ou restauração da conta ou dos dados, não nos
            responsabilizando por cancelamentos ou alterações realizadas de
            forma acidental.
          </p>
        </div>
      );
    case 14:
      return (
        <div className="termos-accordion-text">
          <p>
            14.1. A plataforma é disponibilizada &quot;no estado em que se
            encontra&quot;, podendo sofrer interrupções, atualizações ou
            indisponibilidades temporárias, sem que isso gere direito a
            indenização.
          </p>
          <p>
            14.2. O Usuário LikeMe poderá entrar em contato com a Like:Me por
            meio do e-mail suporte@likeme.global ou outros canais informados na
            plataforma.
          </p>
        </div>
      );
    case 15:
      return (
        <div className="termos-accordion-text">
          <p>
            15.1. Ao utilizar a Like:Me, o usuário concorda em receber e-mails,
            mensagens de texto ou outras comunicações enviadas por nós
            relacionadas às suas atividades na plataforma e/ou aquisições.
          </p>
          <p>
            15.2. Ao utilizar a Like:Me ou responder aos nossos e-mails ou
            mensagens de texto durante a utilização da plataforma, o usuário
            declara estar ciente de que o e-mail e as mensagens de texto não
            constituem meios de comunicação totalmente seguros, assumindo os
            riscos inerentes a esse tipo de comunicação.
          </p>
        </div>
      );
    case 16:
      return (
        <div className="termos-accordion-text">
          <p>
            16.1. Estes Termos são regidos pelas leis da República Federativa do
            Brasil.
          </p>
          <p>
            16.2. Fica eleito o foro da Comarca da Cidade de São Paulo, Estado
            de São Paulo, com renúncia a qualquer outro, por mais privilegiado
            que seja.
          </p>
        </div>
      );
  }
}
