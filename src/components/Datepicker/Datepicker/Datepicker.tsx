import * as React from 'react';
import {
  Wrapper,
  CalendarWrapper,
  CalendarHead,
  CalendarBody,
  MonthContainer,
  CalendarTitle,
  MonthDayWrapper,
  Day
} from './styled';
import { DateSearch } from '../DateSearch';
import { DayModel } from '../models/DayModel';
import { WeekDays } from '../Weekdays';
import { Controls } from '../Controls';
import { MONTHS } from './utils';

interface Props {
  days: DayModel[];
  month: number;
  year: number;
  handleClickDay: Function;
  handleClickPrevMonth: Function;
  handleClickNextMonth: Function;
  handleShowCalendar?: Function;
  showCalendar?: boolean;
  selected?: number;
  handleDayForInput?: Function;
  placeholder?: string;
  handleRef: Function;
  error?: boolean;
}

export class DatePicker extends React.Component<Props> {
  render() {
    const nameMonth = MONTHS[this.props.month];
    const value = this.props.placeholder || this.props.handleDayForInput(this.props.selected);
    return (
      <Wrapper innerRef={ref => {this.props.handleRef(ref)}}>
          <DateSearch handleClick={this.props.handleShowCalendar} value={value} error={this.props.error} />
          <CalendarWrapper showCalendar={this.props.showCalendar} >
              <CalendarHead>
                <CalendarTitle>{nameMonth} {this.props.year}</CalendarTitle>
                <Controls
                  handleClickPrevMonth={this.props.handleClickPrevMonth}
                  handleClickNextMonth={this.props.handleClickNextMonth} />
              </CalendarHead>
              <CalendarBody>
                <WeekDays />
                <MonthContainer>
                  {this.props.days.map((day: DayModel, index: number) => {
                    return(
                      <MonthDayWrapper key={index} selected={this.props.selected === day.dayMonth}
                        >
                        <Day 
                          selected={this.props.selected === day.dayMonth}
                          color={day.anotherMonthDay ? "#c2c2c2" : "c4c4c4"}
                          onClick={() => {this.props.handleClickDay(day)}}
                        >
                          {day.dayMonth} {day.anotherMonthDay}
                        </Day>
                      </MonthDayWrapper>
                    )
                  })}
                </MonthContainer>
              </CalendarBody>
          </CalendarWrapper>
      </Wrapper>
      );
  }
}