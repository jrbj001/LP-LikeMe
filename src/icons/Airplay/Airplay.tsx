/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  color: string;
  className: any;
}

export const Airplay = ({
  color = "#0154F8",
  className,
}: Props): JSX.Element => {
  return (
    <svg
      className={`airplay ${className}`}
      fill="none"
      height="75"
      viewBox="0 0 75 75"
      width="75"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M21.0938 42.9688L39.8438 16.4062V32.0312H53.9062L35.9375 58.5938V42.9688H21.0938Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8966"
      />
    </svg>
  );
};

Airplay.propTypes = {
  color: PropTypes.string,
};
