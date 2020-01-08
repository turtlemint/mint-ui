import React, { SVGProps } from "react";

const SvgTruck = (props: SVGProps<SVGSVGElement>) => (
	<svg width={24} height={24} {...props}>
		<path
			fill="#4D5556"
			fillRule="evenodd"
			d="M18 18.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3m1.5-9l1.96 2.5H17V9.5m-11 9a1.5 1.5 0 110-3 1.5 1.5 0 010 3M20 8h-3V4H3c-1.11 0-2 .89-2 2v11h2a3 3 0 006 0h6a3 3 0 006 0h2v-5l-3-4z"
		/>
	</svg>
);

export default SvgTruck;
