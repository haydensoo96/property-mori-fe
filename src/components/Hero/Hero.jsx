import "./Hero.css";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section
      className="hero-wrapper"
      style={{ background: "linear-gradient(to bottom, transparent, white)" }}
    >
      <div className="innerWidth paddings flexCenter hero-container">
        <div className=" flexCenter">
          <div
            className="flexCenter c-left"
            style={{
              textAlign: "center",
              flexDirection: "column",
              position: "absolute",
              top: "15%",
              left: "2%",
            }}
          >
            <img
              src="./northwoods_assets/words-logo.png"
              alt=""
              style={{ width: "20%" }}
            />
            <span
              className="primaryText"
              style={{
                fontWeight: "100",
                color: "#2d4e4b",
                fontSize: "20px",
                marginTop: "1%",
              }}
            >
              Serviced Residence
            </span>
          </div>
          <div className="flexStart" style={{ flex: 2, padding: "5px" }}>
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
            >
              <div className="image-container">
                <img src="./northwoods_assets/gallery7-desktop.png" alt="" />
              </div>
            </motion.h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
