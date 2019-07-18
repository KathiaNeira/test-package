export const MONTHS = {
  ['0']: 'Enero',
  ['1']: 'Febrero',
  ['2']: 'Marzo',
  ['3']: 'Abril',
  ['4']: 'Mayo',
  ['5']: 'Junio',
  ['6']: 'Julio',
  ['7']: 'Agosto',
  ['8']: 'Setiembre',
  ['9']: 'Octubre',
  ['10']: 'Noviembre',
  ['11']: 'Diciembre',
};

const getCalendarDays = (year: number, month: number) => {
  return 32 - new Date(year, month, 32).getDate();
};

export const getCalendar = (year: number, month: number) => {
  const daysMonth = [];
  const prevMonthDay: Date = new Date(year, month, 1 - new Date(year, month, 1).getDay());
  let daysPrevMonth = prevMonthDay.getDate();
  let initial: number = 1;
  let count: number = 1;
  const weekdays: number = 6;
  const rowsCalendar: number = 7;
  const firstDay: number = new Date(year, month).getDay();

  for (let i = 0; i < weekdays; i++) {
    for (let j = 0; j < rowsCalendar; j++) {
      if (i === 0 && j < firstDay) {
        daysMonth.push({
          anotherMonthDay: daysPrevMonth,
          position: 'prev'
        })
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
      })
      initial++
    }
  }

  return daysMonth;
};


