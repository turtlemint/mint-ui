import * as React from "react";
import COLORS from "../__utils/colors";
import Icon, { CustomIconProps } from ".";

const CheckCircle = ({ size = 24, color = COLORS.GREY3 }: CustomIconProps) => {
	return (
		<Icon size={size}>
			<path
				fill={color}
				d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"
			/>
		</Icon>
	);
};

export default CheckCircle;
