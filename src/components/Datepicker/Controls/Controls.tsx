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
            {/* <Icon data-name="icon-up" width="15" height="15" fill={COLORS.LIGHT_GRAY} /> */}
            </Button>
            <Button onClick={() => handleClickNextMonth()}>
            {/* <Icon data-name="icon-down-arrow" width="15" height="15" fill={COLORS.LIGHT_GRAY} /> */}
            </Button>
        </Wrapper>
    );
};
