import styled, { css } from 'styled-components';
import { ButtonProps } from './index';
import PALETTE from '../utils/colors';

const SharedStyles = css<ButtonProps>`
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    text-align: center;
    line-height: 1.25;
    padding: 14px 24px;
    display: inline-block;
    ${props => props.block && css`
        width: 100%;
        display: block;
    `}
`;

export const StyledButton = styled.button<ButtonProps>`
    ${SharedStyles};
    background: ${PALETTE.PRIMARY};
    border-radius: 4px;
    border: 1px solid transparent;
    color: ${PALETTE.WHITE};
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    touch-action: manipulation;
    &:hover{
        background: ${PALETTE.PRIMARY_LIGHT};
    }
    &:active{
        color: ${PALETTE.WHITE};
        background: ${PALETTE.PRIMARY_DARK};
    }
    ${props => props.size === 'sm' && css`
        padding: 10px 16px;
    `};
   
    ${props => props.btnType === 'danger' && css`
        background: ${PALETTE.DANGER};
        color: ${PALETTE.WHITE};
        &:hover{
            background: ${PALETTE.DANGER_LIGHT};
        }
        &:active{
            background: ${PALETTE.DANGER_DARK};
        }
    `};
    
    ${props => props.btnType === 'outlined' && css`
        background: none;
        color: ${PALETTE.PRIMARY};
        border: 1px solid ${PALETTE.PRIMARY};
        &:hover{
            border: 1px solid ${PALETTE.PRIMARY_LIGHT};
            background: ${PALETTE.BACKGROUND_GREEN};
        }
        &:active{
            background: none;
            border: 1px solid ${PALETTE.PRIMARY_DARK};
            color: ${PALETTE.PRIMARY_DARK};
        }
    `};

     ${props => props.disabled && css`
        color: ${props.btnType === 'outlined' ? PALETTE.DISABLED : PALETTE.WHITE};
        background: ${props.btnType === 'outlined' ? 'none' : PALETTE.DISABLED};
        cursor: no-drop;
        ${props.btnType === 'outlined' && css`
            border: 1px solid ${PALETTE.DISABLED};
        `}
        &:hover{
            color: ${props.btnType === 'outlined' ? PALETTE.DISABLED : PALETTE.WHITE};
            background: ${props.btnType === 'outlined' ? 'none' : PALETTE.DISABLED};
            border: 1px solid ${ props.btnType === 'outlined' ? PALETTE.DISABLED : 'transparent'};
        }
`};

`;

export const StyledLink = styled.a<ButtonProps>`
    ${ SharedStyles};
    text-decoration: none;
    background: none;
    border: 0;
    color: ${ PALETTE.PRIMARY};
    &:hover{
        background: ${ PALETTE.BACKGROUND_GREEN};
    }
    &:active{
        color: ${ PALETTE.PRIMARY_DARK};
        background: ${ PALETTE.BACKGROUND_GREEN_DARK};
    }
    ${props => props.disabled && css`
            color: ${PALETTE.DISABLED};
            cursor: no-drop;
            &:hover{
                background: none;
            }
            &:active{
                background: none;
                color: ${PALETTE.DISABLED};
            }
        `};

    `;