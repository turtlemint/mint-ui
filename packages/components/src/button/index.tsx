import * as React from "react";
import styled, { css } from "styled-components";
import { tuple } from "../__utils/type";
// import { ICONS } from "../utils/icons";
import "../app.css";
import COLORS from "../__utils/colors";

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
	font-weight: 500;
	font-size: 16px;
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
	background: ${COLORS.PRIMARY};
	border-radius: 4px;
	border: 1px solid transparent;
	color: ${COLORS.WHITE};
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
	touch-action: manipulation;
	&:hover {
		background: ${COLORS.PRIMARY_LIGHT};
	}
	&:active {
		color: ${COLORS.WHITE};
		background: ${COLORS.PRIMARY_DARK};
	}
	&:focus {
		outline: 0;
	}
	${props =>
		props.size === "sm" &&
		css`
			padding: 10px 16px;
		`};

	${props =>
		props.btnType === "danger" &&
		css`
			background: ${COLORS.DANGER};
			color: ${COLORS.WHITE};
			&:hover {
				background: ${COLORS.DANGER_LIGHT};
			}
			&:active {
				background: ${COLORS.DANGER_DARK};
			}
		`};

	${props =>
		props.btnType === "outlined" &&
		css`
			background: none;
			color: ${COLORS.PRIMARY};
			border: 1px solid ${COLORS.PRIMARY};
			&:hover {
				border: 1px solid ${COLORS.PRIMARY_LIGHT};
				background: ${COLORS.BACKGROUND_GREEN};
			}
			&:active {
				background: none;
				border: 1px solid ${COLORS.PRIMARY_DARK};
				color: ${COLORS.PRIMARY_DARK};
			}
		`};

	${props =>
		props.disabled &&
		css`
			color: ${props.btnType === "outlined"
				? COLORS.DISABLED
				: COLORS.WHITE};
			background: ${props.btnType === "outlined"
				? "none"
				: COLORS.DISABLED};
			cursor: no-drop;
			${props.btnType === "outlined" &&
				css`
					border: 1px solid ${COLORS.DISABLED};
				`}
			&:hover {
				color: ${props.btnType === "outlined"
					? COLORS.DISABLED
					: COLORS.WHITE};
				background: ${props.btnType === "outlined"
					? "none"
					: COLORS.DISABLED};
				border: 1px solid
					${props.btnType === "outlined"
						? COLORS.DISABLED
						: "transparent"};
			}
		`};
`;

export const LinkStyles = css<ButtonProps>`
	${BaseButtonStyles};
	text-decoration: none;
	background: none;
	border: 0;
	color: ${COLORS.PRIMARY};
	&:hover {
		background: ${COLORS.BACKGROUND_GREEN};
	}
	&:active {
		color: ${COLORS.PRIMARY_DARK};
		background: ${COLORS.BACKGROUND_GREEN_DARK};
	}
	${props =>
		props.disabled &&
		css`
			color: ${COLORS.DISABLED};
			cursor: no-drop;
			&:hover {
				background: none;
			}
			&:active {
				background: none;
				color: ${COLORS.DISABLED};
			}
		`};
`;

const StyledButton = styled.button<ButtonProps>`
	${ButtonStyles};
`;
const StyledLink = styled.a<ButtonProps>`
	${LinkStyles};
`;

export const Button: React.FC<ButtonProps> = ({
	btnType = "primary",
	size = "sm",
	disabled = false,
	block = false,
	icon = "",
	loading = false,
	className = "",
	prefixCls = "tm-button",
	onClick = function() {},
	href = "#",
	target = "blank",
	htmlType = "button",
	children = <></>,
	...rest
}: ButtonProps) => {
	const handleClick: React.MouseEventHandler<
		HTMLButtonElement | HTMLAnchorElement
	> = e => {
		if (btnType === "link") {
			e.preventDefault();
		}
		onClick(e);
	};
	// const IconComponent = undefined;
	return (
		<>
			{loading ? (
				<StyledButton
					btnType={btnType}
					size={size}
					block={block}
					disabled={disabled}
				>
					Loading...
				</StyledButton>
			) : (
				<>
					{btnType === "link" ? (
						<StyledLink
							href={href}
							target={target}
							disabled={disabled}
							{...rest}
						>
							{children}
						</StyledLink>
					) : (
						<StyledButton
							onClick={handleClick}
							btnType={btnType}
							size={size}
							block={block}
							disabled={disabled}
							type={htmlType}
							className={`${prefixCls}-${className} `}
							{...rest}
						>
							{/* {IconComponent ? (
								<IconComponent
									outlineColor={PALETTE.WHITE}
									size={16}
								/>
							) : null} */}
							<span
								style={{
									verticalAlign: "middle",
									marginLeft: icon ? "8px" : "0px"
								}}
							>
								{children}
							</span>
						</StyledButton>
					)}
				</>
			)}
		</>
	);
};

export default Button;
