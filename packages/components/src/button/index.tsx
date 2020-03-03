import * as React from "react";
import PropTypes from "prop-types";

import styled, { css } from "styled-components";
import { tuple } from "../__utils/type";
import COLORS from "../__utils/colors";
import { transparentize } from "polished";
import { GlobalStyles } from "../app";
import Icon from "../icon";

const ButtonTypeTuple = tuple("outlined", "solid", "link");
export type ButtonType = typeof ButtonTypeTuple[number];
const ButtonStyleTuple = tuple("default", "primary", "danger");
export type ButtonStyle = typeof ButtonStyleTuple[number];
const ButtonSizeTuple = tuple("small", "default", "large");
export type ButtonSize = typeof ButtonSizeTuple[number];
const ButtonHTMLTypes = tuple("submit", "button", "reset");
export type ButtonHTMLType = typeof ButtonHTMLTypes[number];

export interface BaseButtonProps {
	/** Display type of button from "outlined", "solid", "link"  */
	btnType?: ButtonType;
	/** Display style of button from "default", "primary", "danger" */
	btnStyle?: ButtonStyle;
	disabled?: boolean;
	/** Size options - "small", "default", "large" */
	size?: ButtonSize;
	/** Text of the button to display */
	title?: string;
	/** Loading state of the button*/
	loading?: boolean;
	/** Icon name or component to be displayed */
	icon?: any;
	/** Set the button to full width with block={true} */
	block?: boolean;
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

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
	const { btnType, loading } = props;

	return loading ? (
		<ButtonDefault btnType={btnType} disabled>
			Loading...
		</ButtonDefault>
	) : btnType ? (
		getButtonType(props, btnType)
	) : null;
};

const getButtonType = (props: ButtonProps, type: string | undefined) => {
	const {
		btnType = "outlined",
		btnStyle = "default",
		icon,
		title,
		onClick = function() {},
		href = "#",
		target = "blank",
		htmlType = "button",
		...rest
	} = props;

	const handleClick: React.MouseEventHandler<
		HTMLButtonElement | HTMLAnchorElement
	> = e => {
		if (btnType !== "link") {
			onClick(e);
		}
	};
	switch (type) {
		case "solid":
			return (
				<ButtonSolid
					onClick={handleClick}
					btnType={btnType}
					btnStyle={btnStyle}
					type={htmlType}
					{...rest}
				>
					{icon ? getIcon(icon, btnStyle, btnType, rest) : null}
					{getTitle(icon, title)}
				</ButtonSolid>
			);
		case "link":
			return (
				<Link
					href={href}
					target={target}
					btnStyle={btnStyle}
					onClick={handleClick}
					{...rest}
				>
					{icon ? getIcon(icon, btnStyle, btnType, rest) : null}
					{getTitle(icon, title)}
				</Link>
			);
		default:
			return (
				<ButtonDefault
					onClick={handleClick}
					btnType={btnType}
					btnStyle={btnStyle}
					type={htmlType}
					{...rest}
				>
					{icon ? getIcon(icon, btnStyle, btnType, rest) : null}
					{getTitle(icon, title)}
				</ButtonDefault>
			);
	}
};

const getIcon = (icon: string, style: string, btnType: string, rest: any) => {
	const { size } = rest;
	let dimensions = 16;
	if (size === "large") {
		dimensions = 18;
	} else if (size === "small") {
		dimensions = 14;
	}

	if (btnType === "outlined" || btnType === "link") {
		switch (style) {
			case "primary":
				return (
					<Icon
						name={icon}
						color={COLORS.PRIMARY}
						size={dimensions}
					/>
				);
			case "danger":
				return (
					<Icon name={icon} color={COLORS.DANGER} size={dimensions} />
				);
			default:
				return (
					<Icon name={icon} color={COLORS.GREY2} size={dimensions} />
				);
		}
	}
	return <Icon name={icon} color={COLORS.WHITE} size={dimensions} />;
};
const getTitle = (icon: string, title?: string) => (
	<span style={{ marginLeft: icon && title ? "7px" : "0px" }}>{title}</span>
);

const BaseButton = css<ButtonProps>`
	${GlobalStyles};
	cursor: pointer;
	padding: 12px 15px;
	display: inline-flex;
	align-items: flex-end;
	justify-content: center;
	border-radius: 4px;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	touch-action: manipulation;
	font-size: 16px;
	line-height: 16px;
	min-height: 40px;
	transition: color 0.3s ease-in;
	&:focus {
		outline: 0;
	}
	${({ block }) =>
		block &&
		css`
			min-width: 100%;
		`};
	${({ disabled }) =>
		disabled &&
		css`
			pointer-events: none;
		`}
	${({ size }) =>
		size === "small" &&
		css`
			font-size: 14px;
			line-height: 14px;
			min-height: 36px;
			padding: 8px 15px;
		`};
	${({ size }) =>
		size === "large" &&
		css`
			font-size: 18px;
			line-height: 18px;
			min-height: 48px;
			padding: 14px 15px;
		`};
`;

export const ButtonDefault = styled.button<ButtonProps>`
	${BaseButton};
	color: ${COLORS.GREY1};
	border: 1px solid ${COLORS.GREY4};
	background-color: transparent;
	&:hover {
		background-color: ${COLORS.BACKGROUND_GREY};
	}
	&:active {
		color: ${COLORS.BLACK};
		border-color: ${COLORS.GREY3};
	}
	${({ btnStyle }) =>
		btnStyle === "primary" &&
		css`
			color: ${COLORS.PRIMARY};
			border-color: ${COLORS.PRIMARY};
			&:hover {
				color: ${COLORS.PRIMARY_LIGHT};
				border-color: ${COLORS.PRIMARY_LIGHT};
				background-color: ${transparentize(0.9, COLORS.PRIMARY_LIGHT)};
			}
			&:active {
				color: ${COLORS.PRIMARY_DARK};
				border-color: ${COLORS.PRIMARY_DARK};
			}
		`};
	${({ btnStyle }) =>
		btnStyle === "danger" &&
		css`
			border-color: ${COLORS.DANGER};
			color: ${COLORS.DANGER};
			&:hover {
				color: ${COLORS.DANGER_LIGHT};
				border-color: ${COLORS.DANGER_LIGHT};
				background-color: ${transparentize(0.9, COLORS.DANGER_LIGHT)};
			}
			&:active {
				color: ${COLORS.DANGER_DARK};
				border-color: ${COLORS.DANGER_DARK};
			}
		`};

	${({ disabled }) =>
		disabled &&
		css`
			color: ${COLORS.DISABLED};
			border-color: ${COLORS.DISABLED};
		`};
`;

const ButtonSolid = styled.button<ButtonProps>`
	${BaseButton};
	color: ${COLORS.WHITE};
	border: 1px solid transparent;
	background-color: ${COLORS.GREY3};
	&:hover {
		background-color: ${transparentize(0.3, COLORS.GREY3)};
	}
	&:active {
		background-color: ${COLORS.GREY2};
	}
	${({ btnStyle }) =>
		btnStyle === "primary" &&
		css`
			background-color: ${COLORS.PRIMARY};
			&:hover {
				background-color: ${transparentize(0.2, COLORS.PRIMARY)};
			}
			&:active {
				background-color: ${COLORS.PRIMARY_DARK};
			}
		`};
	${({ btnStyle }) =>
		btnStyle === "danger" &&
		css`
			background-color: ${COLORS.DANGER};
			&:hover {
				background-color: ${transparentize(0.2, COLORS.DANGER)};
			}
			&:active {
				background-color: ${COLORS.DANGER_DARK};
			}
		`};

	${({ disabled }) =>
		disabled &&
		css`
			background-color: ${COLORS.DISABLED};
		`};
`;

export const Link = styled.a<ButtonProps>`
	${BaseButton};
	display: inline-flex;
	align-items: center;
	text-decoration: none;
	background: none;
	border: 0;
	color: ${COLORS.GREY1};
	&:hover {
		background: ${COLORS.BACKGROUND_GREY};
	}
	&:active {
		color: ${COLORS.BLACK};
	}
	${({ disabled }) =>
		disabled &&
		css`
			color: ${COLORS.DISABLED};
		`};

	${({ btnStyle }) =>
		btnStyle === "primary" &&
		css`
			color: ${COLORS.PRIMARY};
			&:hover {
				color: ${COLORS.PRIMARY_LIGHT};
				background: ${transparentize(0.9, COLORS.PRIMARY)};
			}
			&:active {
				color: ${COLORS.PRIMARY_LIGHT};
			}
		`}
	${({ btnStyle }) =>
		btnStyle === "danger" &&
		css`
			color: ${COLORS.DANGER};
			&:hover {
				color: ${COLORS.DANGER_LIGHT};
				background: ${transparentize(0.9, COLORS.DANGER)};
			}
			&:active {
				color: ${COLORS.DANGER_DARK};
			}
		`}
`;

Button.propTypes = {
	/** Display type of button from "outlined", "solid", "link"  */
	btnType: PropTypes.oneOf(["outlined", "solid", "link"]),
	/** Display style of button from "default", "primary", "danger" */
	btnStyle: PropTypes.oneOf(["default", "primary", "danger"]),
	disabled: PropTypes.bool,
	/** Size options - "small", "default", "large" */
	size: PropTypes.oneOf(["small", "default", "large"]),
	/** Text of the button to display */
	title: PropTypes.string,
	/** Loading state of the button -*/
	loading: PropTypes.bool,
	/** Icon name or component to be displayed */
	icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
	/** Set the button to full width with block={true} */
	block: PropTypes.bool
};
Button.defaultProps = {
	btnType: "outlined",
	btnStyle: "default",
	disabled: false,
	size: "default",
	loading: false,
	block: false
};
export default Button;
