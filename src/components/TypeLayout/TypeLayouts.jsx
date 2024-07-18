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
      image: "./mori3assets/TypeA.png",
      title: "A",
      description: "3 bedroom & 2 bathroom",
      sqft: "820 sq. ft.",
    },
    {
      image: "./mori3assets/TypeB.png",
      title: "B",
      description: "3 bedroom & 2 bathroom",
      sqft: "820 sq. ft.",
    },
  ];

  return (
    <div
      id="Layouts"
      style={{
        background: "var(--diff-background))",
      }}
    >
      <div className="paddings">
        <div className="flexCenter r-head">
          <span
            className="primaryText"
            style={{ fontSize: "40px", fontWeight: "300" }}
          >
            OUR LAYOUTS
          </span>
        </div>
        <div className="flexCenter paddings">
          <img
            style={{ width: "600px", marginRight: "10%" }}
            src="./mori3assets/TypeA.png"
          ></img>
          <img style={{ width: "600px" }} src="./mori3assets/TypeB.png"></img>
        </div>
      </div>
    </div>
  );
};

export default Layouts;
