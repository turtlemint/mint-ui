import React from "react";
import { StyledButton, StyledLink } from "./styles";
import { Omit, tuple } from "../__utils/type";
import { ICONS } from "../__utils/icons";
import PALETTE from "../__utils/colors";

const ButtonTypes = tuple("outlined", "primary", "danger", "link");
export type ButtonType = (typeof ButtonTypes)[number];
const ButtonSizes = tuple("sm", "md");
export type ButtonSize = (typeof ButtonSizes)[number];
const ButtonHTMLTypes = tuple("submit", "button", "reset");
export type ButtonHTMLType = (typeof ButtonHTMLTypes)[number];

export interface IBaseButtonProps {
	btnType?: ButtonType;
	disabled?: boolean;
	size?: ButtonSize;
	block?: boolean;
	loading?: boolean | { delay?: number };
	icon?: string;
	className?: string;
	prefixCls?: string;
	children: React.ReactNode;
}

export type AnchorButtonProps = {
	href: string;
	target?: string;
	onClick?: React.MouseEventHandler<HTMLElement>;
} & IBaseButtonProps &
	Omit<React.AnchorHTMLAttributes<unknown>, "type" | "onClick">;

export type NativeButtonProps = {
	onClick: React.MouseEventHandler<HTMLElement>;
	htmlType?: ButtonHTMLType;
} & IBaseButtonProps &
	Omit<React.ButtonHTMLAttributes<unknown>, "type" | "onClick">;

export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>;

const Button: React.FC<ButtonProps> = ({
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
	const IconComponent = ICONS[icon];
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
							className={`${prefixCls}-${className}`}
							{...rest}
						>
							{IconComponent ? (
								<IconComponent
									outlineColor={PALETTE.WHITE}
									size={16}
								/>
							) : null}
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
