import * as React from "react";
import { IconProps } from ".";
import { Colors } from "@turtlemint/core";

const ExpandMore = ({ size = "24", color = Colors.GREY3 }: IconProps) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			viewBox="0 0 24 24"
		>
			<path
				d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
				fill={color}
			/>
			<path d="M0 0h24v24H0z" fill="none" />
		</svg>
	);
};

export default ExpandMore;
