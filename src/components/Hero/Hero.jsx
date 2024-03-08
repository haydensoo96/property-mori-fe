import "./Hero.css";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section
      className="hero-wrapper"
      style={{ background: "linear-gradient(to bottom, transparent, white)" }}
    >
      <div className="paddings innerWidth flexCenter hero-container">
        <div>
          <div className="innerWidth flexCenter c-container">
            <div
              className="flexCenter c-left "
              style={{
                flex: 1.5,
                textAlign: "center",
                flexDirection: "column",
              }}
            >
              <span
                className="primaryText"
                style={{
                  color: "var(--black)",
                  fontFamily: "fantasy",
                  fontSize: "35px",
                }}
              >
                North Woods Residence
              </span>

              <span className="secondaryText" style={{ color: "var(--blue)" }}>
                By Gamuda Cove
              </span>
            </div>
            <div className="flexStart" style={{ flex: 1, padding: "5px" }}>
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
                    src="./northwoods_assets/Splashmania.png"
                    alt=""
                    style={{ width: "100%" }}
                  />
                </div>
              </motion.h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
