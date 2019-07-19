"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_1 = require("./styled");
exports.Controls = function (_a) {
    var handleClickPrevMonth = _a.handleClickPrevMonth, handleClickNextMonth = _a.handleClickNextMonth;
    return (React.createElement(styled_1.Wrapper, null,
        React.createElement(styled_1.Button, { onClick: function () { return handleClickPrevMonth(); } },
            React.createElement("img", { src: "../../../images/icon-up.svg", width: "15", height: "15" })),
        React.createElement(styled_1.Button, { onClick: function () { return handleClickNextMonth(); } },
            React.createElement("img", { src: "../../../images/icon-down-arrow.svg", width: "15", height: "15" }))));
};
