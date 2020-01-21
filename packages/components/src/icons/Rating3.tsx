import React, { SVGProps } from "react";

const SvgRating3 = (props: SVGProps<SVGSVGElement>) => (
	<svg width="1em" height="1em" viewBox="0 0 40 40" {...props}>
		<g fill="none" fillRule="evenodd" transform="translate(1 1)">
			<circle
				cx={19}
				cy={19}
				r={19}
				stroke="#A1A6A7"
				strokeWidth={1.541}
			/>
			<circle cx={8.216} cy={19} r={2.568} fill="#A1A6A7" />
			<path
				stroke="#A1A6A7"
				strokeLinecap="round"
				strokeWidth={2.054}
				d="M11.297 30.16c5.142-4.107 10.277-4.107 15.406 0"
			/>
			<circle cx={29.784} cy={19} r={2.568} fill="#A1A6A7" />
		</g>
	</svg>
);

export default SvgRating3;
