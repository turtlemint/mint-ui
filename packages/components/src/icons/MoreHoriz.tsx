import React, { SVGProps } from "react";

const SvgMoreHoriz = (props: SVGProps<SVGSVGElement>) => (
	<svg width={24} height={24} {...props}>
		<path fill="none" d="M0 0h24v24H0V0z" />
		<path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
	</svg>
);

export default SvgMoreHoriz;
