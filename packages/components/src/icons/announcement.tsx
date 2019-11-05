import * as React from "react";
import COLORS from "../__utils/colors";
import Icon, { CustomIconProps } from ".";

const Announcement = ({ size = 24, color = COLORS.GREY3 }: CustomIconProps) => {
	return (
		<Icon size={size}>
			<path
				d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12zM11 5h2v6h-2zm0 8h2v2h-2z"
				fill={color}
			/>
		</Icon>
	);
};

export default Announcement;
