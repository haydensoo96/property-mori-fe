import React from "react";
import "./MapComponent.css";
const MapComponent2 = () => {
  return (
    <div
      style={{
        marginTop: "5%",
        background: "linear-gradient(to bottom, transparent, var(--black))",
      }}
    >
      <div className="flexColCenter innerWidth">
        <span className="secondaryText" style={{ marginBottom: "-2%" }}>
          OUR PLAN
        </span>
        <span className="primaryText paddings" style={{ fontSize: "40px" }}>
          SITE PLAN & FACILITIES DECK
        </span>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          paddingBottom: "5%",
        }}
      >
        <img
          style={{ width: "45%", height: "auto" }}
          src="./heritage_assets/ground-floor.png"
          alt=""
        />
        <img
          style={{ width: "45%", height: "auto" }}
          src="./heritage_assets/level-6.png"
          alt=""
        />
        {/* <div className="flexColStart">
          <span className="primaryText" style={{ fontWeight: "400" }}>
            GROUND FLOOR <br />
          </span>
          <span className="primaryText" style={{ fontWeight: "300" }}>
            SITE PLAN
          </span>
          <div>
            <span className="legen-title">LEGEND</span>
            <div className="legend-container">
              <span className="legend-item">1. Entrance</span>
              <span className="legend-item">1. Entrance</span>
              <span className="legend-item">1. Entrance</span>
              <span className="legend-item">1. Entrance</span>
              <span className="legend-item">1. Entrance</span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MapComponent2;
