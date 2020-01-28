import React, { SVGProps } from "react";

const SvgArrowDropUp = (props: SVGProps<SVGSVGElement>) => (
	<svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
		<path fill="none" d="M0 0h24v24H0V0z" />
		<path d="M7 14l5-5 5 5H7z" />
	</svg>
);

export default SvgArrowDropUp;
