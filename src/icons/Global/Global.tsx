/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const Global = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`global ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_115735_3300)">
        <ellipse
          className="ellipse"
          cx="12"
          cy="12"
          rx="2.75"
          ry="7.25"
          stroke="#001137"
          strokeWidth="1.5"
        />

        <path
          className="path"
          d="M4.75 12H19.25"
          stroke="#001137"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />

        <circle
          className="circle"
          cx="12"
          cy="12"
          r="7.25"
          stroke="#001137"
          strokeWidth="1.5"
        />
      </g>

      <defs className="defs">
        <clipPath className="clip-path" id="clip0_115735_3300">
          <rect className="rect" fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </svg>
  );
};
