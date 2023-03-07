import React from "react";
import "./index.scss";

const Tall = (props) => {
  return (
		<div className="d-flex flex-column card-gap">
      <div className="d-flex justify-content-center card-gap">
        <div className="card" onClick={() => props.setTall(0)}>
          <div className="card-img"></div>
          <div className="card-title">8 FT</div>
        </div>
        <div className="card" onClick={() => props.setTall(1)}>
          <div className="card-img"></div>
          <div className="card-title">9 FT</div>
        </div>
        <div className="card" onClick={() => props.setTall(2)}>
          <div className="card-img"></div>
          <div className="card-title">10 FT</div>
        </div>
      </div>
    </div>
  );
};

export default Tall;