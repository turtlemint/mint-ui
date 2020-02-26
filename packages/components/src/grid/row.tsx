import * as React from "react";
import styled, { css } from "styled-components";
import { GlobalStyles } from "../app";
import { tuple } from "../__utils/type";
import { ColValueType } from "./col";
import { BREAKPOINTS } from "./breakpoints";

const justifyValues = tuple(
	"flex-start",
	"flex-end",
	"center",
	"space-around",
	"space-between"
);
type justifyEnum = typeof justifyValues[number];
const alignValues = tuple(
	"flex-start",
	"flex-end",
	"center",
	"baseline",
	"stretch"
);
type alignEnum = typeof alignValues[number];

export interface GutterObjectType {
	xs: ColValueType;
	sm: ColValueType;
	md: ColValueType;
	lg: ColValueType;
}
type GutterArrayType = [
	ColValueType | GutterObjectType,
	ColValueType | GutterObjectType
];
export type Gutter = ColValueType | GutterObjectType | GutterArrayType;
export interface RowProps {
	/** Horizontal align items*/
	justify?: justifyEnum;
	/** Vertical align items */
	align?: alignEnum;
	/** space between columns */
	gutter?: Gutter;
	/** Cols for your layout  */
	children: React.ReactNode;
	/** React.CSSProperties  */
	style?: React.CSSProperties;
}

export const Row = ({ gutter, children, ...rest }: RowProps) => {
	return (
		<StyledRow gutter={gutter} {...rest}>
			{React.Children.map(children, (child: any) => {
				return gutter ? React.cloneElement(child, { gutter }) : child;
			})}
		</StyledRow>
	);
};

const StyledRow = styled.div<RowProps>`
	${GlobalStyles};
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: ${props => (props.justify ? props.justify : "flex-start")};
	align-items: ${props => (props.align ? props.align : "center")};
	@media (max-width: ${BREAKPOINTS.SM}px) {
		${({ gutter }) => gutter && applyGutter(gutter, "xs", true)};
	}
	/* 769 - 1024 */
	@media (min-width: ${BREAKPOINTS.SM +
			1}px) and (max-width: ${BREAKPOINTS.MD}px) {
		${({ gutter }) => gutter && applyGutter(gutter, "sm", true)};
	}
	/* 1025 - 1440 */
	@media (min-width: ${BREAKPOINTS.MD +
			1}px) and (max-width: ${BREAKPOINTS.LG}px) {
		${({ gutter }) => gutter && applyGutter(gutter, "md", true)};
	}
	/* > 1440 */
	@media (min-width: ${BREAKPOINTS.LG + 1}px) {
		${({ gutter }) => gutter && applyGutter(gutter, "lg", true)};
	}
`;

export const applyGutter = (
	gutter: Gutter,
	screenWidth: string,
	isRow: boolean = false
) => {
	if (_isGutterArrayType(gutter)) {
		const results: any = [];
		// check if each children is object or number
		gutter.forEach((item, index: number) => {
			if (_isGutterObjectType(item) && index === 0) {
				switch (screenWidth) {
					// Mobile first approach
					case "sm":
						const { sm = 0 } = item;
						results.push(getMargin(isRow, "vertical", sm));
						break;
					case "md":
						const { md } = item;
						results.push(getMargin(isRow, "vertical", md));
						break;
					case "xs":
						const { lg } = item;
						results.push(getMargin(isRow, "vertical", lg));
						break;
					default:
						const { xs } = item;
						results.push(getMargin(isRow, "vertical", xs));
				}
			} else if (_isGutterObjectType(item) && index === 1) {
				switch (screenWidth) {
					// Mobile first approach
					case "sm":
						const { sm } = item;
						results.push(getMargin(isRow, "horizontal", sm));
						break;
					case "md":
						const { md } = item;
						results.push(getMargin(isRow, "horizontal", md));
						break;
					case "xs":
						const { lg } = item;
						results.push(getMargin(isRow, "horizontal", lg));
						break;
					default:
						const { xs } = item;
						results.push(getMargin(isRow, "horizontal", xs));
				}
			} else if (typeof item === "number" && index === 0)
				results.push(getMargin(isRow, "vertical", item));
			else if (typeof item === "number" && index === 1) {
				results.push(getMargin(isRow, "horizontal", item));
			}
			return 0;
		});
		return results;
	} else if (_isGutterObjectType(gutter)) {
		return applyScreenBasedGutter(gutter, screenWidth, isRow);
	} else if (typeof gutter === "number") {
		return css`
			margin: ${isRow ? -gutter : gutter}px;
		`;
	}
};

function getMargin(isRow: boolean, direction: string, margin: ColValueType) {
	if (direction === "vertical") {
		return css`
			margin-top: ${isRow ? -margin : margin}px;
			margin-bottom: ${isRow ? -margin : margin}px;
		`;
	}

	return css`
		margin-left: ${isRow ? -margin : margin}px;
		margin-right: ${isRow ? -margin : margin}px;
	`;
}

export const applyScreenBasedGutter = (
	gutter: GutterObjectType,
	screenWidth: string,
	isRow: boolean = false
) => {
	switch (screenWidth) {
		// Mobile first approach
		case "sm":
			const { sm = 0 } = gutter;
			return css`
				margin: ${isRow ? -sm : sm}px;
			`;
		case "md":
			const { md = 0 } = gutter;
			return css`
				margin: ${isRow ? -md : md}px;
			`;
		case "xs":
			const { lg = 0 } = gutter;
			return css`
				margin: ${isRow ? -lg : lg}px;
			`;
		default:
			const { xs = 0 } = gutter;
			return css`
				margin: ${isRow ? -xs : xs}px;
			`;
	}
};

function _isGutterObjectType(value: Gutter): value is GutterObjectType {
	return (
		typeof (value as GutterObjectType) === "object" &&
		value instanceof Object &&
		!(value instanceof Array)
	);
}
function _isGutterArrayType(value: Gutter): value is GutterArrayType {
	return (
		typeof (value as GutterArrayType) === "object" &&
		value instanceof Object &&
		value instanceof Array
	);
}
export default Row;
