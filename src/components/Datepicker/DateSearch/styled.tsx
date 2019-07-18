import styled, { css } from 'styled-components';

interface Props {
    error: boolean;
}

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 51px;
    padding: 8px;
    box-sizing: border-box;
    border-radius: 2px;
    ${(props: Props) => props.error && css`
        border: 1px solid #ff0000;
    `};
`;

export const Input = styled.input`
    border: none;
    font-size: 14px;
    outline: none;
    pointer-events: none;
`;
