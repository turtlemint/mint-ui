import React, { SVGProps } from "react";

const SvgArrowDropUp = (props: SVGProps<SVGSVGElement>) => (
	<svg width={24} height={24} {...props}>
		<path fill="none" d="M0 0h24v24H0V0z" />
		<path d="M7 14l5-5 5 5H7z" />
	</svg>
);

export default SvgArrowDropUp;
