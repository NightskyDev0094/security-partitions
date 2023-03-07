import React from "react";
import "./index.scss";

const Ceil = (props) => {
  return (
		<div className="d-flex flex-column card-gap">
      <div className="d-flex justify-content-center card-gap">
        <div className="card" onClick={() => props.setCeiling(true)}>
          <div className="card-img"></div>
          <div className="card-title">YES</div>
        </div>
        <div className="card" onClick={() => props.setCeiling(false)}>
          <div className="card-img"></div>
          <div className="card-title">NO</div>
        </div>
      </div>
    </div>
  );
};

export default Ceil;