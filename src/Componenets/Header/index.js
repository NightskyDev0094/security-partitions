import React from "react";
import "./index.scss";

const Header = () => {
  return (
		<div className="header">
      <div>
        <div className="logo">
          <div className="logo-icon"></div>
          <div className="logo-title">Security Partitions</div>
        </div>
        <div className="menu-list">
          <div className="list-items">
            <div>Pricing</div>
            <div>FAQ</div>
            <div>About</div>
          </div>
          <div className="phone-number-button">555-555-5555</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
