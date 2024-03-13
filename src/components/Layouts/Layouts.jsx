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
    // { image: "./northwoods_assets/Layout_1.PNG", description: "A" },
    { image: "./northwoods_assets/Layout_2.PNG", description: "B" },
    { image: "./northwoods_assets/Layout_3.PNG", description: "C" },
    { image: "./northwoods_assets/Layout_4.PNG", description: "D" },
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
      style={{
        backgroundColor: "var(--black)",
      }}
    >
      <div className="white-gradient-bottom-right" />
      <div className="paddings">
        <div className="flexCenter r-head">
          <span className="primaryText" style={{ color: "white" }}>
            Our Layout
          </span>
        </div>
        <div>
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
