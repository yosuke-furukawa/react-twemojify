import React, { ReactElement } from "react";
import { Options } from "twemoji-parser";
export declare type options = {
    size?: number;
    class?: string;
    style?: React.CSSProperties;
    layout?: string;
} & Options;
export declare function twemojify(text: string, createImgElement: (opts: any) => ReactElement, opts?: options): string | (string | React.ReactElement<any, string | React.JSXElementConstructor<any>>)[];
