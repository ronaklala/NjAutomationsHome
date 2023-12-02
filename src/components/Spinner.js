import React from "react";
import "./css/spinner.css";

const Spinner = (props) => {
  return (
    <>
      <div className={"lds-ring " + props.class}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default Spinner;
