import React from "react";
import { useSwiper } from "swiper/react";
import "swiper/css";
import "./PhotoSliders.css";
import { PuffLoader } from "react-spinners";

const PhotoSliders = () => {
  return (
    <div id="PhotoSliders" className="innerWidth">
      <div className="white-gradient-bottom-right" />
      <div className="flexColCenter r-head">
        <span className="secondaryText">FEATURE & AMMENTIES</span>
        <span
          className="primaryText"
          style={{ fontSize: "45px", textAlign: "center", marginBottom: "5%" }}
        >
          Majestic features with bespoke <br /> appointments
        </span>
        <div className="image-row-container">
          <img src="./heritage_assets/fac1.jpeg" alt="" />
          <img src="./heritage_assets/fac2.jpeg" alt="" />
          <img src="./heritage_assets/fac3.jpeg" alt="" />
          <img src="./heritage_assets/fac4.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default PhotoSliders;

const SlideNextButton = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter r-buttons">
      <button onClick={() => swiper.slidePrev()} className="r-prevButton">
        &lt;
      </button>
      <button onClick={() => swiper.slideNext()} className="r-nextButton">
        &gt;
      </button>
    </div>
  );
};
