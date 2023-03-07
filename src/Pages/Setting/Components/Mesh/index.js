import React from "react";
import "./index.scss";

const Mesh = (props) => {
  return (
		<div className="Mesh d-flex flex-column card-gap">
      <div className="d-flex justify-content-center card-gap">
        <div className="card" onClick={() => props.setMesh(0)}>
          <div className="card-img"></div>
          <div className="card-title">WIRE MESH</div>
        </div>
        <div className="card" onClick={() => props.setMesh(1)}>
          <div className="card-img"></div>
          <div className="card-title">DEA / PHARMA</div>
        </div>
        <div className="card" onClick={() => props.setMesh(2)}>
          <div className="card-img"></div>
          <div className="card-title">SERVER / DATA</div>
        </div>
        <div className="card" onClick={() => props.setMesh(3)}>
          <div className="card-img"></div>
          <div className="card-title">TOOL CRIB</div>
        </div>
      </div>
      <div className="d-flex justify-content-center card-gap">
        <div className="card" onClick={() => props.setMesh(4)}>
          <div className="card-img"></div>
          <div className="card-title">DRIVER CAGE</div>
        </div>
        <div className="card" onClick={() => props.setMesh(5)}>
          <div className="card-img"></div>
          <div className="card-title">MACHINE</div>
        </div>
        <div className="card" onClick={() => props.setMesh(6)}>
          <div className="card-img"></div>
          <div className="card-title">EVIDENCE LOCKER</div>
        </div>
        <div className="card" onClick={() => props.setMesh(7)}>
          <div className="card-img"></div>
          <div className="card-title">HOLDING CELL</div>
        </div>
      </div>
    </div>
  );
};

export default Mesh;
