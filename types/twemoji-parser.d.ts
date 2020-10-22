declare module "twemoji-parser" {
  type Options = {
    assetType?: "png" | "svg";
    buildUrl?: (codepoints: string, assetType: string) => string,
  };
  type EmojiEntity = {
    type: "emoji";
    text: string;
    url: string;
    indices: Array<number>;
  };
  export function parse(text: string, opts?: Options): Array<EmojiEntity>;
}
