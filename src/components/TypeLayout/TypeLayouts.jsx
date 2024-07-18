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
import { PuffLoader } from "react-spinners";

const Layouts = () => {
  const sampleData = [
    {
      image: "./heritage_assets/TypeA.png",
      title: "A",
      description: "3 bedroom & 2 bathroom",
      sqft: "820 sq. ft.",
    },
    {
      image: "./heritage_assets/TypeB.png",
      title: "B",
      description: "3 bedroom & 2 bathroom",
      sqft: "820 sq. ft.",
    },
    {
      image: "./heritage_assets/TypeAG.png",
      title: "AG",
      description: "3 bedroom & 2 bathroom",
      sqft: "1026 (Accessory Parcel 234 sq.ft)",
    },
    {
      image: "./heritage_assets/TypeBG.png",
      title: "BG",
      description: "3 bedroom & 2 bathroom",
      sqft: "1026 (Accessory Parcel 234 sq.ft)",
    },
  ];

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
