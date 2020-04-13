import React from "react";

export function createImgElement({
  url,
  size,
  className,
  alt,
  key,
  style,
}: {
  url: string;
  size: number;
  className: string;
  alt: string;
  key: number;
  style?: React.CSSProperties;
}) {
  return React.createElement("img", {
    key,
    width: size,
    height: size,
    class: className,
    src: url,
    style,
    alt,
  });
}
