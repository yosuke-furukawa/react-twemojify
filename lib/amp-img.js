"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createImgElement = void 0;
var react_1 = __importDefault(require("react"));
function createImgElement(_a) {
    var url = _a.url, size = _a.size, className = _a.className, alt = _a.alt, key = _a.key, layout = _a.layout, style = _a.style;
    var _layout = layout || "responsive";
    return react_1.default.createElement("amp-img", {
        key: key,
        width: size,
        height: size,
        class: className,
        src: url,
        style: style,
        alt: alt,
        layout: _layout,
        // auto lightbox is always disabled.
        "data-amp-auto-lightbox-disable": "",
    });
}
exports.createImgElement = createImgElement;
