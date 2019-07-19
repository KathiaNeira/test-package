"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_1 = require("./styled");
var weekNames = ['D', 'L', 'M', 'X', 'J', 'V', 'S'];
exports.WeekDays = function () { return (React.createElement(styled_1.Wrapper, null, weekNames.map(function (name, index) { return (React.createElement(styled_1.Day, { key: index }, name)); }))); };
