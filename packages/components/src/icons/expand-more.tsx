import * as React from "react";
import Icon, { CustomIconProps } from ".";
import COLORS from "../__utils/colors";

const ExpandMore = ({ size = 24, color = COLORS.GREY3 }: CustomIconProps) => {
	return (
		<Icon size={size}>
			<path
				d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
				fill={color}
			/>
		</Icon>
	);
};

export default ExpandMore;
