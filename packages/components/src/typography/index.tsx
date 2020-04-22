import * as React from "react";
import styled, { css } from "styled-components";
import COLORS from "../__utils/colors";
import { tuple, tupleNum } from "../__utils/type";
import { GlobalStyles } from "../app";

type TextSize = number;
const levelTuple = tupleNum(1, 2, 3, 4, 5, 6);
type LevelType = typeof levelTuple[number];
type TextSpace = number;
const FontType = tuple("bold", "medium", "light");
type WeightType = typeof FontType[number];
const textType = tuple("success", "danger", "warning", "info");
type TextType = typeof textType[number];
const TextStyleType = tuple("uppercase", "lowercase", "capitalize");
type TextStyle = typeof TextStyleType[number];

interface TypoProps {
	text: string;
	size?: TextSize;
	level?: LevelType;
	style?: React.CSSProperties;
	weight?: WeightType;
	textType?: TextType;
	ellipsis?: boolean;
	textStyle?: TextStyle;
	/** can be used for letter-spacing in px */
	textSpace?: TextSpace;
}

export const Typography = ({
	text,
	size,
	style,
	level,
	weight,
	textType,
	textStyle
}: TypoProps) => {
	return (
		<Wrapper style={style}>
			<Content
				size={size}
				level={level}
				weight={weight}
				textType={textType}
				textStyle={textStyle}
			>
				{text}
			</Content>
		</Wrapper>
	);
};

export const Title = ({
	text,
	size,
	style,
	level,
	weight,
	textType,
	textStyle
}: TypoProps) => {
	return (
		<Wrapper style={style}>
			<Content
				size={size}
				level={level}
				weight={weight}
				textType={textType}
				textStyle={textStyle}
			>
				{text}
			</Content>
		</Wrapper>
	);
};

export const Text = ({
	text,
	size,
	style,
	level,
	weight,
	textType,
	ellipsis,
	textStyle,
	textSpace
}: TypoProps) => {
	return (
		<Wrapper style={style}>
			<Content
				size={size}
				level={level}
				weight={weight}
				textType={textType}
				ellipsis={ellipsis}
				textStyle={textStyle}
				textSpace={textSpace}
			>
				{text}
			</Content>
		</Wrapper>
	);
};

export const Striked = ({
	text,
	size,
	style,
	level,
	weight,
	textType,
	ellipsis,
	textStyle,
	textSpace
}: TypoProps) => {
	return (
		<Wrapper style={style}>
			<del>
				<Content
					size={size}
					level={level}
					weight={weight}
					textType={textType}
					ellipsis={ellipsis}
					textStyle={textStyle}
					textSpace={textSpace}
				>
					{text}
				</Content>
			</del>
		</Wrapper>
	);
};

const Wrapper = styled.span`
	${GlobalStyles};
	display: flex;
	flex-direction: column;
	padding: 8px 12px;
`;

const Content = styled.span<{
	size?: TextSize;
	level?: LevelType;
	weight?: WeightType;
	textType?: TextType;
	ellipsis?: boolean;
	textStyle?: TextStyle;
	textSpace?: TextSpace;
}>`
	line-height: 1.43;
	letter-spacing: normal;
	color: ${COLORS.BLACK};
	${({ size }) =>
		css`
			font-size: ${size}px;
		`}
	${({ textSpace }) =>
		css`
			letter-spacing: ${textSpace}px;
		`}
	${({ level }) =>
		level == 1 &&
		css`
			font-size: 44px;
		`}
	${({ level }) =>
		level == 2 &&
		css`
			font-size: 36px;
		`}
	${({ level }) =>
		level == 3 &&
		css`
			font-size: 24px;
		`}
	${({ level }) =>
		level == 4 &&
		css`
			font-size: 18px;
		`}
	${({ level }) =>
		level == 5 &&
		css`
			font-size: 16px;
		`}
	${({ level }) =>
		level == 6 &&
		css`
			font-size: 14px;
		`}
	${({ weight }) =>
		weight == "bold" &&
		css`
			font-weight: bold;
		`}
	${({ weight }) =>
		weight == "medium" &&
		css`
			font-weight: 500;
		`}
	${({ weight }) =>
		weight == "light" &&
		css`
			font-weight: 300;
		`}
	${({ textType }) =>
		textType == "info" &&
		css`
			color: ${COLORS.PICTON_BLUE};
		`}
	${({ textType }) =>
		textType == "warning" &&
		css`
			color: ${COLORS.YELLOW};
		`}
	${({ textType }) =>
		textType == "success" &&
		css`
			color: ${COLORS.PRIMARY_DARK};
		`}
	${({ textType }) =>
		textType == "danger" &&
		css`
			color: ${COLORS.DANGER};
		`}
	${({ ellipsis }) =>
		ellipsis &&
		css`
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
		`}
	${({ textStyle }) =>
		css`
			text-transform: ${textStyle};
		`}
`;

export default Typography;
