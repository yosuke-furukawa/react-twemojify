"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var twemoji_parser_1 = require("twemoji-parser");
function twemojify(text, createImgElement, opts) {
    var size = (opts && opts.size) || 32;
    var style = opts && opts.style;
    var assetType = (opts && opts.assetType) || "svg";
    var emojis = twemoji_parser_1.parse(text, { assetType: assetType });
    var className = (opts && opts.class) || "emoji";
    var result = [];
    var position = 0;
    if (emojis.length === 0)
        return text;
    emojis.forEach(function (emoji, idx) {
        // https://github.com/twitter/twemoji-parser/issues/8
        if (emoji.type !== "emoji" || !emoji.url) {
            return emoji;
        }
        var _a = emoji.indices, start = _a[0], end = _a[1];
        var str = text.slice(position, start);
        var alt = text.slice(start, end);
        position = end;
        var ampImgTag = createImgElement(__assign({ url: emoji.url, size: size,
            className: className,
            alt: alt, key: idx, style: style }, opts));
        if (str) {
            result.push(str);
        }
        result.push(ampImgTag);
    });
    if (position < text.length) {
        var restStr = text.slice(position);
        result.push(restStr);
    }
    return result;
}
exports.twemojify = twemojify;
