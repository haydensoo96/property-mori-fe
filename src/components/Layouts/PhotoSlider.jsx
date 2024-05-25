import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./PhotoSliders.css";
import { sliderPhotoSettings } from "../../utils/common";
import PhotoCard from "./PhotoCard";
import useProperties from "../../hooks/useProperties";
import { PuffLoader } from "react-spinners";

const PhotoSliders = () => {
  const { isLoading } = useProperties();

  const sampleData = [
    {
      image: "./northwoods_assets/gallery1-desktop.png",
      description:
        "60-arce Central Park - Where nature, community, and pets come together",
    },
    {
      image: "./northwoods_assets/gallery2-desktop.png",
      description: "SplashMania Waterpark - An adventure waiting to unfold",
    },
    {
      image: "./northwoods_assets/gallery3-desktop.png",
      description: "Goosebumps Rose Course - Discover your inner adventure",
    },
    {
      image: "./northwoods_assets/gallery4-desktop.png",
      description: "Unobstructed forest views from your balcony",
    },
    {
      image: "./northwoods_assets/gallery6-desktop.png",
      description: "Panoramic views of the Kuala Langat Forest Reserve",
    },
    {
      image: "./northwoods_assets/gallery7-desktop.png",
      description: "50-meter infinity pool with a forest view",
    },
  ];

  if (isLoading) {
    return (
      <div className="wrapper flexCenter" style={{ height: "60vh" }}>
        <PuffLoader
          height="80"
          width="80"
          radius={1}
          color="#4066ff"
          aria-label="puff-loading"
        />
      </div>
    );
  }

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
