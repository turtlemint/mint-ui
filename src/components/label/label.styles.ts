
import styled, { css } from 'styled-components';
import { ILabelProps } from './label.typings';

export const LabelWrapper = styled.span`
    display: inline-block;
    border: 1px solid grey;
    background-color: white;
    margin: 0 5px 5px 0;
    ${(props: ILabelProps) => props.text === 'positive' && css`
        border: 1px solid transparent;
        background-color: green
    `}
    ${(props: ILabelProps) => props.text === 'neutral' && css`
        border: 1px solid transparent;
        background-color: yellow
    `}
    ${(props: ILabelProps) => props.text === 'negative' && css`
        border: 1px solid transparent;
        background-color: orange;
        color: red
    `}
    ${(props: ILabelProps) => props.isActive && css`
        border: 1px solid transparent;
        background-color: blue};
        color: white;
    `}
    border-radius: 16px;
    padding: 4px 12px;
    @media only screen and (max-width: 599px) {
        padding: 0px 10px 4px;
    }
` ;
export const Labelfont = styled.span`
    font-size: 14px;
    @media only screen and (max-width: 599px) {
        font-size: 10px;
    }
`;
