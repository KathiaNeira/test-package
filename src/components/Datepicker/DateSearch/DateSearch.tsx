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
            {/* <Icon data-name="icon-calendar" width="25" height="25" fill={COLORS.LIGHT_GRAY} /> */}
        </Wrapper>
    );
};
