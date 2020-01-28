import React, { SVGProps } from "react";

const SvgFastForward = (props: SVGProps<SVGSVGElement>) => (
	<svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
		<path d="M4 18l8.5-6L4 6v12zm9-12v12l8.5-6L13 6z" />
		<path d="M0 0h24v24H0z" fill="none" />
	</svg>
);

export default SvgFastForward;
