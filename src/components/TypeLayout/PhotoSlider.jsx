import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useSwiper } from "swiper/react";
import "swiper/css";
import "./Layouts.css";

const Layouts = () => {
  const images = [
    {
      image: "./mori3assets/discover-your-mori-way-1.png",
    },
    {
      image: "./mori3assets/discover-your-mori-way-2.png",
    },
    {
      image: "./mori3assets/discover-your-mori-way-3.png",
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
            style={{ fontSize: "50px", fontWeight: "200" }}
          >
            "DISCOVER YOUR MORI WAY OF LIVING"
          </span>
        </div>

        <div className="image-gallery">
          {images.map((img, index) => (
            <div key={index} className="image-container">
              <img
                src={img.image}
                alt={`Image ${index + 1}`}
                className="original-size-image"
              />
            </div>
          ))}
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
