import React, { useState } from "react";
import "./index.scss";

import Mesh from "./Components/Mesh";
import Layout from "./Components/Layout";
import Tall from "./Components/Tall";
import Ceil from "./Components/Ceil";
import EachWall from "./Components/EachWall";

const Setting = () => {
  const settingTitltes = [
    'What kind of mesh?',
    'What kind of layout?',
    'How tall',
    'Do your partitions need a ceiling?',
    'What goes on each wall?',
    'Add measurements',
    'Review',
    'Checkout '
  ]
  const [step, setStep] = useState(0);
  const [surfaceData, setSurfaceData]= useState({});

  const setMesh = (mesh) => {
    setSurfaceData(
      {
        ...surfaceData,
        Mesh: mesh
      }
    )
    setStep(step + 1);
  }
  const setLayout = (layout) => {
    setSurfaceData(
      {
        ...surfaceData,
        Layout: layout
      }
    )
    setStep(step + 1);
  }
  const setTall = (tall) => {
    setSurfaceData(
      {
        ...surfaceData,
        Tall: tall
      }
    )
    setStep(step + 1);
  }
  const setCeiling = (hasCeiling) => {
    setSurfaceData(
      {
        ...surfaceData,
        Ceil: hasCeiling
      }
    )
    setStep(step + 1);
    console.log(surfaceData)
  }
  

  return (
		<div className="setting">
			<div className="setting-header">
        <div className="title">{ settingTitltes[step] }</div>
        <div className="d-flex align-items-center">
          <i className="d-flex align-items-center bi bi-chevron-left"></i>
          <div className="step">{ step + 1 + ' / ' + settingTitltes.length }</div>
          <i className="d-flex align-items-center bi bi-chevron-right"></i>
        </div>
      </div>
      <div className="setting-content">
        { step === 0 && <Mesh setMesh={setMesh} /> }
        { step === 1 && <Layout setLayout={setLayout} /> }
        { step === 2 && <Tall setTall={setTall} /> }
        { step === 3 && <Ceil setCeiling={setCeiling} /> }
        { step === 4 && <EachWall /> }
      </div>
		</div>
  );
};

export default Setting;
