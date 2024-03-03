import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./Layouts.css";
import { sliderSettings } from "../../utils/common";
import PropertyCard from "../PropertyCard/PropertyCard";
import useProperties from "../../hooks/useProperties";
import { PuffLoader } from "react-spinners";

const Layouts = () => {
  const { isLoading } = useProperties();

  const sampleData = [
    { image: "../assets/2.png", description: "A1" },
    { image: "../assets/3.png", description: "A2" },
    { image: "../assets/4.png", description: "B1" },
    { image: "../assets/5.png", description: "B2" },
    { image: "../assets/6.png", description: "C1" },
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
    <div
      id="residencies"
      className="r-wrapper"
      style={{ alignContent: "center" }}
    >
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          <span className="primaryText">Our Layout</span>
        </div>
        <Swiper {...sliderSettings}>
          <SlideNextButton />
          {sampleData.slice(0, 8).map((card, i) => (
            <SwiperSlide key={i}>
              <PropertyCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Layouts;

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
