import React, { SVGProps } from "react";

const SvgArrowDropDown = (props: SVGProps<SVGSVGElement>) => (
	<svg width={24} height={24} {...props}>
		<path fill="none" d="M0 0h24v24H0V0z" />
		<path d="M7 10l5 5 5-5H7z" />
	</svg>
);

export default SvgArrowDropDown;
