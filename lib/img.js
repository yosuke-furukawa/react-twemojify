"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
function createImgElement(_a) {
    var url = _a.url, size = _a.size, className = _a.className, alt = _a.alt, key = _a.key, style = _a.style;
    return react_1.default.createElement("img", {
        key: key,
        width: size,
        height: size,
        class: className,
        src: url,
        style: style,
        alt: alt,
    });
}
exports.createImgElement = createImgElement;
