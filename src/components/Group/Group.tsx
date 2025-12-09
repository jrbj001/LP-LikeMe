/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  property1: "variant-2" | "default";
  className: any;
}

export const Group = ({ property1, className }: Props): JSX.Element => {
  return (
    <div className={`group property-1-0-${property1} ${className}`}>
      <img className="like-me-5" alt="Like me" src="/img/like-me-9.svg" />

      <img className="like-me-6" alt="Like me" src="/img/like-me-9.svg" />

      <img
        className="like-me-7"
        alt="Like me"
        src={
          property1 === "variant-2"
            ? "/img/like-me-9.svg"
            : "/img/like-me-10.svg"
        }
      />

      <img className="like-me-8" alt="Like me" src="/img/like-me-9.svg" />

      <img
        className="like-me-9"
        alt="Like me"
        src={
          property1 === "variant-2"
            ? "/img/like-me-10.svg"
            : "/img/like-me-9.svg"
        }
      />
    </div>
  );
};

Group.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
};
