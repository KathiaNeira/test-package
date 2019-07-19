"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
exports.Wrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    height: 51px;\n    padding: 8px;\n    box-sizing: border-box;\n    border: 1px solid #D3D3D3;\n    border-radius: 2px;\n    ", ";\n"], ["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    width: 100%;\n    height: 51px;\n    padding: 8px;\n    box-sizing: border-box;\n    border: 1px solid #D3D3D3;\n    border-radius: 2px;\n    ",
    ";\n"])), function (props) { return props.error && styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        border: 1px solid #ff0000;\n    "], ["\n        border: 1px solid #ff0000;\n    "]))); });
exports.Input = styled_components_1.default.input(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    font-family: arial,sans-serif;\n    color: #3D3D3D;\n    border: none;\n    font-size: 13px;\n    outline: none;\n    pointer-events: none;\n"], ["\n    font-family: arial,sans-serif;\n    color: #3D3D3D;\n    border: none;\n    font-size: 13px;\n    outline: none;\n    pointer-events: none;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
