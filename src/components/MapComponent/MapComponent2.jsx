import React from "react";
import "./MapComponent.css";
const MapComponent2 = ({
  legend,
  title,
  image,
  withHeader = false,
  type,
  background = false,
}) => {
  return (
    <div
      style={{
        marginTop: "5%",
        background: background
          ? "linear-gradient(to bottom, transparent, var(--black))"
          : "",
      }}
    >
      <div className="flexColCenter innerWidth">
        {withHeader ? (
          <span className="secondaryText" style={{ marginBottom: "-2%" }}>
            OUR PLAN
          </span>
        ) : (
          ""
        )}

        {withHeader ? (
          <span className="primaryText paddings" style={{ fontSize: "40px" }}>
            SITE PLAN & FACILITIES DECK
          </span>
        ) : (
          ""
        )}

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            paddingBottom: "5%",
          }}
        >
          {type === 1 ? (
            <div className="image-container" style={{ width: "70%" }}>
              <img src={image} alt="" />
            </div>
          ) : (
            ""
          )}

          <div className="flexColStart">
            <div style={{ marginBottom: "30%" }}>
              <span
                className="primaryText"
                style={{ fontWeight: "500", fontSize: "45px" }}
              >
                {title} <br />
              </span>
              <span className="primaryText" style={{ fontWeight: "300" }}>
                SITE PLAN
              </span>
            </div>
            <div className="flexColStart">
              <span
                className="primaryText"
                style={{ fontSize: "30px", fontWeight: "500" }}
              >
                LEGEND
              </span>
              <div className="primaryText legend-container">
                {legend.map((value, index) => {
                  return (
                    <span className="legend-item">
                      {index + 1}. {value}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          {type === 2 ? (
            <div
              className="image-container"
              style={{ width: "100%", marginLeft: "5%" }}
            >
              <img src={image} alt="" />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default MapComponent2;
