import * as React from "react";
import type { SVGProps } from "react";
const SvgEdit = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={19}
    fill="none"
    {...props}
  >
    <g clipPath="url(#edit_svg__a)">
      <path
        fill="#FEAF00"
        d="M18.303 2.088 16.911.696A2.37 2.37 0 0 0 15.232 0c-.608 0-1.216.232-1.68.695L.476 13.772l-.471 4.239a.89.89 0 0 0 .983.983l4.235-.468 13.08-13.08a2.374 2.374 0 0 0 0-3.358M4.678 17.392l-3.452.383.384-3.457 9.793-9.793 3.072 3.071zM17.464 4.607l-2.15 2.15-3.071-3.072 2.15-2.15a1.18 1.18 0 0 1 .84-.347c.316 0 .614.123.839.347l1.392 1.392a1.19 1.19 0 0 1 0 1.68"
      />
    </g>
    <defs>
      <clipPath id="edit_svg__a">
        <path fill="#fff" d="M0 0h19v19H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgEdit;
