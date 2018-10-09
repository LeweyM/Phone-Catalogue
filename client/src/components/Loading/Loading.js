import "./_style.scss";
import React from "react";

const Loading = props => {
  return (
    <div className="loading-wrapper">
      <div className="lds-ring">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};
export default Loading;
