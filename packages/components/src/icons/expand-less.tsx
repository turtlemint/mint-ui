import * as React from "react";
import { IconProps } from ".";
import COLORS from "../__utils/colors";

const ExpandLess = ({ size = 24, color = COLORS.GREY3 }: IconProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
		>
			<path
				d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
				fill={color}
			/>
			<path d="M0 0h24v24H0z" fill="none" />
		</svg>
	);
};

export default ExpandLess;
