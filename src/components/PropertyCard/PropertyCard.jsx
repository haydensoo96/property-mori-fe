import React from "react";
import "./PropertyCard.css";
import { truncate } from "lodash";

const PropertyCard = ({ card }) => {
  return (
    <div className="flexColStart r-card" style={{ alignItems: "center" }}>
      <img src={card.image} alt="home" />
      <span className="primaryText">
        {truncate(card.description, { length: 100 })}
      </span>
    </div>
  );
};

export default PropertyCard;
