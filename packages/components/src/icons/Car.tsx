import React, { SVGProps } from "react";

const SvgCar = (props: SVGProps<SVGSVGElement>) => (
	<svg width={24} height={24} {...props}>
		<path
			fillRule="evenodd"
			d="M6 6l-5 6v3h2a3 3 0 006 0h6a3 3 0 006 0h2v-3.703c0-.822-.316-1.297-1.426-1.297H19l-3-4H6zm.5 1.5h4V10h-6l2-2.5m5.5 0h3.5l1.96 2.5H12V7.5m-6 6a1.5 1.5 0 110 3 1.5 1.5 0 010-3m12 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3z"
		/>
		<path d="M0 0h24v24H0z" fill="none" />
	</svg>
);

export default SvgCar;
