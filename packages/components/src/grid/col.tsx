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
	xs: ColValueType;
	sm: ColValueType;
	md: ColValueType;
	lg: ColValueType;
	xsOffset: ColValueType;
	smOffset: ColValueType;
	mdOffset: ColValueType;
	lgOffset: ColValueType;
	xsHidden: boolean;
	smHidden: boolean;
	mdHidden: boolean;
	lgHidden: boolean;
	gutter?: Gutter;
	order?: number;
}

type UnionProps = React.HTMLAttributes<HTMLDivElement> | Partial<ColProps>;
export type FinalProps = Exclude<
	UnionProps,
	React.HTMLAttributes<HTMLDivElement>
>;

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

export default Col;
