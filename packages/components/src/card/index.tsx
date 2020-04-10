import * as React from "react";
import styled, { css } from "styled-components";
import COLORS from "../__utils/colors";
import { GlobalStyles } from "../app";

export interface CardProps {
	/** Card title*/
	title?: string;
	/** Size to choose from default and small */
	size?: "default" | "small";
	/** Extra options to be rendered inside header */
	extra?: React.ReactNode;
	boxShadow?: boolean;
	/** When hovered a box shadow will appear */
	hoverable?: boolean;
	/** Custom styles to modfiy the wrapper */
	style?: React.CSSProperties;
	bordered?: boolean;
	/** Header background color. */
	headerBackground?: string;
	children: React.ReactNode | React.ReactNode[];
}

export const Card = ({
	title,
	size = "default",
	extra,
	hoverable = false,
	boxShadow,
	style,
	bordered = true,
	headerBackground,
	children,
	...rest
}: CardProps) => (
	<Wrapper
		hoverable={hoverable}
		boxShadow={boxShadow}
		bordered={bordered}
		style={style}
		{...rest}
	>
		{title ? (
			<Header size={size} headerBackground={headerBackground}>
				<HeadWrapper size={size}>
					<Title size={size}>{title}</Title>
					<Extra size={size}>{extra}</Extra>
				</HeadWrapper>
			</Header>
		) : null}
		<Body size={size}>{children}</Body>
	</Wrapper>
);

const Wrapper = styled.div<CardProps>`
	${GlobalStyles};
	border-radius: 4px;
	animation: 500ms ease 0ms;
	border: 1px solid ${COLORS.GREY4};
	background: ${COLORS.WHITE};
	${({ bordered }) =>
		bordered === false &&
		css`
			background: white;
			border-color: transparent;
		`};
	${({ boxShadow }) =>
		boxShadow &&
		css`
			box-shadow: rgba(102, 143, 211, 0.33) 0px 1px 10px 0px;
		`};
	&:hover {
		${({ hoverable }) =>
			hoverable &&
			css`
				box-shadow: rgba(102, 143, 211, 0.33) 0px 1px 10px 0px;
			`};
	}
`;
const Header = styled.div<CardProps>`
	min-height: ${({ size }) => (size === "small" ? `38px` : `48px`)};
	margin-bottom: -1px;
	padding: ${({ size }) => (size === "small" ? `0 12px` : `0 24px`)};
	color: rgba(0, 0, 0, 0.85);
	background: ${({ headerBackground }) =>
		headerBackground ? `${headerBackground}` : `transparent`};
	border-bottom: 1px solid ${COLORS.GREY4};
	border-radius: 2px 2px 0 0;
`;
const HeadWrapper = styled.div<Pick<CardProps, "size">>`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const Title = styled.div<Pick<CardProps, "size">>`
	padding: ${({ size }) => (size === "small" ? `8px 0` : `16px 0`)};
	font-size: ${({ size }) => (size === "small" ? `14px` : `16px`)};
	font-weight: 500;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
`;
const Extra = styled.div<Pick<CardProps, "size">>`
	padding: ${({ size }) => (size === "small" ? `8px 0` : `16px 0`)};
	a {
		color: ${COLORS.PERSIAN_GREEN};
		font-size: ${({ size }) => (size === "small" ? `12px` : `14px`)};
		font-weight: 400;
		text-decoration: none;
	}
`;

const Body = styled.div<Pick<CardProps, "size">>`
	color: ${COLORS.GREY1};
	padding: ${({ size }) => (size === "small" ? `12px` : `24px`)};
`;

export default Card;
