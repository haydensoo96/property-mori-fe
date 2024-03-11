import React from "react";
import "./ConceptCard.css";
import { motion } from "framer-motion";

const ConceptKey = () => {
  return (
    <div style={{ backgroundColor: "var(--black)" }}>
      <div className="innerWidth flexCenter paddings">
        <div>
          <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
          >
            <img
              src="./northwoods_assets/KeySetup.jpeg"
              alt=""
              className="image-container"
            />
          </motion.h1>
        </div>
      </div>
    </div>
  );
};

export default ConceptKey;
