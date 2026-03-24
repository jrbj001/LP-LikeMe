export const TERMS_HERO = {
  titleLine1: "TERMOS E CONDIÇÕES",
  titleLine2: "DE USO DA PLATAFORMA LIKE:ME",
  dateLabel: "Última atualização: 26/02/2026",
  intro:
    "Pelo presente instrumento particular de Termos e Condições de Uso (\"Termo\"), de um lado LIKEME GLOBAL BRASIL LTDA, sociedade empresária limitada, com sede na Alameda Santos, nº 122, conjunto 603, São Paulo/SP, CEP 01418-000, inscrita no CNPJ/MF sob o nº 61.840.894/0001-12, doravante denominada simplesmente \"Like:Me\", e, de outro lado, o USUÁRIO ou Usuário LikeMe, pessoa física maior de 18 (dezoito) anos, doravante denominado simplesmente \"USUÁRIO\" ou \"Usuário LikeMe\", têm entre si justo e acordado o quanto segue:",
} as const;

export const TERMS_SECTIONS = [
  { id: 1, title: "Aceitação do Termo", defaultOpen: true },
  { id: 2, title: "Do Objeto", defaultOpen: true },
  { id: 3, title: "Dos Requisitos para Utilização", defaultOpen: false },
  {
    id: 4,
    title: "Limitações de Responsabilidade Médica e de Saúde",
    defaultOpen: false,
  },
  { id: 5, title: "Dos Planos Disponíveis", defaultOpen: true },
  { id: 6, title: "Do LikeMe Wellness Avatar", defaultOpen: false },
  { id: 7, title: "Da Relação com Terceiros (Providers)", defaultOpen: false },
  { id: 8, title: "Do Tratamento de Dados Pessoais", defaultOpen: false },
  {
    id: 9,
    title: "Conteúdos, Propriedade Intelectual e Licença de Uso",
    defaultOpen: false,
  },
  { id: 10, title: "Das Limitações de Responsabilidade", defaultOpen: false },
  { id: 11, title: "Das Alterações dos Termos", defaultOpen: false },
  { id: 12, title: "Da Suspensão e Encerramento", defaultOpen: false },
  { id: 13, title: "Da Isenção de Garantias", defaultOpen: false },
  { id: 14, title: "Das Comunicações", defaultOpen: false },
  { id: 15, title: "Da Legislação Aplicável e do Foro", defaultOpen: false },
] as const;

export type TermsSectionId = (typeof TERMS_SECTIONS)[number]["id"];
