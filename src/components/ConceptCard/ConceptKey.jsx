import React from "react";
import "./ConceptCard.css";
import { motion } from "framer-motion";

const ConceptKey = () => {
  return (
    <div
      style={{ backgroundColor: "var(--black)" }}
      className="paddings white-gradient"
    >
      <div className="innerWidth flexCenter c-container">
        <div className="flexStart" style={{ flex: 1, padding: "10px" }}>
          <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
          >
            <div className="image-container">
              <img
                src="./northwoods_assets/KeySetup.jpeg"
                alt=""
                style={{ width: "100%" }}
              />
            </div>
          </motion.h1>
        </div>
      </div>
    </div>
  );
};

export default ConceptKey;
