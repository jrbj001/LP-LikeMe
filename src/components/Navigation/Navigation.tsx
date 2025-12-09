/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Airplay2 } from "../../icons/Airplay2";
import { FileWrapper } from "../FileWrapper";
import "./style.css";

interface Props {
  state: "selected";
  mode: "dark" | "light";
  sizes: "large";
  type: "file" | "activity";
  className: any;
  icon: JSX.Element;
}

export const Navigation = ({
  state,
  mode,
  sizes,
  type,
  className,
  icon = <Airplay2 className="airplay-2" color="#EDEC80" />,
}: Props): JSX.Element => {
  return (
    <div className={`navigation type-${type} ${mode} ${className}`}>
      {type === "activity" && <>{icon}</>}

      {mode === "dark" && (
        <div className="file-wrapper">
          <FileWrapper />
        </div>
      )}
    </div>
  );
};

Navigation.propTypes = {
  state: PropTypes.oneOf(["selected"]),
  mode: PropTypes.oneOf(["dark", "light"]),
  sizes: PropTypes.oneOf(["large"]),
  type: PropTypes.oneOf(["file", "activity"]),
};
