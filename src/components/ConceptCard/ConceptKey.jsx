import React from "react";
import "./ConceptCard.css";
import { motion } from "framer-motion";

const ConceptKey = () => {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom, transparent, var(--black))",
      }}
    >
      <div
        className="innerWidth"
        style={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="flexColStart c-left">
          <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
          >
            <img
              src="./heritage_assets/concept1.jpeg"
              alt=""
              className="image-container"
            />
          </motion.h1>
        </div>
        <div
          className="flexColCenter c-right textFormat"
          style={{ padding: "10%" }}
        >
          <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
          >
            <span className="primaryText" style={{ fontSize: "45px" }}>
              A modern interpretation  <br /> of colonial cool <br />
            </span>
            <span className="orangeText" style={{ fontSize: "15px" }}>
              While the colonial features and designs are delivered in stunning
              details, what makes Tuan 2egacy truly special is how these classic
              elements blend seamlessly with contemporary interpretations of
              design – suited to the new generation of home buyers.
            </span>
          </motion.h1>
        </div>
      </div>
    </div>
  );
};

export default ConceptKey;
