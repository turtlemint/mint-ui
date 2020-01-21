import React, { SVGProps } from "react";

const SvgFastRewind = (props: SVGProps<SVGSVGElement>) => (
	<svg width={24} height={24} {...props}>
		<path d="M11 18V6l-8.5 6 8.5 6zm.5-6l8.5 6V6l-8.5 6z" />
		<path d="M0 0h24v24H0z" fill="none" />
	</svg>
);

export default SvgFastRewind;
