import React, { SVGProps } from "react";

const SvgOutlineDone = (props: SVGProps<SVGSVGElement>) => (
	<svg width={24} height={24} {...props}>
		<path fill="none" d="M0 0h24v24H0V0z" />
		<path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
	</svg>
);

export default SvgOutlineDone;
