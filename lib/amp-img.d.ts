import React from "react";
export declare function createImgElement({ url, size, className, alt, key, layout, style, }: {
    url: string;
    size: number;
    className: string;
    alt: string;
    key: number;
    layout?: string;
    style?: React.CSSProperties;
}): React.ReactElement<{
    key: number;
    width: number;
    height: number;
    class: string;
    src: string;
    style: React.CSSProperties | undefined;
    alt: string;
    layout: string;
    "data-amp-auto-lightbox-disable": string;
}, string | React.JSXElementConstructor<any>>;
