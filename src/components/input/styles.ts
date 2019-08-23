import styled, { css } from 'styled-components';
import { InputProps } from './index';
import PALETTE from '__utils/colors';
import { Omit } from '__utils/type';

export const Wrapper = styled.div<Pick<InputProps, 'block'>>`
    width: ${props => props.block ? '100%' : '328px'};
    text-align: left;
`;

export const StyledInput = styled.input<Pick<InputProps, 'error' | 'disabled'> & Omit<InputProps, 'onChange'>>`
    border: 0;
    border: 1px solid ${PALETTE.DISABLED};
    padding: 14px 48px 14px 16px;
    border-radius: 4px;
    color: ${PALETTE.GREY1};
    font-size: 16px;
    width: 100%;
    &:focus{
        border: 2px solid ${PALETTE.PRIMARY};
    }
    ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
        color: ${PALETTE.DISABLED};
    }
    ::-moz-placeholder { /* Firefox 19+ */
        color: ${PALETTE.DISABLED};
    }
    :-ms-input-placeholder { /* IE 10+ */
        color: ${PALETTE.DISABLED};
    }
    :-moz-placeholder { /* Firefox 18- */
        color: ${PALETTE.DISABLED};
    }
    ::placeholder: {
        color: ${PALETTE.DISABLED};
    }
    ${props => props.error && css`
        border: 1px solid ${PALETTE.DANGER};
        &:focus{
            border: 1px solid ${PALETTE.DANGER};
        }
    `};
    ${props => props.disabled && css`
        opacity: 0.64;
        cursor: no-drop;
        background-color: ${PALETTE.DISABLED};
        color: ${PALETTE.GREY3};
        ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
            color: ${PALETTE.GREY3};
        }
        ::-moz-placeholder { /* Firefox 19+ */
            color: ${PALETTE.GREY3};
        }
        :-ms-input-placeholder { /* IE 10+ */
            color: ${PALETTE.GREY3};
        }
        :-moz-placeholder { /* Firefox 18- */
            color: ${PALETTE.GREY3};
        }
        ::placeholder: {
            color: ${PALETTE.GREY3};
        }
    `};
    
`;

const SharedStyles = css`
    color: ${PALETTE.GREY1};
    font-size: 14px;
    line-height: 1.43;
`;

type LabelProps = Pick<InputProps, 'error'> & { children: React.ReactNode; };

export const StyledLabel = styled.div<LabelProps>`
    margin-bottom: 4px;
    label {
        ${SharedStyles};
        ${props => props.error && css`
            color: ${PALETTE.DANGER};
        `};
    }
`;

export const StyledError = styled.div<{ children: React.ReactNode }>`
    ${SharedStyles};
    margin-top: 4px;
    word-wrap: break-word;
    label {
        color: ${PALETTE.DANGER};
    }
`;

export const HelpText = styled.p<{ children: React.ReactNode; }>`
    ${SharedStyles};
    color: ${PALETTE.GREY2};
`;