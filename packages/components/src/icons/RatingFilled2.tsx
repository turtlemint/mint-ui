import React, { SVGProps } from "react";

const SvgRatingFilled2 = (props: SVGProps<SVGSVGElement>) => (
	<svg width="1em" height="1em" viewBox="0 0 40 40" {...props}>
		<g fill="none" fillRule="evenodd">
			<path
				fill="#E1511C"
				fillRule="nonzero"
				d="M20 2c9.941 0 18 8.059 18 18s-8.059 18-18 18S2 29.941 2 20 10.059 2 20 2z"
			/>
			<path
				fill="#FE8348"
				fillRule="nonzero"
				d="M20 4C11.163 4 4 11.163 4 20s7.163 16 16 16 16-7.163 16-16S28.837 4 20 4z"
			/>
			<circle
				cx={9.5}
				cy={20.5}
				r={2.5}
				fill="#E1511C"
				fillRule="nonzero"
			/>
			<path
				fill="#E1511C"
				d="M26.689 31.333a.973.973 0 001.217-1.519c-5.214-4.176-10.584-4.176-15.81 0a.973.973 0 101.214 1.52c4.516-3.608 8.876-3.608 13.379-.001z"
			/>
			<circle
				cx={30.5}
				cy={20.5}
				r={2.5}
				fill="#E1511C"
				fillRule="nonzero"
			/>
			<path
				fill="#E1511C"
				d="M20 4c9.082 0 16 7.163 16 16 0 .51-.023 1.014-.068 1.511C35.18 13.373 28.335 7 20 7S4.819 13.373 4.068 21.512A16.688 16.688 0 014 20c0-8.837 6.918-16 16-16z"
				opacity={0.25}
			/>
		</g>
	</svg>
);

export default SvgRatingFilled2;
