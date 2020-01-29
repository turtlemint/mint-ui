import React, { SVGProps } from "react";

const SvgRatingFilled3 = (props: SVGProps<SVGSVGElement>) => (
	<svg width="1em" height="1em" viewBox="0 0 40 40" {...props}>
		<g fill="none" fillRule="evenodd">
			<path
				fill="#ED892E"
				fillRule="nonzero"
				d="M20 2c9.941 0 18 8.059 18 18s-8.059 18-18 18S2 29.941 2 20 10.059 2 20 2z"
			/>
			<path
				fill="#F9CA0F"
				fillRule="nonzero"
				d="M20 4C11.163 4 4 11.163 4 20s7.163 16 16 16 16-7.163 16-16S28.837 4 20 4z"
			/>
			<circle
				cx={9.5}
				cy={20.5}
				r={2.5}
				fill="#ED892E"
				fillRule="nonzero"
			/>
			<circle
				cx={30.5}
				cy={20.5}
				r={2.5}
				fill="#ED892E"
				fillRule="nonzero"
			/>
			<path
				fill="#F5B917"
				d="M20 4c9.082 0 16 7.163 16 16 0 .51-.023 1.014-.068 1.511C35.18 13.373 28.335 7 20 7S4.819 13.373 4.068 21.512A16.688 16.688 0 014 20c0-8.837 6.918-16 16-16z"
			/>
			<path
				fill="#ED892E"
				fillRule="nonzero"
				d="M27.703 27.446a1.027 1.027 0 01.112 2.048l-.112.006h-15.92a1.027 1.027 0 01-.111-2.048l.112-.006h15.919z"
			/>
		</g>
	</svg>
);

export default SvgRatingFilled3;
