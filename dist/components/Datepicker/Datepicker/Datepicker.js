"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styled_1 = require("./styled");
var DateSearch_1 = require("../DateSearch");
var Weekdays_1 = require("../Weekdays");
var Controls_1 = require("../Controls");
var utils_1 = require("./utils");
var DatePicker = /** @class */ (function (_super) {
    __extends(DatePicker, _super);
    function DatePicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DatePicker.prototype.render = function () {
        var _this = this;
        var nameMonth = utils_1.MONTHS[this.props.month];
        var value = this.props.placeholder || this.props.handleDayForInput(this.props.selected);
        return (React.createElement(styled_1.Wrapper, { innerRef: function (ref) { _this.props.handleRef(ref); } },
            React.createElement(DateSearch_1.DateSearch, { handleClick: this.props.handleShowCalendar, value: value, error: this.props.error }),
            React.createElement(styled_1.CalendarWrapper, { showCalendar: this.props.showCalendar },
                React.createElement(styled_1.CalendarHead, null,
                    React.createElement(styled_1.CalendarTitle, null,
                        nameMonth,
                        " ",
                        this.props.year),
                    React.createElement(Controls_1.Controls, { handleClickPrevMonth: this.props.handleClickPrevMonth, handleClickNextMonth: this.props.handleClickNextMonth })),
                React.createElement(styled_1.CalendarBody, null,
                    React.createElement(Weekdays_1.WeekDays, null),
                    React.createElement(styled_1.MonthContainer, null, this.props.days.map(function (day, index) {
                        return (React.createElement(styled_1.MonthDayWrapper, { key: index, selected: _this.props.selected === day.dayMonth },
                            React.createElement(styled_1.Day, { selected: _this.props.selected === day.dayMonth, color: day.anotherMonthDay ? '#D3D3D3' : '#3D3D3D', onClick: function () { _this.props.handleClickDay(day); } },
                                day.dayMonth,
                                " ",
                                day.anotherMonthDay)));
                    }))))));
    };
    return DatePicker;
}(React.Component));
exports.DatePicker = DatePicker;
