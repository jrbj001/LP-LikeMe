export const SECTION_ANCHORS = {
  HERO: "hero",
  SOBRE: "sobre",
  VERSAO_BETA: "versao-beta",
  JUNTE_SE: "junte-se",
} as const;

export type SectionAnchorId =
  (typeof SECTION_ANCHORS)[keyof typeof SECTION_ANCHORS];

export function isSectionAnchorId(value: string): value is SectionAnchorId {
  return (Object.values(SECTION_ANCHORS) as string[]).includes(value);
}
