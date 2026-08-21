"use client";

import { Paragraph } from "@/components/typography/paragraph";
import { ReactNode } from "react";

interface FormattedTextProps {
  text: string;
  containerClassName?: string;
}

/**
 * FormattedText
 *
 * A simple component for rendering paragraphs and bullet lists with
 * per-word reveal effects and Markdown-style bold formatting.
 *
 * Usage:
 * <FormattedText
 *   text="This is a paragraph with **bold** text.\n\n&bull; First item\n&bull; Second item"
 *   containerClassName="custom-wrapper"
 * />
 *
 * Notes:
 * - Pass plain text in the `text` prop.
 * - Use `**bold**` to wrap text that should render in a `<strong>` tag.
 * - Use `&bull;` at the start of each line to render a bullet list.
 * - Separate paragraphs with a blank line (`\n\n`).
 */

export function FormattedText({
  text,
  containerClassName = "add-24-margin-not-last fast-stagger-reveal-container",
}: FormattedTextProps) {
  // Function to split to per-word fast-stagger reveal with bold support
  const formatToFastWords = (textContent: string): ReactNode[] => {
    const tokens = textContent.match(/(\*\*.*?\*\*|[^\s]+)/g) || [];

    // return <p>textContent</p>;

    return tokens.map((token, tokenIndex) => {
      const isBold = token.startsWith("**") && token.endsWith("**");
      const textValue = isBold ? token.slice(2, -2) : token;

      return (
        <Paragraph key={tokenIndex}>
          {isBold ? (
            <strong className="text-white">{textValue}</strong>
          ) : (
            textValue
          )}
          &nbsp;
        </Paragraph>
      );
    });
  };

  return (
    <div className={containerClassName}>
      {text.split("\n\n").map((para, index) => {
        if (para.includes("&bull;")) {
          // It's a bullet list
          const items = para.split("\n").filter((item) => item.trim());
          return (
            <ul key={index} className="space-y-2 pl-2">
              {items.map((item, itemIndex) => {
                const cleanItem = item.replace(/^&bull;\s*/, "");
                return (
                  <li key={itemIndex} className="flex gap-1 items-start">
                    <span className="w-2">&bull;</span>
                    <Paragraph>{cleanItem}</Paragraph>

                    {/* &nbsp;&nbsp;{formatToFastWords(cleanItem)} */}
                  </li>
                );
              })}
            </ul>
          );
        } else {
          //   return <div key={index}>{formatToFastWords(para)}</div>;
          return (
            <div key={index}>
              <Paragraph>{para}</Paragraph>
            </div>
          );
        }
      })}
    </div>
  );
}
