/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const SocialIcons = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`social-icons ${className}`}
      fill="none"
      height="17"
      viewBox="0 0 17 17"
      width="17"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="g" clipPath="url(#clip0_115797_14560)">
        <path
          className="path"
          d="M12.5282 1.30176H14.8343L9.79604 7.06021L15.7232 14.8962H11.0823L7.44734 10.1437L3.28814 14.8962H0.980579L6.36955 8.73686L0.683594 1.30176H5.44234L8.728 5.6457L12.5282 1.30176ZM11.7188 13.5158H12.9966L4.74798 2.60961H3.37668L11.7188 13.5158Z"
          fill="#001137"
        />
      </g>

      <defs className="defs">
        <clipPath className="clip-path" id="clip0_115797_14560">
          <rect
            className="rect"
            fill="white"
            height="16.4068"
            width="16.4068"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
