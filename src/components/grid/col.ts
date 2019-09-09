import styled, { css } from "styled-components";
import { BREAKPOINTS } from "../__utils/breakpoints";
import { tupleNum } from "../__utils/type";

const getColWidth = (gridSpan: number): string | null => {
    if (!gridSpan) return null;
    const width = (gridSpan / 12) * 100;
    return `${width.toFixed(8)}%`;
};

const ColValues = tupleNum(12, 9, 8, 6, 4, 3);
export type ColValueType = (typeof ColValues)[number];

interface ColProps {
    xs: ColValueType;
    sm: ColValueType;
    md: ColValueType;
    lg: ColValueType;
    xsOffset: ColValueType;
    smOffset: ColValueType;
    mdOffset: ColValueType;
    lgOffset: ColValueType;
    align: string;
    xsHidden: boolean;
    smHidden: boolean;
    mdHidden: boolean;
    lgHidden: boolean
};

const Col = styled.div<Partial<ColProps>>`
    padding-left: 15px;
    padding-right: 15px;
    min-height: 1px;
    float: left;
    width: 100%;
    text-align: ${props => (props.align ? props.align : 'left')};
    ${({ xsHidden = false }) => xsHidden && css`
        display: none;
    `};
    ${({ xs, xsHidden }) => xs && !xsHidden && css`
        width: ${getColWidth(xs)}
    `};
    ${({ xsOffset, xsHidden }) => xsOffset && !xsHidden && css`
        margin-left: ${getColWidth(xsOffset)};
    `};
    

    @media(min-width: ${ BREAKPOINTS.SM}px) {
        ${({ smHidden = false }) => smHidden && css`
            display: none;
        `};
        ${ ({ sm, smHidden }) => sm && !smHidden && css`
            width: ${getColWidth(sm)};
        `};
        ${({ smOffset, smHidden }) => smOffset && !smHidden && css`
            margin-left: ${getColWidth(smOffset)};
        `};
       
    }
    @media(min-width: ${ BREAKPOINTS.MD}px) {
        ${({ mdHidden = false }) => mdHidden && css`
            display: none;
        `};
        ${({ md, mdHidden }) => md && !mdHidden && css`
            width: ${getColWidth(md)}
        `};
        ${({ mdOffset, mdHidden }) => mdOffset && !mdHidden && css`
            margin-left: ${getColWidth(mdOffset)}
        `};
    }
    @media(min-width: ${ BREAKPOINTS.LG}px) {
        ${({ lgHidden = false }) => lgHidden && css`
            display: none;
        `};
        ${({ lg, lgHidden }) => lg && !lgHidden && css`
            width: ${getColWidth(lg)}
        `};
        ${({ lgOffset, lgHidden }) => lgOffset && !lgHidden && css`
            margin-left: ${getColWidth(lgOffset)}
        `};
    }
`;

export default Col;