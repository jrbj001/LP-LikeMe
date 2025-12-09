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

export const Airplay2 = ({
  color = "#EDEC80",
  className,
}: Props): JSX.Element => {
  return (
    <svg
      className={`airplay-2 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M6.75 13.75L12.75 5.25V10.25H17.25L11.5 18.75V13.75H6.75Z"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};

Airplay2.propTypes = {
  color: PropTypes.string,
};
