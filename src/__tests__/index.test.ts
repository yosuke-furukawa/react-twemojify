import assert from "assert";

import React from "react";

import { twemojify, options } from "../index";
import { createImgElement } from "../amp-img";

type emojifiedItems = Array<
  | string
  | {
      src: string;
      alt: string;
      width: number;
      height: number;
      class: string;
      style?: React.CSSProperties;
    }
>;

type testType = Array<[string, undefined | options, emojifiedItems]>;

describe.each([
  [
    "test👩test",
    undefined,
    [
      "test",
      {
        src: "https://twemoji.maxcdn.com/v/latest/svg/1f469.svg",
        alt: "👩",
        width: 32,
        height: 32,
        class: "emoji",
      },
      "test",
    ],
  ],
  [
    "👩test",
    undefined,
    [
      {
        src: "https://twemoji.maxcdn.com/v/latest/svg/1f469.svg",
        alt: "👩",
        width: 32,
        height: 32,
        class: "emoji",
      },
      "test",
    ],
  ],

  [
    "test👩",
    undefined,
    [
      "test",
      {
        src: "https://twemoji.maxcdn.com/v/latest/svg/1f469.svg",
        alt: "👩",
        width: 32,
        height: 32,
        class: "emoji",
      },
    ],
  ],

  [
    "👩",
    undefined,
    [
      {
        src: "https://twemoji.maxcdn.com/v/latest/svg/1f469.svg",
        alt: "👩",
        width: 32,
        height: 32,
        class: "emoji",
      },
    ],
  ],

  ["t", undefined, "t"],

  ["test", undefined, "test"],

  [
    "📛💕👼",
    undefined,
    [
      {
        width: 32,
        height: 32,
        src: "https://twemoji.maxcdn.com/v/latest/svg/1f4db.svg",
        class: "emoji",
        alt: "📛",
      },
      {
        width: 32,
        height: 32,
        src: "https://twemoji.maxcdn.com/v/latest/svg/1f495.svg",
        class: "emoji",
        alt: "💕",
      },
      {
        width: 32,
        height: 32,
        src: "https://twemoji.maxcdn.com/v/latest/svg/1f47c.svg",
        class: "emoji",
        alt: "👼",
      },
    ],
  ],
  [
    "📛これは英語では tofu on fire と呼ばれてる💕かわいいよね👼",
    undefined,
    [
      {
        width: 32,
        height: 32,
        src: "https://twemoji.maxcdn.com/v/latest/svg/1f4db.svg",
        class: "emoji",
        alt: "📛",
      },
      "これは英語では tofu on fire と呼ばれてる",
      {
        width: 32,
        height: 32,
        src: "https://twemoji.maxcdn.com/v/latest/svg/1f495.svg",
        class: "emoji",
        alt: "💕",
      },
      "かわいいよね",
      {
        width: 32,
        height: 32,
        src: "https://twemoji.maxcdn.com/v/latest/svg/1f47c.svg",
        class: "emoji",
        alt: "👼",
      },
    ],
  ],
  [
    "test👩test",
    { size: 72 },
    [
      "test",
      {
        src: "https://twemoji.maxcdn.com/v/latest/svg/1f469.svg",
        alt: "👩",
        width: 72,
        height: 72,
        class: "emoji",
      },
      "test",
    ],
  ],
  [
    "test👩test",
    { size: 72, class: "myemoji" },
    [
      "test",
      {
        src: "https://twemoji.maxcdn.com/v/latest/svg/1f469.svg",
        alt: "👩",
        width: 72,
        height: 72,
        class: "myemoji",
      },
      "test",
    ],
  ],
  [
    "test👩test",
    { size: 72, class: "myemoji", style: { verticalAlign: "middle" } },
    [
      "test",
      {
        src: "https://twemoji.maxcdn.com/v/latest/svg/1f469.svg",
        alt: "👩",
        width: 72,
        height: 72,
        class: "myemoji",
        style: { verticalAlign: "middle" },
      },
      "test",
    ],
  ],
  [
    "不可視文字が入った時は✨️(←ここにいる)amp-imgにせず無視するよ",
    undefined,
    [
      "不可視文字が入った時は",
      {
        src: "https://twemoji.maxcdn.com/v/latest/svg/2728.svg",
        width: 32,
        height: 32,
        alt: "✨",
        class: "emoji",
      },
      `${String.fromCodePoint(65039)}(←ここにいる)amp-imgにせず無視するよ`,
    ],
  ],
] as testType)("emojify(%s) params %o", (input, options, expected) => {
  test(`should have img.emoji ${input} ${options}`, () => {
    const s = twemojify(input, createImgElement, options);
    if (typeof expected === "string") {
      assert.strictEqual(s, expected);
      return;
    }
    expected.forEach((e, index) => {
      if (typeof e === "string") {
        assert.strictEqual(e, s[index]);
        return;
      }
      const elem = s[index] as React.ReactElement<{
        src: string;
        alt: string;
        width: number;
        height: number;
        class: string;
        style?: React.CSSProperties;
      }>;
      assert.strictEqual(e.src, elem.props.src);
      assert.strictEqual(e.alt, elem.props.alt);
      assert.strictEqual(e.width, elem.props.width);
      assert.strictEqual(e.height, elem.props.height);
      assert.strictEqual(e.class, elem.props.class);
      assert.deepStrictEqual(e.style, elem.props.style);
    });
  });
});
