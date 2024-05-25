import React from "react";
import "./MapComponent.css";
const MapComponent = () => {
  return (
    <div className="flexColCenter">
      <div className="flexColCenter" style={{ flex: 0.5 }}>
        <span
          className="primaryText"
          style={{ fontFamily: "Source Sans 3", fontSize: "40px" }}
        >
          CONNECTIVITY
        </span>
      </div>

      <div
        className="image-container flexColCenter"
        style={{
          width: "60%",
          height: "100%",
        }}
      >
        <img src="./heritage_assets/connects.png" alt="" />
      </div>
    </div>
  );
};

export default MapComponent;
