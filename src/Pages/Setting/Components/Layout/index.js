import React from "react";
import "./index.scss";

const Layout = (props) => {
  return (
		<div className="layout d-flex flex-column card-gap">
      <div className="d-flex justify-content-center card-gap">
        <div className="card" onClick={() => props.setLayout(0)}>
          <div className="card-img">
            <div></div>
          </div>
          <div className="card-title">SINGLE WALL</div>
        </div>
        <div className="card" onClick={() => props.setLayout(1)}>
          <div className="card-img">
            <div></div>
          </div>
          <div className="card-title">CORNER LEFT</div>
        </div>
        <div className="card" onClick={() => props.setLayout(2)}>
          <div className="card-img">
            <div></div>
          </div>
          <div className="card-title">CORNER RIGHT</div>
        </div>
      </div>
      <div className="d-flex justify-content-center card-gap">
        <div className="card" onClick={() => props.setLayout(3)}>
          <div className="card-img">
            <div></div>
          </div>
          <div className="card-title">U - SHAPE</div>
        </div>
        <div className="card" onClick={() => props.setLayout(4)}>
          <div className="card-img">
            <div></div>
          </div>
          <div className="card-title">4 WALLS</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
