/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: any;
}

export const File = ({ className }: Props): JSX.Element => {
  return (
    <svg
      className={`file ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M12.1716 5.25C12.702 5.25 13.2107 5.46071 13.5858 5.83579L16.6646 8.91456C17.0394 9.28943 17.2501 9.79779 17.2503 10.3279L17.2531 16.7492C17.2535 17.8541 16.358 18.75 15.2531 18.75L8.74998 18.75C7.64541 18.75 6.74998 17.8546 6.74998 16.75L6.74998 7.25C6.74998 6.14543 7.64541 5.25 8.74998 5.25L12.1716 5.25Z"
        stroke="#001137"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
};
