# react-twemojify

![CI](https://github.com/yosuke-furukawa/react-twemojify/workflows/CI/badge.svg)

A React Component converts emoji (like 🙆) to img tag <img src="https://twemoji.maxcdn.com/v/latest/svg/1f646.svg" />.

- Support web component img tag, like `amp-img`.

# install

```
$ npm i react-twemojify
```

# usage

## using basic img tag

```js
const { twemojify } = require('react-twemojify');
const { createImgElement }  = require('react-twemojify/lib/img');
const result = twemojify('Hello World 🙆', createImgElement);

// Hello World <img src="https://twemoji.maxcdn.com/v/latest/svg/1f646.svg" alt="🙆" width=32 height=32 class="emoji">
console.log(result);
```

## using amp-img tag

```js
const { twemojify } = require('react-twemojify');
const { createImgElement }  = require('react-twemojify/lib/amp-img');
const result = twemojify('Hello World 🙆', createImgElement);

// Hello World <amp-img src="https://twemoji.maxcdn.com/v/latest/svg/1f646.svg" alt="🙆" width=32 height=32 class="emoji">
console.log(result);
```

## custom webcomponent tag

```js
const { twemojify } = require('react-twemojify');
const createImgElement = ({
  url,
  size,
  className,
  alt,
  key,
}) => {
  return React.createElement("x-some-special-webcomponent-img", {
    key,
    width: size,
    height: size,
    class: className,
    src: url,
    alt,
  });
};
const result = twemojify('Hello World 🙆', createImgElement);

// Hello World <x-some-special-webcomponent-img src="https://twemoji.maxcdn.com/v/latest/svg/1f646.svg" alt="🙆" width=32 height=32 class="emoji">
console.log(result);
```

# options

- size: number, default 32, width and height are changed if `size` is specified.
- class: classname, default emoji, class name is changed if `class` is specified.
- style: react style properties, default is null.
