import * as React from 'react';
import { Wrapper, Button } from './styled';

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
            <img src="../../../images/icon-up.svg" width="15" height="15" />
            </Button>
            <Button onClick={() => handleClickNextMonth()}>
            <img src="../../../images/icon-down-arrow.svg" width="15" height="15" />
            </Button>
        </Wrapper>
    );
};
