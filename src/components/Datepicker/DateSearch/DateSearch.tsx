import * as React from 'react';
import { Wrapper, Input } from './styled';

interface Props {
    handleClick?: Function;
    value?: string;
    error?: boolean;
}

export const DateSearch: React.FC<Props> = ({ handleClick, value, error }) => {
    return (
        <Wrapper onClick={() => handleClick()} error={error}>
            <Input type="text" value={value} readOnly />
            <img src="../../../images/icon-calendar.svg" width="25" height="25" />
        </Wrapper>
    );
};
