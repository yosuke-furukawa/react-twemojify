import React, { ReactElement } from "react";
import { Options, parse } from "twemoji-parser";

export type options = {
  size?: number;
  class?: string;
  style?: React.CSSProperties;
  layout?: string;
} & Options;

export function twemojify(text: string, createImgElement: (opts: any) => ReactElement, opts?: options) {
  const size = (opts && opts.size) || 32;
  const style = opts && opts.style;
  const assetType = (opts && opts.assetType) || "svg";
  const emojis = parse(text, { assetType });
  const className = (opts && opts.class) || "emoji";
  const result: Array<string | React.ReactElement> = [];
  let position = 0;
  if (emojis.length === 0) return text;
  emojis.forEach((emoji, idx) => {
    // https://github.com/twitter/twemoji-parser/issues/8
    if (emoji.type !== "emoji" || !emoji.url) {
      return emoji;
    }
    const [start, end] = emoji.indices;
    const str = text.slice(position, start);
    const alt = text.slice(start, end);
    position = end;
    const ampImgTag = createImgElement({
      url: emoji.url,
      size,
      className,
      alt,
      key: idx,
      style,
      ...opts
    });
    if (str) {
      result.push(str);
    }
    result.push(ampImgTag);
  });
  if (position < text.length) {
    const restStr = text.slice(position);
    result.push(restStr);
  }
  return result;
}
