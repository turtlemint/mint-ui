import React, { SVGProps } from 'react';

const SvgArrowBack = (props: SVGProps<SVGSVGElement>) => (
	<svg width={24} height={24} {...props}>
		<path
			fill="#4D5556"
			fillRule="evenodd"
			d="M20 11H7.8l5.6-5.6L12 4l-8 8 8 8 1.4-1.4L7.8 13H20z"
		/>
	</svg>
);

export default SvgArrowBack;
