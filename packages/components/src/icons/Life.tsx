import React, { SVGProps } from "react";

const SvgLife = (props: SVGProps<SVGSVGElement>) => (
	<svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="M12 1a1 1 0 011 1v1l-.002.055A9.001 9.001 0 0121 12h-8v8a3 3 0 01-6 0v-1h2v1a1 1 0 002 0v-8H3a9.001 9.001 0 018.003-8.945A.348.348 0 0111 3V2a1 1 0 011-1z"
		/>
		<path d="M0 0h24v24H0z" fill="none" />
	</svg>
);

export default SvgLife;
