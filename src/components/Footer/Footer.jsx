import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper" style={{ backgroundColor: "var(--black)" }}>
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./northwoods_assets/footer-logo.png" alt="" width={150} />
        </div>

        <div className="flexColStart f-right">
          <img src="./northwoods_assets/gamudaland.png" alt="" width={150} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
