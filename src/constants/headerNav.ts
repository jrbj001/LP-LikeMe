import {
  SECTION_ANCHORS,
  type SectionAnchorId,
} from "./sectionAnchors";

export const LANDING_HEADER_NAV_ITEMS: readonly {
  anchorId: SectionAnchorId;
  label: string;
}[] = [
  { anchorId: SECTION_ANCHORS.HERO, label: "Home" },
  { anchorId: SECTION_ANCHORS.SOBRE, label: "Sobre" },
  { anchorId: SECTION_ANCHORS.VERSAO_BETA, label: "Versão Beta" },
  { anchorId: SECTION_ANCHORS.JUNTE_SE, label: "Junte-se a nós" },
];
