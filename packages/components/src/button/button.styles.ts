import * as React from "react";
import { css } from "styled-components";
import { Colors } from "@turtlemint/core";
import { tuple } from "../__utils/type";

const ButtonTypes = tuple("outlined", "primary", "danger", "link");
export type ButtonType = (typeof ButtonTypes)[number];
const ButtonSizes = tuple("sm", "md");
export type ButtonSize = (typeof ButtonSizes)[number];
const ButtonHTMLTypes = tuple("submit", "button", "reset");
export type ButtonHTMLType = (typeof ButtonHTMLTypes)[number];

export interface BaseButtonProps {
	btnType?: ButtonType;
	disabled?: boolean;
	size?: ButtonSize;
	block?: boolean;
	loading?: boolean | { delay?: number };
	icon?: string;
	className?: string;
	prefixCls?: string;
	children?: React.ReactNode;
}
export type AnchorButtonProps = {
	href: string;
	target?: string;
	onClick?: React.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
	Omit<React.AnchorHTMLAttributes<unknown>, "type" | "onClick">;

export type NativeButtonProps = {
	onClick: React.MouseEventHandler<HTMLElement>;
	htmlType?: ButtonHTMLType;
} & BaseButtonProps &
	Omit<React.ButtonHTMLAttributes<unknown>, "type" | "onClick">;

export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>;

const BaseButtonStyles = css<ButtonProps>`
	font-size: 16px;
	font-weight: 500;
	cursor: pointer;
	text-align: center;
	line-height: 1.25;
	padding: 14px 24px;
	display: inline-block;
	box-sizing: border-box;
	${props =>
		props.block &&
		css`
			width: 100%;
			display: block;
		`}
`;

export const ButtonStyles = css<ButtonProps>`
	${BaseButtonStyles};
	background: ${Colors.PRIMARY};
	border-radius: 4px;
	border: 1px solid transparent;
	color: ${Colors.WHITE};
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	touch-action: manipulation;
	&:hover {
		background: ${Colors.PRIMARY_LIGHT};
	}
	&:active {
		color: ${Colors.WHITE};
		background: ${Colors.PRIMARY_DARK};
	}
	${props =>
		props.size === "sm" &&
		css`
			padding: 10px 16px;
		`};

	${props =>
		props.btnType === "danger" &&
		css`
			background: ${Colors.DANGER};
			color: ${Colors.WHITE};
			&:hover {
				background: ${Colors.DANGER_LIGHT};
			}
			&:active {
				background: ${Colors.DANGER_DARK};
			}
		`};

	${props =>
		props.btnType === "outlined" &&
		css`
			background: none;
			color: ${Colors.PRIMARY};
			border: 1px solid ${Colors.PRIMARY};
			&:hover {
				border: 1px solid ${Colors.PRIMARY_LIGHT};
				background: ${Colors.BACKGROUND_GREEN};
			}
			&:active {
				background: none;
				border: 1px solid ${Colors.PRIMARY_DARK};
				color: ${Colors.PRIMARY_DARK};
			}
		`};

	${props =>
		props.disabled &&
		css`
			color: ${props.btnType === "outlined"
				? Colors.DISABLED
				: Colors.WHITE};
			background: ${props.btnType === "outlined"
				? "none"
				: Colors.DISABLED};
			cursor: no-drop;
			${props.btnType === "outlined" &&
				css`
					border: 1px solid ${Colors.DISABLED};
				`}
			&:hover {
				color: ${props.btnType === "outlined"
					? Colors.DISABLED
					: Colors.WHITE};
				background: ${props.btnType === "outlined"
					? "none"
					: Colors.DISABLED};
				border: 1px solid
					${props.btnType === "outlined"
						? Colors.DISABLED
						: "transparent"};
			}
		`};
`;

export const LinkStyles = css<ButtonProps>`
	${BaseButtonStyles};
	text-decoration: none;
	background: none;
	border: 0;
	color: ${Colors.PRIMARY};
	&:hover {
		background: ${Colors.BACKGROUND_GREEN};
	}
	&:active {
		color: ${Colors.PRIMARY_DARK};
		background: ${Colors.BACKGROUND_GREEN_DARK};
	}
	${props =>
		props.disabled &&
		css`
			color: ${Colors.DISABLED};
			cursor: no-drop;
			&:hover {
				background: none;
			}
			&:active {
				background: none;
				color: ${Colors.DISABLED};
			}
		`};
`;
