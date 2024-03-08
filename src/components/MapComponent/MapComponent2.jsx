import React from "react";
import "./MapComponent.css";
const MapComponent2 = () => {
  return (
    <div style={{ flex: 1, paddingLeft: "10%", paddingRight: "10%" }}>
      <div className="flexColCenter" style={{ flex: 0.5 }}>
        <span
          className="primaryText paddings"
          style={{ fontFamily: "fantasy", fontSize: "25px" }}
        >
          OUR MASTER PLAN
        </span>
        <span className="secondaryText" style={{ textAlign: "center" }}>
          Gamuda Cove is a 1,530-acre township set next to wetlands and forest
          reserves in Southern Klang Valley. Within close proximity to Cyberjaya
          and KLIA, it enjoys direct access from ELITE Highway and easy
          accessibility from other major highways.
        </span>
      </div>

      <div
        className="image-container"
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <img src="./northwoods_assets/masterplan.png" alt="" />
      </div>
    </div>
  );
};

export default MapComponent2;
