import * as React from "react";
import COLORS from "../__utils/colors";
import Icon, { CustomIconProps } from ".";

const Warning = ({ size = 24, color = COLORS.GREY3 }: CustomIconProps) => {
	return (
		<Icon size={size}>
			<path
				fill={color}
				d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
			/>
		</Icon>
	);
};

export default Warning;
