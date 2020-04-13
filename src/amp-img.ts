import React from "react";

export function createImgElement({
  url,
  size,
  className,
  alt,
  key,
  layout,
  style,
}: {
  url: string;
  size: number;
  className: string;
  alt: string;
  key: number;
  layout?: string;
  style?: React.CSSProperties;
}) {
  const _layout = layout || "responsive";
  return React.createElement("amp-img", {
    key,
    width: size,
    height: size,
    class: className,
    src: url,
    style,
    alt,
    layout: _layout,
    // auto lightbox is always disabled.
    "data-amp-auto-lightbox-disable": "",
  });
}