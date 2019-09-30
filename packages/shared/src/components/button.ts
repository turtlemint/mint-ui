import * as React from "react";
import { css } from "styled-components";
import { tuple } from "../utils/type";
import PALETTE from "../utils/colors";

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
	${props =>
		props.block &&
		css`
			width: 100%;
			display: block;
		`}
`;

export const ButtonStyles = css<ButtonProps>`
	${BaseButtonStyles};
	background: ${PALETTE.PRIMARY};
	border-radius: 4px;
	border: 1px solid transparent;
	color: ${PALETTE.WHITE};
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	touch-action: manipulation;
	&:hover {
		background: ${PALETTE.PRIMARY_LIGHT};
	}
	&:active {
		color: ${PALETTE.WHITE};
		background: ${PALETTE.PRIMARY_DARK};
	}
	${props =>
		props.size === "sm" &&
		css`
			padding: 10px 16px;
		`};

	${props =>
		props.btnType === "danger" &&
		css`
			background: ${PALETTE.DANGER};
			color: ${PALETTE.WHITE};
			&:hover {
				background: ${PALETTE.DANGER_LIGHT};
			}
			&:active {
				background: ${PALETTE.DANGER_DARK};
			}
		`};

	${props =>
		props.btnType === "outlined" &&
		css`
			background: none;
			color: ${PALETTE.PRIMARY};
			border: 1px solid ${PALETTE.PRIMARY};
			&:hover {
				border: 1px solid ${PALETTE.PRIMARY_LIGHT};
				background: ${PALETTE.BACKGROUND_GREEN};
			}
			&:active {
				background: none;
				border: 1px solid ${PALETTE.PRIMARY_DARK};
				color: ${PALETTE.PRIMARY_DARK};
			}
		`};

	${props =>
		props.disabled &&
		css`
			color: ${props.btnType === "outlined"
				? PALETTE.DISABLED
				: PALETTE.WHITE};
			background: ${props.btnType === "outlined"
				? "none"
				: PALETTE.DISABLED};
			cursor: no-drop;
			${props.btnType === "outlined" &&
				css`
					border: 1px solid ${PALETTE.DISABLED};
				`}
			&:hover {
				color: ${props.btnType === "outlined"
					? PALETTE.DISABLED
					: PALETTE.WHITE};
				background: ${props.btnType === "outlined"
					? "none"
					: PALETTE.DISABLED};
				border: 1px solid
					${props.btnType === "outlined"
						? PALETTE.DISABLED
						: "transparent"};
			}
		`};
`;

export const LinkStyles = css<ButtonProps>`
	${BaseButtonStyles};
	text-decoration: none;
	background: none;
	border: 0;
	color: ${PALETTE.PRIMARY};
	&:hover {
		background: ${PALETTE.BACKGROUND_GREEN};
	}
	&:active {
		color: ${PALETTE.PRIMARY_DARK};
		background: ${PALETTE.BACKGROUND_GREEN_DARK};
	}
	${props =>
		props.disabled &&
		css`
			color: ${PALETTE.DISABLED};
			cursor: no-drop;
			&:hover {
				background: none;
			}
			&:active {
				background: none;
				color: ${PALETTE.DISABLED};
			}
		`};
`;
