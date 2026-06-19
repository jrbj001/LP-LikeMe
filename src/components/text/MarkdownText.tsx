import { Fragment, useMemo } from "react";
import { parseMarkdownSegments } from "../../utils/parseMarkdown";
import { parseMarkdownBlocks } from "../../utils/parseMarkdownBlocks";
import { parseLinkifiedSegments, type LinkifiedSegment } from "../../utils/text/parseLinkifiedSegments";

type MarkdownTextProps = {
  text: string;
  className?: string;
};

function markdownSegmentStyle(segment: {
  bold: boolean;
  italic: boolean;
  underline: boolean;
}): React.CSSProperties | undefined {
  if (!segment.bold && !segment.italic && !segment.underline) {
    return undefined;
  }

  return {
    ...(segment.bold ? { fontWeight: 700 } : null),
    ...(segment.italic ? { fontStyle: "italic" } : null),
    ...(segment.underline ? { textDecorationLine: "underline" } : null),
  };
}

function renderLinkifiedSegment(segment: LinkifiedSegment, key: string): JSX.Element {
  if (segment.kind === "text") {
    return <Fragment key={key}>{segment.text}</Fragment>;
  }
  if (segment.kind === "url") {
    const external = /^https?:\/\//i.test(segment.href);
    return (
      <a key={key} href={segment.href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {segment.text}
      </a>
    );
  }
  if (segment.kind === "email") {
    return (
      <a key={key} href={segment.mailtoHref}>
        {segment.text}
      </a>
    );
  }
  return (
    <a key={key} href={segment.telHref}>
      {segment.text}
    </a>
  );
}

function InlineMarkdown({ text }: { text: string }): JSX.Element {
  const markdownSegments = useMemo(() => parseMarkdownSegments(text), [text]);

  return (
    <>
      {markdownSegments.map((segment, index) => {
        const linkSegments = parseLinkifiedSegments(segment.text);
        const style = markdownSegmentStyle(segment);
        const keyPrefix = `md-${index}`;

        if (!style) {
          return (
            <Fragment key={keyPrefix}>
              {linkSegments.map((linkSegment, linkIndex) =>
                renderLinkifiedSegment(linkSegment, `${keyPrefix}-${linkIndex}`),
              )}
            </Fragment>
          );
        }

        return (
          <span key={keyPrefix} style={style}>
            {linkSegments.map((linkSegment, linkIndex) =>
              renderLinkifiedSegment(linkSegment, `${keyPrefix}-${linkIndex}`),
            )}
          </span>
        );
      })}
    </>
  );
}

export function MarkdownText({ text, className }: MarkdownTextProps): JSX.Element | null {
  const blocks = useMemo(() => parseMarkdownBlocks(text), [text]);

  if (blocks.length === 0) {
    return null;
  }

  return (
    <div className={className}>
      {blocks.map((block, blockIndex) => {
        if (block.type === "spacer") {
          return <div key={`spacer-${blockIndex}`} aria-hidden className="markdown-spacer" />;
        }

        if (block.type === "paragraph") {
          return (
            <p key={`p-${blockIndex}`}>
              <InlineMarkdown text={block.text} />
            </p>
          );
        }

        const ordered = block.type === "ordered-list";
        const ListTag = ordered ? "ol" : "ul";

        return (
          <ListTag key={`list-${blockIndex}`}>
            {block.items.map((item, itemIndex) => (
              <li key={`${blockIndex}-${itemIndex}`}>
                <InlineMarkdown text={item} />
              </li>
            ))}
          </ListTag>
        );
      })}
    </div>
  );
}
