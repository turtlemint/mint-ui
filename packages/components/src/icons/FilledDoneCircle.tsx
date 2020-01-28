import React, { SVGProps } from "react";

const SvgFilledDoneCircle = (props: SVGProps<SVGSVGElement>) => (
	<svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
		<defs>
			<path
				id="filled_done_circle_svg__a"
				d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zM9 14.502l7-7-1.414-1.414L9 11.674 5.914 8.588 4.5 10.002l4.5 4.5z"
			/>
		</defs>
		<use
			fillRule="evenodd"
			transform="translate(2 2)"
			xlinkHref="#filled_done_circle_svg__a"
		/>
	</svg>
);

export default SvgFilledDoneCircle;
