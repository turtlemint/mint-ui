import * as React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { BREAKPOINTS } from "./breakpoints";
import { tupleNum } from "../__utils/type";
import { GlobalStyles } from "../app";
import { Gutter, applyGutter } from "./row";

const getColWidth = (gridSpan: number): string | null => {
	if (!gridSpan) return null;
	const width = (gridSpan / 12) * 100;
	return `${width.toFixed(3)}%`;
};

const ColValues = tupleNum(12, 9, 8, 6, 4, 3, 0);
export type ColValueType = typeof ColValues[number];
interface ColProps {
	/** grid value for mobile screens */
	xs?: ColValueType;
	/** grid value for tablets viewport */
	sm?: ColValueType;
	/** grid value for laptop viewport */
	md?: ColValueType;
	/** grid value for desktop viewport */
	lg?: ColValueType;
	/** applies margin left or provides empty space to a column */
	xsOffset?: ColValueType;
	smOffset?: ColValueType;
	mdOffset?: ColValueType;
	lgOffset?: ColValueType;
	/** hides for mobile screens */
	xsHidden?: boolean;
	/** hides for tablet screens */
	smHidden?: boolean;
	/** hides for laptop screens */
	mdHidden?: boolean;
	/** hides for very large screens */
	lgHidden?: boolean;
	/** {6} or [6, 6] or {xs: 6, sm: 4, md: 3, lg: 4} or [3, {xs: 6, sm: 4, md: 3, lg: 4}] */
	gutter?: Gutter;
	/** behaves the same way as flexbox ordering for columns */
	order?: number;
}

type UnionProps = React.HTMLAttributes<HTMLDivElement> | Partial<ColProps>;
export type FinalProps = Exclude<
	UnionProps,
	React.HTMLAttributes<HTMLDivElement>
>;

// export const Col: React.FC<UnionProps> = (props: UnionProps) => (
// 	<StyledCol {...props}></StyledCol>
// );

export const Col = styled.div<FinalProps>`
	${GlobalStyles};
	${({ order }) =>
		order &&
		css`
			order: ${order};
		`};
	/* <= 768px */
	@media screen and (max-width: ${BREAKPOINTS.SM}px) {
		${({ xsHidden = false }) =>
			xsHidden &&
			css`
				display: none;
			`};
		${({ xs, xsHidden }) =>
			xs &&
			!xsHidden &&
			css`
				flex: ${xs} ${getColWidth(xs)};
			`};
		${({ xsOffset, xsHidden }) =>
			xsOffset &&
			!xsHidden &&
			css`
				margin-left: ${getColWidth(xsOffset)};
			`};
		${({ gutter }) => gutter && applyGutter(gutter, "xs")};
	}
	/* 769 - 1024 */
	@media screen and (min-width: ${BREAKPOINTS.SM +
			1}px) and (max-width: ${BREAKPOINTS.MD}px) {
		${({ smHidden = false }) =>
			smHidden &&
			css`
				display: none;
			`};
		${({ sm, smHidden }) =>
			sm &&
			!smHidden &&
			css`
				flex-basis: ${getColWidth(sm)};
			`};
		${({ smOffset, smHidden }) =>
			smOffset &&
			!smHidden &&
			css`
				margin-left: ${getColWidth(smOffset)};
			`};
		${({ gutter }) => gutter && applyGutter(gutter, "sm")};
	}
	/* 1025 - 1440 */
	@media screen and (min-width: ${BREAKPOINTS.MD +
			1}px) and (max-width: ${BREAKPOINTS.LG}px) {
		${({ mdHidden = false }) =>
			mdHidden &&
			css`
				display: none;
			`};
		${({ md, mdHidden }) =>
			md &&
			!mdHidden &&
			css`
				flex-grow: 0;
				flex-shrink: 0;
				flex-basis: ${getColWidth(md)};
			`};
		${({ mdOffset, mdHidden }) =>
			mdOffset &&
			!mdHidden &&
			css`
				margin-left: ${getColWidth(mdOffset)};
			`};
		${({ gutter }) => gutter && applyGutter(gutter, "md")};
	}
	/* > 1440 */
	@media screen and (min-width: ${BREAKPOINTS.LG + 1}px) {
		${({ lgHidden = false }) =>
			lgHidden &&
			css`
				display: none;
			`};
		${({ lg, lgHidden }) =>
			lg &&
			!lgHidden &&
			css`
				flex-basis: ${getColWidth(lg)};
			`};
		${({ lgOffset, lgHidden }) =>
			lgOffset &&
			!lgHidden &&
			css`
				margin-left: ${getColWidth(lgOffset)};
			`};
		${({ gutter }) => gutter && applyGutter(gutter, "lg")};
	}
`;

Col.propTypes = {
	xs: PropTypes.oneOf(ColValues),
	sm: PropTypes.oneOf(ColValues),
	md: PropTypes.oneOf(ColValues),
	lg: PropTypes.oneOf(ColValues),
	xsOffset: PropTypes.oneOf(ColValues),
	smOffset: PropTypes.oneOf(ColValues),
	mdOffset: PropTypes.oneOf(ColValues),
	lgOffset: PropTypes.oneOf(ColValues),
	xsHidden: PropTypes.bool,
	smHidden: PropTypes.bool,
	mdHidden: PropTypes.bool,
	lgHidden: PropTypes.bool,
	order: PropTypes.number,
	gutter: PropTypes.any
};
export default Col;
