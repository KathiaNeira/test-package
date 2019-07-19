import * as React from 'react';
import { Wrapper, Button } from './styled';
const iconUp = require('../../../images/icon-up.svg');
const iconDown = require('../../../images/icon-down-arrow.svg');

interface Props {
    handleClickPrevMonth: Function;
    handleClickNextMonth: Function;
}

export const Controls: React.FC<Props> = ({
    handleClickPrevMonth,
    handleClickNextMonth
}) => {
    return (
        <Wrapper>
            <Button onClick={() => handleClickPrevMonth()}>
            <img src={iconUp} width="15" height="15" />
            </Button>
            <Button onClick={() => handleClickNextMonth()}>
            <img src={iconDown} width="15" height="15" />
            </Button>
        </Wrapper>
    );
};
