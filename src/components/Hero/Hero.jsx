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
            style={{
              textAlign: "center",
              position: "absolute",
              bottom: "20%",
              left: "31%",
            }}
          >
            <span
              className="primaryText"
              style={{ color: "white", fontSize: "80px", fontWeight: "400" }}
            >
              "A Timeless Tribute"
            </span>
          </div>
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
                <img src="./heritage_assets/Hero.jpeg" alt="" />
              </div>
            </motion.h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
