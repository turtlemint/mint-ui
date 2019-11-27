import * as React from "react";
import Icon, { CustomIconProps } from ".";
import COLORS from "../__utils/colors";

const ExpandRight = ({ size = 24, color = COLORS.GREY3 }: CustomIconProps) => {
	return (
		<Icon size={size}>
			<path
				d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
				fill={color}
			/>
		</Icon>
	);
};

export default ExpandRight;
