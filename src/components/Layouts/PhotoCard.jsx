import React from "react";
import "./PhotoCard.css";
import { truncate } from "lodash";

const PhotoCard = ({ card }) => {
  return (
    <div
      className="flexColStart innerWidth p-card"
      style={{ alignItems: "center" }}
    >
      <img src={card.image} alt="home" />
      <span
        className="secondaryText description"
        style={{ fontSize: "20px", color: "lightgray" }}
      >
        {truncate(card.description, { length: 100 })}
      </span>
    </div>
  );
};

export default PhotoCard;
