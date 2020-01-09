import React, { SVGProps } from "react";

const SvgEmailOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} {...props}>
    <defs>
      <path
        id="email-outline_svg__a"
        d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm8 7l8-5H4l8 5zm-8 7h16V8.37l-8 4.989L4 8.37V18z"
      />
    </defs>
    <use xlinkHref="#email-outline_svg__a" />
  </svg>
);

export default SvgEmailOutline;
