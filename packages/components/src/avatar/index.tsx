import * as React from "react";
import { tuple } from "../__utils/type";
import styled, { css } from "styled-components";
import Icon from "../icon";
import COLORS from "../__utils/colors";

const ShapeTuple = tuple("circle", "square");
type ShapeType = typeof ShapeTuple[number];

interface AvatarProps {
	icon?: string | React.ReactNode;
	shape?: ShapeType;
	size?: number;
	color?: string;
	style?: React.CSSProperties;
}

export const Avatar = ({
	icon,
	shape,
	size = 24,
	color,
	style
}: AvatarProps) => {
	return (
		<Wrapper size={size} shape={shape} style={style}>
			{typeof icon === "string" ? (
				<Icon name={icon} size={size - 10} color={color} />
			) : (
				icon
			)}
		</Wrapper>
	);
};

const Wrapper = styled.div<{ size: number; shape: ShapeType | undefined }>`
	width: ${({ size }) => (size ? `${size}px` : "24px")};
	height: ${({ size }) => (size ? `${size}px` : "24px")};
	line-height: ${({ size }) => (size ? `${size}px` : "1.5")};
	font-size: ${({ size }) => (size ? size / 2 : "14px")};
	border-radius: 50%;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	margin: 0;
	padding: 0;
	list-style: none;
	position: relative;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	color: ${COLORS.GREY1};
	white-space: nowrap;
	background-color: ${COLORS.GREY4};
	margin-top: 16px;
	margin-right: 16px;
	${({ shape }) =>
		shape === "square" &&
		css`
			border-radius: 4px;
		`};
`;

export default Avatar;
