import React, { SVGProps } from "react";

const SvgSortDown = (props: SVGProps<SVGSVGElement>) => (
	<svg width={18} height={18} {...props}>
		<path
			fill="#00A465"
			fillRule="evenodd"
			d="M10 12c.275 0 .5.338.5.75s-.225.75-.5.75H8c-.275 0-.5-.338-.5-.75S7.725 12 8 12zM4.5 4.5v5.623H6l-2.25 2.25-2.25-2.25H3V4.5h1.5zM13 8.25c.275 0 .5.338.5.75s-.225.75-.5.75H8c-.275 0-.5-.338-.5-.75s.225-.75.5-.75zm3-3.75c.275 0 .5.338.5.75S16.275 6 16 6H8c-.275 0-.5-.338-.5-.75s.225-.75.5-.75z"
		/>
	</svg>
);

export default SvgSortDown;
