"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _a;
exports.MONTHS = (_a = {},
    _a['0'] = 'Enero',
    _a['1'] = 'Febrero',
    _a['2'] = 'Marzo',
    _a['3'] = 'Abril',
    _a['4'] = 'Mayo',
    _a['5'] = 'Junio',
    _a['6'] = 'Julio',
    _a['7'] = 'Agosto',
    _a['8'] = 'Setiembre',
    _a['9'] = 'Octubre',
    _a['10'] = 'Noviembre',
    _a['11'] = 'Diciembre',
    _a);
var getCalendarDays = function (year, month) {
    return 32 - new Date(year, month, 32).getDate();
};
exports.getCalendar = function (year, month) {
    var daysMonth = [];
    var prevMonthDay = new Date(year, month, 1 - new Date(year, month, 1).getDay());
    var daysPrevMonth = prevMonthDay.getDate();
    var initial = 1;
    var count = 1;
    var weekdays = 6;
    var rowsCalendar = 7;
    var firstDay = new Date(year, month).getDay();
    for (var i = 0; i < weekdays; i++) {
        for (var j = 0; j < rowsCalendar; j++) {
            if (i === 0 && j < firstDay) {
                daysMonth.push({
                    anotherMonthDay: daysPrevMonth,
                    position: 'prev'
                });
                daysPrevMonth++;
                continue;
            }
            if (initial > getCalendarDays(year, month)) {
                daysMonth.push({
                    anotherMonthDay: count,
                    position: 'next'
                });
                count++;
                continue;
            }
            daysMonth.push({
                dayMonth: initial
            });
            initial++;
        }
    }
    return daysMonth;
};
