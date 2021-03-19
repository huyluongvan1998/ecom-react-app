import React from "react";
import "./style.css";
import { SpinnerContainer } from "./style";
const Spinner = () => {
  return (
    <SpinnerContainer>
      <div className="wrapper">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <div className="shadow"></div>
        <span>Loading</span>
      </div>
    </SpinnerContainer>
  );
};

export default Spinner;
