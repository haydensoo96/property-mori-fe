import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="f-wrapper" style={{ backgroundColor: "var(--black)" }}>
      <div className="paddings innerWidth flexCenter f-container">
        {/* left side */}
        <div className="flexColStart f-left">
          <img src="./mori3assets/logo.png" alt="" width={250} />
        </div>

        {/* <div className="flexColStart f-right" style={{ marginLeft: "10%" }}>
          <img src="./mori3assets/logo.png" alt="" width={250} />
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
