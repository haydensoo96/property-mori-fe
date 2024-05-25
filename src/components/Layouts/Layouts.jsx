import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
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
    {
      image: "./heritage_assets/TypeA.jpg",
      title: "B",
      description: "3 bedroom & 2 bathroom",
      sqft: "862 sq. ft.",
    },
    {
      image: "./heritage_assets/TypeA1.jpg",
      title: "A1",
      description: "3 bedroom & 2 bathroom",
      sqft: "862 sq. ft.",
    },
    {
      image: "./heritage_assets/TypeA1T.jpg",
      title: "A1T",
      description: "3 bedroom & 2 bathroom",
      sqft: "862 sq. ft.",
    },
    {
      image: "./heritage_assets/TypeA2.jpg",
      title: "A2",
      description: "3 bedroom & 2 bathroom",
      sqft: "862 sq. ft.",
    },
    {
      image: "./heritage_assets/TypeAT.jpg",
      title: "AT",
      description: "3 bedroom & 2 bathroom",
      sqft: "862 sq. ft.",
    },
  ];

  if (isLoading) {
    return (
      <div className="wrapper flexCenter" style={{ height: "60vh" }}>
        <PuffLoader
          height="80"
          width="80"
          radius={1}
          // color="#4066ff"
          aria-label="puff-loading"
        />
      </div>
    );
  }

  return (
    <div
      id="Layouts"
      style={{
        background: "linear-gradient(to top, transparent, var(--black))",
      }}
    >
      <div className="paddings">
        <div className="flexCenter r-head">
          <span className="primaryText" style={{ fontSize: "40px" }}>
            OUR LAYOUTS
          </span>
        </div>
        <div>
          <Swiper
            {...sliderSettings}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            pagination={{ clickable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
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
