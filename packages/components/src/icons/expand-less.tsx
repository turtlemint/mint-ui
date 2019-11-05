import * as React from "react";
import Icon, { CustomIconProps } from ".";
import COLORS from "../__utils/colors";

const ExpandLess = ({ size = 24, color = COLORS.GREY3 }: CustomIconProps) => {
	return (
		<Icon size={size}>
			<path
				d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
				fill={color}
			/>
		</Icon>
	);
};

export default ExpandLess;
