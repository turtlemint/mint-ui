import React, { SVGProps } from "react";

const SvgDone = (props: SVGProps<SVGSVGElement>) => (
	<svg width={24} height={24} {...props}>
		<defs>
			<path
				id="done_svg__a"
				d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zM9 14.502l7-7-1.414-1.414L9 11.674 5.914 8.588 4.5 10.002l4.5 4.5z"
			/>
		</defs>
		<use
			fill="#00A465"
			fillRule="evenodd"
			transform="translate(2 2)"
			xlinkHref="#done_svg__a"
		/>
	</svg>
);

export default SvgDone;
