import React from "react";
export declare function createImgElement({ url, size, className, alt, key, style, }: {
    url: string;
    size: number;
    className: string;
    alt: string;
    key: number;
    style?: React.CSSProperties;
}): React.DetailedReactHTMLElement<{
    key: number;
    width: number;
    height: number;
    class: string;
    src: string;
    style: React.CSSProperties | undefined;
    alt: string;
}, HTMLElement>;
