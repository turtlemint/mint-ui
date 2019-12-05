import React, { SVGProps } from "react";

const SvgOutlineSort = (props: SVGProps<SVGSVGElement>) => (
	<svg width={24} height={24} {...props}>
		<path fill="none" d="M0 0h24v24H0V0z" />
		<path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z" />
	</svg>
);

export default SvgOutlineSort;
