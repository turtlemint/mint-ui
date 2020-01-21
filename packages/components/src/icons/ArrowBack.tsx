import React, { SVGProps } from "react";

const SvgArrowBack = (props: SVGProps<SVGSVGElement>) => (
	<svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="M20 11H7.8l5.6-5.6L12 4l-8 8 8 8 1.4-1.4L7.8 13H20z"
		/>
		<path d="M0 0h24v24H0z" fill="none" />
	</svg>
);

export default SvgArrowBack;
