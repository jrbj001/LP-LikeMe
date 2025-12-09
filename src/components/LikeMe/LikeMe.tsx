/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

interface Props {
  property1: "variant-2" | "default";
  className: any;
  likeMe: string;
}

export const LikeMe = ({
  property1,
  className,
  likeMe = "/img/like-me-19.svg",
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`like-me ${state.property1} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <img
        className="img"
        alt="Like me"
        src={state.property1 === "variant-2" ? "/img/like-me-20.svg" : likeMe}
      />
    </div>
  );
};

function reducer(state: any, action: any) {
  switch (action) {
    case "click":
      return {
        ...state,
        property1: "variant-2",
      };
  }

  return state;
}

LikeMe.propTypes = {
  property1: PropTypes.oneOf(["variant-2", "default"]),
  likeMe: PropTypes.string,
};
