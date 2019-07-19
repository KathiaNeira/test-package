"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_1 = require("./styled");
var iconCalendar = require('../../../images/icon-calendar.svg');
exports.DateSearch = function (_a) {
    var handleClick = _a.handleClick, value = _a.value, error = _a.error;
    return (React.createElement(styled_1.Wrapper, { onClick: function () { return handleClick(); }, error: error },
        React.createElement(styled_1.Input, { type: "text", value: value, readOnly: true }),
        React.createElement("img", { src: iconCalendar, width: "25", height: "25" })));
};
