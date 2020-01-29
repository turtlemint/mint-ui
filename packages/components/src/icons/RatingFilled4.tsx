import React, { SVGProps } from "react";

const SvgRatingFilled4 = (props: SVGProps<SVGSVGElement>) => (
	<svg width="1em" height="1em" viewBox="0 0 40 40" {...props}>
		<g fill="none" fillRule="evenodd">
			<path
				fill="#70AA4B"
				fillRule="nonzero"
				d="M20 2c9.941 0 18 8.059 18 18s-8.059 18-18 18S2 29.941 2 20 10.059 2 20 2z"
			/>
			<path
				fill="#9FD774"
				fillRule="nonzero"
				d="M20 4C11.163 4 4 11.163 4 20s7.163 16 16 16 16-7.163 16-16S28.837 4 20 4z"
			/>
			<circle
				cx={9.5}
				cy={20.5}
				r={2.5}
				fill="#70AA4B"
				fillRule="nonzero"
			/>
			<circle
				cx={30.5}
				cy={20.5}
				r={2.5}
				fill="#70AA4B"
				fillRule="nonzero"
			/>
			<path
				fill="#93CC69"
				d="M20 4c9.082 0 16 7.163 16 16 0 .51-.023 1.014-.068 1.511C35.18 13.373 28.335 7 20 7S4.819 13.373 4.068 21.512A16.688 16.688 0 014 20c0-8.837 6.918-16 16-16z"
			/>
			<path
				fill="#70AA4B"
				fillRule="nonzero"
				d="M26.689 27.382a.973.973 0 111.217 1.518c-5.214 4.177-10.584 4.177-15.81.001a.973.973 0 011.214-1.52c4.516 3.608 8.876 3.608 13.379 0z"
			/>
		</g>
	</svg>
);

export default SvgRatingFilled4;
