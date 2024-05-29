import React from "react";
import "./Contact.css";
import { BsFillChatDotsFill, BsWhatsapp } from "react-icons/bs";
const Contact = () => {
  return (
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
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
                    (window.location.href = "https://wa.link/scgi22")
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

        {/* right side */}
        <div className="flexEnd c-right">
          <div className="image-container">
            <img
              style={{ width: "50%" }}
              src="./heritage_assets/gallery1.jpg"
              alt=""
            />
            <img
              style={{ width: "50%" }}
              className="inner-image"
              src="./heritage_assets/gallery2.jpg"
              alt=""
            />
            <img
              style={{ width: "50%" }}
              className="inner-image"
              src="./heritage_assets/gallery3.jpg"
              alt=""
            />
            <img
              style={{ width: "50%" }}
              className="inner-image"
              src="./heritage_assets/gallery4.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
