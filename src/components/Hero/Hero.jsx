import "./Hero.css";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section
      className="hero-wrapper"
      style={{ background: "linear-gradient(to bottom, transparent, white)" }}
    >
      <div>
        <motion.h1
          initial={{ y: "2rem", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 2,
            type: "ease-in",
          }}
        >
          <div>
            <img width={1000} src="./mori3assets/about-bg.png" alt="" />
          </div>
        </motion.h1>
      </div>
      <div className="paddings hero-container">
        <div className="flexEnd">
          <div
            style={{
              textAlign: "right",
              position: "absolute",
              top: "40%",
              right: "5%",
            }}
          >
            <span
              className="primaryText"
              style={{ color: "black", fontSize: "50px", fontWeight: "150" }}
            >
              A HOME THAT <br /> EMBRACE A LIFESTYLE OF <br /> INDIVIDUALITY &
              SUSTAINABILITY
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
