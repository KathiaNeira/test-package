import * as React from 'react';
import { Wrapper, Day } from './styled';

const weekNames = ['D', 'L', 'M', 'X', 'J', 'V', 'S'];

export const WeekDays: React.FC = () => (
  <Wrapper>
    {weekNames.map((name, index) => (
        <Day key={index} >{name}</Day>
    ))}
  </Wrapper>
);
