import styled, { css } from 'styled-components';

interface Props {
    showCalendar?: boolean;
    selected?: boolean;
}

export const Wrapper = styled.div`
    position: relative;
    font-size: 14px;
`;

export const CalendarWrapper = styled.div`
    position: absolute;
    background: #fff;
    width: 100%;
    border-radius: 10px;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0px 0px 7px 3px #ccc;
    display: none;
    z-index: 99;
    ${(props:Props) => props.showCalendar && css`
        display: block;
    `};
`;

export const CalendarBody = styled.div`
  background: #fff;
`;

export const CalendarHead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CalendarTitle = styled.p`
  font-size: 18px;
`;

export const MonthContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const MonthDayWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 14%;
  height: 30px;
  text-align: center;
  box-sizing: border-box;
  ${(props: Props) => props.selected && css`
    border-radius: 50%;
  `}
`;

export const Day = styled.span`
  color: ${props => props.color};
  ${(props: Props) => props.selected && css`
    color: #fff;
  `}
  font-size: 14px;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;