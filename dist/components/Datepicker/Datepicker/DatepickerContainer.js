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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var utils_1 = require("./utils");
var Datepicker_1 = require("./Datepicker");
var PropTypes = require("prop-types");
var DatePickerContainer = /** @class */ (function (_super) {
    __extends(DatePickerContainer, _super);
    function DatePickerContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.placeholder = _this.props.placeholder;
        _this.year = new Date().getFullYear();
        _this.month = new Date().getMonth();
        _this.state = {
            showCalendar: false,
            days: utils_1.getCalendar(_this.year, _this.month),
            selected: new Date().getDate()
        };
        _this.handleClickDay = function (day) {
            _this.placeholder = null;
            _this.setState({
                selected: day.dayMonth || day.anotherMonthDay,
                showCalendar: false
            });
            if (day.position === 'prev') {
                _this.handleClickPrevMonth();
            }
            ;
            if (day.position === 'next') {
                _this.handleClickNextMonth();
            }
            ;
            if (_this.props.setValue) {
                _this.props.setValue(_this.handleDayForInput(day.anotherMonthDay || day.dayMonth));
            }
            ;
        };
        _this.handleClickPrevMonth = function () {
            if (_this.month === 0) {
                _this.month = 11;
                _this.year -= 1;
            }
            else {
                _this.month -= 1;
            }
            _this.setState({
                days: utils_1.getCalendar(_this.year, _this.month)
            });
        };
        _this.handleClickNextMonth = function () {
            if (_this.month === 11) {
                _this.month = 0;
                _this.year += 1;
            }
            else {
                _this.month += 1;
            }
            _this.setState({
                days: utils_1.getCalendar(_this.year, _this.month)
            });
        };
        _this.handleDayForInput = function (day) {
            var month = ('0' + (_this.month + 1)).slice(-2);
            var date = ('0' + (day)).slice(-2);
            return date + "/" + month + "/" + _this.year;
        };
        _this.handleShowCalendar = function () {
            _this.setState(function (prevState) { return ({ showCalendar: !prevState.showCalendar }); });
            document.addEventListener('click', _this.handlecloseCalendar);
        };
        _this.handlecloseCalendar = function (e) {
            if (!_this.refCalendar.contains(e.target)) {
                _this.setState({ showCalendar: false });
                document.removeEventListener('click', _this.handlecloseCalendar);
            }
        };
        return _this;
    }
    DatePickerContainer.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.resetCalendar !== this.props.resetCalendar) {
            this.placeholder = this.props.placeholder;
            this.setState({
                days: utils_1.getCalendar(new Date().getFullYear(), new Date().getMonth()),
                selected: new Date().getDate()
            });
            this.month = new Date().getMonth();
            this.year = new Date().getFullYear();
        }
        ;
    };
    ;
    DatePickerContainer.prototype.render = function () {
        var _this = this;
        var propsCalendar = {
            month: this.month,
            year: this.year,
            days: this.state.days,
            handleClickDay: this.handleClickDay,
            handleClickPrevMonth: this.handleClickPrevMonth,
            handleClickNextMonth: this.handleClickNextMonth,
            handleShowCalendar: this.handleShowCalendar,
            showCalendar: this.state.showCalendar,
            selected: this.state.selected,
            placeholder: this.placeholder,
            handleDayForInput: this.handleDayForInput,
            error: this.props.error
        };
        return (React.createElement(Datepicker_1.DatePicker, __assign({}, propsCalendar, { handleRef: function (ref) { _this.refCalendar = ref; } })));
    };
    DatePickerContainer.propTypes = {
        placeholder: PropTypes.string,
        setValue: PropTypes.func,
        resetCalendar: PropTypes.bool
    };
    return DatePickerContainer;
}(React.Component));
exports.DatePickerContainer = DatePickerContainer;
