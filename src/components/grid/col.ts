import styled, { css } from "styled-components";
import { BREAKPOINTS } from "_utils/breakpoints";
import { tupleNum } from "_utils/type";

const getColWidth = (gridSpan: number): string | null => {
    if (!gridSpan) return null;
    const width = (gridSpan / 12) * 100;
    return `${width.toFixed(8)}%`;
};

const ColValues = tupleNum(12, 6, 4, 3);
export type ColValueType = (typeof ColValues)[number];

interface IColProps {
    xs: ColValueType;
    sm: ColValueType;
    md: ColValueType;
    lg: ColValueType;
    xl: ColValueType;
    xsOffset: ColValueType;
    smOffset: ColValueType;
    mdOffset: ColValueType;
    lgOffset: ColValueType;
    xlOffset: ColValueType;
    align: string;
};

const Col = styled.div<Partial<IColProps>>`
    padding-left: 15px;
    padding-right: 15px;
    min-height: 1px;
    float: left;
    width: 100%;
    text-align: ${props => (props.align ? props.align : 'left')};
    ${({ xs }) => xs && css`
        width: ${getColWidth(xs)}
    `};

    @media(min-width: ${ BREAKPOINTS.SM}px) {
        ${ ({ sm }) => sm && css`
            width: ${getColWidth(sm)}
        `};
    }
    @media(min-width: ${ BREAKPOINTS.MD}px) {
        ${ ({ md }) => md && css`
            width: ${getColWidth(md)}
        `};
    }
    @media(min-width: ${ BREAKPOINTS.LG}px) {
        ${ ({ lg }) => lg && css`
            width: ${getColWidth(lg)}
        `};
    }
    @media(min-width: ${ BREAKPOINTS.XL}px) {
        ${ ({ xl }) => xl && css`
            width: ${getColWidth(xl)}
        `};
    }
    /* xsOffset, smOffset, mdOffset, lgOffset */
    ${({ xsOffset }) =>
        xsOffset !== null && xsOffset !== undefined && css`
            margin-left: ${getColWidth(xsOffset)}
        `
    };
    @media(min-width: ${ BREAKPOINTS.SM}px) {
        ${({ smOffset }) => smOffset && css`
            margin-left: ${getColWidth(smOffset)}
        `};
    }
    @media(min-width: ${ BREAKPOINTS.MD}px) {
        ${ ({ mdOffset }) => mdOffset && css`
            margin-left: ${getColWidth(mdOffset)}
        `};
    }
    @media(min-width: ${ BREAKPOINTS.LG}px) {
        ${ ({ lgOffset }) => lgOffset && css`
            margin-left: ${getColWidth(lgOffset)}
        `};
    }
    @media(min-width: ${ BREAKPOINTS.XL}) {
        ${ ({ xlOffset }) => xlOffset && css`
            margin-left: ${getColWidth(xlOffset)}
        `};
    }
`;

export default Col;