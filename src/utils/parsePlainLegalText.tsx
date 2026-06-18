import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type BoldSegment = {
  text: string;
  bold: boolean;
};

const EMAIL_SPLIT_PATTERN = /([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g;
const EMAIL_VALUE_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const MARKDOWN_LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g;

function parseBoldSegments(text: string): BoldSegment[] {
  const segments: BoldSegment[] = [];
  let remaining = text;
  let bold = false;

  while (remaining.length > 0) {
    const marker = "**";
    const markerIndex = remaining.indexOf(marker);

    if (markerIndex === -1) {
      segments.push({ text: remaining, bold });
      break;
    }

    if (markerIndex > 0) {
      segments.push({ text: remaining.slice(0, markerIndex), bold });
    }

    bold = !bold;
    remaining = remaining.slice(markerIndex + marker.length);
  }

  return segments;
}

function renderTextToken(part: string, key: string, bold: boolean): ReactNode {
  if (EMAIL_VALUE_PATTERN.test(part)) {
    const emailNode = <a href={`mailto:${part}`}>{part}</a>;
    return bold ? <strong key={key}>{emailNode}</strong> : emailNode;
  }

  return bold ? <strong key={key}>{part}</strong> : <span key={key}>{part}</span>;
}

function renderInlineSegment(segment: BoldSegment, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let partIndex = 0;
  let remaining = segment.text;

  while (remaining.length > 0) {
    MARKDOWN_LINK_PATTERN.lastIndex = 0;
    const linkMatch = MARKDOWN_LINK_PATTERN.exec(remaining);

    if (!linkMatch || linkMatch.index > 0) {
      const plainEnd = linkMatch?.index ?? remaining.length;
      const plainText = remaining.slice(0, plainEnd);
      const emailParts = plainText.split(EMAIL_SPLIT_PATTERN);

      for (const emailPart of emailParts) {
        if (!emailPart) {
          continue;
        }

        const key = `${keyPrefix}-${partIndex}`;
        partIndex += 1;
        nodes.push(renderTextToken(emailPart, key, segment.bold));
      }

      if (!linkMatch) {
        break;
      }
    }

    if (linkMatch) {
      const key = `${keyPrefix}-${partIndex}`;
      partIndex += 1;
      const linkNode = (
        <Link key={key} to={linkMatch[2]}>
          {linkMatch[1]}
        </Link>
      );
      nodes.push(segment.bold ? <strong key={`${key}-bold`}>{linkNode}</strong> : linkNode);
      remaining = remaining.slice(linkMatch.index + linkMatch[0].length);
    }
  }

  return nodes;
}

function renderInlineText(text: string, keyPrefix: string): ReactNode[] {
  const nodes: ReactNode[] = [];

  for (const segment of parseBoldSegments(text)) {
    nodes.push(...renderInlineSegment(segment, keyPrefix));
  }

  return nodes;
}

function renderParagraphBlock(block: string, blockIndex: number): ReactNode {
  const normalized = block.replace(/\n+/g, " ").trim();
  return <p key={`p-${blockIndex}`}>{renderInlineText(normalized, `p-${blockIndex}`)}</p>;
}

function renderBulletBlock(lines: string[], blockIndex: number): ReactNode {
  return (
    <ul key={`ul-${blockIndex}`}>
      {lines.map((line, lineIndex) => (
        <li key={`ul-${blockIndex}-${lineIndex}`}>
          {renderInlineText(line.slice(2).trim(), `ul-${blockIndex}-${lineIndex}`)}
        </li>
      ))}
    </ul>
  );
}

export function renderLegalInline(text: string, keyPrefix = "inline"): ReactNode[] {
  return renderInlineText(text, keyPrefix);
}

export function parsePlainLegalText(text: string): ReactNode[] {
  const blocks = text
    .split(/\n\n+/)
    .map((block) => block.trim())
    .filter(Boolean);

  return blocks.map((block, blockIndex) => {
    const lines = block.split("\n").map((line) => line.trim()).filter(Boolean);
    const isBulletBlock = lines.length > 0 && lines.every((line) => line.startsWith("• "));

    if (isBulletBlock) {
      return renderBulletBlock(lines, blockIndex);
    }

    return renderParagraphBlock(block, blockIndex);
  });
}
