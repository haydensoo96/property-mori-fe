import React from "react";
import "./Contact.css";
import { BsWhatsapp } from "react-icons/bs";
const Contact = () => {
  return (
    <div
      id="contact-us"
      className="c-wrapper"
      style={{ background: "var(--diff-background)" }}
    >
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexEnd c-left">
          <div className="image-container">
            <img src="./mori3assets/discover-your-mori-way-1.png" alt="" />
            <img src="./mori3assets/discover-your-mori-way-2.png" alt="" />
          </div>
        </div>
        <div className="flexColStart c-right" style={{ marginLeft: "5%" }}>
          <span className="orangeText">Our Contact Us</span>
          <span className="primaryText">Book a time to our showroom</span>
          <span className="secondaryText">
            Contact us and our agent with get in touch with you for more details{" "}
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsWhatsapp size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">Property Specialist</span>
                  </div>
                </div>
                <div
                  className="flexCenter button"
                  style={{ background: "var(--black)" }}
                  onClick={() =>
                    window.open("https://wa.link/rbt261", "_blank")
                  }
                >
                  Chat now
                </div>
              </div>
              <div className="flexColCenter mode" style={{ padding: "18px" }}>
                <span>Showroom Schedule</span>
                <span className="secondaryText">
                  Monday to Friday - 10AM-6PM
                </span>
                <span className="secondaryText">
                  Weekend/Holiday - 10AM-6PM
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
