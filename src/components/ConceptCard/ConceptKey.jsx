import React from "react";
import "./ConceptCard.css";
import { motion } from "framer-motion";

const ConceptKey = () => {
  return (
    <div
      style={{
        background: "var(--diff-background))",
      }}
    >
      <div
        style={{
          flexDirection: "row",
          display: "flex",
        }}
      >
        <div
          className="flexColCenter c-left"
          style={{ textAlign: "right", flex: 1.5 }}
        >
          <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
          >
            <span
              className="primaryText"
              style={{ fontSize: "60px", fontWeight: "300" }}
            >
              ABOUT <br />
            </span>
            <span
              className="orangeText"
              style={{ fontSize: "20px", fontWeight: "200" }}
            >
              The MORI essence embodies a lasting, sustainable urban living,
              with space crafter for generations <br /> <br />
              Residents blend their routines seamlessly with the MORI way of
              life.
            </span>
          </motion.h1>
        </div>
        <div className="flexColEnd c-right" style={{ flex: 1 }}>
          <motion.h1
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
          >
            <img
              src="./mori3assets/mori-city-rounded.png"
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
