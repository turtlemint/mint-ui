import * as React from "react";
import { tuple } from "../__utils/type";
import styled, { css } from "styled-components";
import Icon from "../icon";
import COLORS from "../__utils/colors";
import { GlobalStyles } from "../app";

export const ShapeTuple = tuple("circle", "square");
type ShapeType = typeof ShapeTuple[number];

export interface AvatarProps {
	/** specify icon="search" or icon={IconComponent} */
	icon: React.ReactNode | string;
	/** circle or square */
	shape?: ShapeType;
	/** size of the  svg icon to render */
	size?: number;
	/** color of the svg icon to render */
	color?: string;
	/** color of the wrapper */
	backgroundColor?: string;
	/** style of the wrapper around SVG */
	style?: React.CSSProperties;
}

export const Avatar = ({
	icon,
	shape,
	size = 24,
	color,
	backgroundColor,
	style
}: AvatarProps) => {
	return (
		<Wrapper size={size} style={style}>
			<Shape backgroundColor={backgroundColor} size={size} shape={shape}>
				{typeof icon === "string" ? (
					<Icon name={icon} size={size - 10} color={color} />
				) : (
					icon
				)}
			</Shape>
		</Wrapper>
	);
};

const Shape = styled.span<{
	size?: number;
	shape?: string;
	backgroundColor?: string;
}>`
	width: ${({ size }) => (size ? `${size}` : 24)}px;
	height: ${({ size }) => (size ? `${size}` : 24)}px;
	border-radius: 100%;
	font-size: ${({ size }) => (size ? size / 2 : 14)}px;
	background-color: ${({ backgroundColor }) =>
		backgroundColor ? backgroundColor : COLORS.GREY4};
	${({ shape }) =>
		shape === "square" &&
		css`
			border-radius: 4px;
		`};
	display: inline-flex;
	align-items: center;
	justify-content: center;
`;

const Wrapper = styled.div<{ size: number }>`
	${GlobalStyles};
	display: inline-flex;
	align-items: center;
	justify-content: center;
	color: ${COLORS.GREY1};
	margin-top: 16px;
	margin-right: 16px;
`;

export default Avatar;
