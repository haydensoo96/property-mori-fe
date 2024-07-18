import React from "react";
import "./PropertyCard.css";

const PropertyCard = ({ card }) => {
  return (
    <div className="flexColStart r-card" style={{ alignItems: "center" }}>
      <img src={card.image} style={{ width: "600px" }} alt="home" />
      {/* <span className="primaryText" style={{ fontWeight: "300" }}>
        {truncate(card.title, { length: 100 })}
      </span>
      <span className="secondaryText" style={{ fontWeight: "300" }}>
        {truncate(card.description, { length: 100 })}
      </span>
      <span
        className="orangeText"
        style={{ fontWeight: "300", fontSize: "20px" }}
      >
        {truncate(card.sqft, { length: 100 })}
      </span> */}
    </div>
  );
};

export default PropertyCard;
