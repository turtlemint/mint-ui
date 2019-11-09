import * as React from "react";
import { IconProps } from ".";
export interface IconProps {
	size?: number;
	children?: React.ReactNode;
}
export interface CustomIconProps {
	color?: string;
	size?: number;
}

const Icon = ({ size = 24, children }: IconProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
		>
			{children}
			<path d="M0 0h24v24H0z" fill="none" />
		</svg>
	);
};

export default Icon;
