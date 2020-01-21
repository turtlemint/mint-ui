import React, { SVGProps } from "react";

const SvgRatingFilled4 = (props: SVGProps<SVGSVGElement>) => (
	<svg width="1em" height="1em" viewBox="0 0 40 40" {...props}>
		<g fill="none" fillRule="evenodd" transform="translate(1 1)">
			<path
				fill="#70AA4B"
				fillRule="nonzero"
				d="M19-.77C8.081-.77-.77 8.08-.77 19c0 10.919 8.85 19.77 19.77 19.77 10.919 0 19.77-8.851 19.77-19.77C38.77 8.081 29.92-.77 19-.77z"
			/>
			<path
				fill="#9FD774"
				fillRule="nonzero"
				d="M19 .77C29.068.77 37.23 8.932 37.23 19S29.068 37.23 19 37.23.77 29.068.77 19 8.932.77 19 .77z"
			/>
			<path
				fill="#70AA4B"
				fillRule="nonzero"
				d="M26.06 26.792a1.027 1.027 0 111.285 1.603c-5.504 4.408-11.172 4.408-16.689 0a1.027 1.027 0 011.282-1.604c4.767 3.808 9.37 3.808 14.123 0z"
			/>
			<path
				fill="#70AA4B"
				d="M19 .514c10.214 0 18.059 7.95 18.47 17.92C35.456 10.214 27.95 4.108 19 4.108S2.544 10.214.53 18.434C.942 8.464 8.787.514 19 .514z"
				opacity={0.25}
			/>
			<circle cx={8.216} cy={19} r={2.568} fill="#70AA4B" />
			<circle cx={29.784} cy={19} r={2.568} fill="#70AA4B" />
		</g>
	</svg>
);

export default SvgRatingFilled4;
