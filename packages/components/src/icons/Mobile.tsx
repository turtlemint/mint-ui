import React, { SVGProps } from "react";

const SvgMobile = (props: SVGProps<SVGSVGElement>) => (
	<svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
		<path
			fillRule="evenodd"
			d="M16.667 1C17.955 1 19 2.173 19 3.619v16.762C19 21.827 17.955 23 16.667 23H7.333C6.045 23 5 21.827 5 20.381V3.619C5 2.173 6.045 1 7.333 1h9.334zM14.5 20h-5a.5.5 0 000 1h5a.5.5 0 000-1z"
		/>
	</svg>
);

export default SvgMobile;
