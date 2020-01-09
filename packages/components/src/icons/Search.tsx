import React, { SVGProps } from "react";

const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} {...props}>
    <defs>
      <path
        id="search_svg__a"
        d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
      />
    </defs>
    <mask id="search_svg__b" fill="#fff">
      <use xlinkHref="#search_svg__a" />
    </mask>
    <use xlinkHref="#search_svg__a" />
    <g mask="url(#search_svg__b)">
      <path d="M0 0h24v24H0z" />
    </g>
  </svg>
);

export default SvgSearch;
