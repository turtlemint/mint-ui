import * as React from "react";
import COLORS from "../__utils/colors";
import Icon, { CustomIconProps } from ".";

const Close = ({ size = 18, color = COLORS.GREY3 }: CustomIconProps) => {
	return (
		<Icon size={size}>
			<path
				d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
				fill={color}
			/>
		</Icon>
	);
};

export default Close;
