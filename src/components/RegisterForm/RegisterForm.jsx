import React, { useState } from "react";
import "./RegisterForm.css";
import userSubmitForm from "../../hooks/useForm.jsx";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    project: "Mori3",
  });

  const [formSubmitted, setFormSubmitStatus] = useState(false);
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validatePhoneNumber = (number) => {
    // Regex pattern for a valid Malaysia mobile phone number
    const phoneNumberRegex = /^01[0-9]-*\d{7,8}$/;

    const isValid = phoneNumberRegex.test(number);
    setIsValidPhoneNumber(isValid);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // const isValidPhone = validatePhoneNumber(formData.phone);

    // if (isValidPhone) {
    userSubmitForm(formData);
    setFormSubmitStatus(true);
    return;
    // } else {
    //   return;
    // }
  };

  return (
    <div
      className="c-wrapper"
      id="RegisterForm"
      style={{ marginTop: "5%", background: "var(--diff-background)" }}
    >
      <div className="flexCenter c-container innerWidth">
        <div className="flexStart">
          <div className="image-container">
            <img src="./mori3assets/discover-your-mori-way-3.png" alt="" />
          </div>
        </div>
        <div className="flex c-right">
          {!formSubmitted ? (
            <div className="flexColStart" style={{ padding: "11%" }}>
              <span className="primaryText">Register You Interest</span>
              <span className="secondaryText">
                Subscribe and find super attractive price quotes from us.
                <br />
                Find your residence soon
              </span>
              <form
                onSubmit={handleSubmit}
                style={{
                  marginTop: "5%",
                  width: "100%",
                }}
              >
                <label className="flexStart secondaryText">Name</label>
                <div className=" search-bar" style={{ marginBottom: "5%" }}>
                  <input
                    required
                    style={{ width: "100%" }}
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <label className="flexStart secondaryText">Phone</label>
                {!isValidPhoneNumber && (
                  <p
                    className="secondaryText"
                    style={{
                      color: "#18364a",
                      textAlign: "left",
                    }}
                  >
                    Please enter a valid number.
                  </p>
                )}
                <div
                  className="flexCenter search-bar"
                  style={{ marginBottom: "5%" }}
                >
                  <input
                    required
                    placeholder="eg. 01X XXX XXXX"
                    style={{ width: "100%" }}
                    name="phone"
                    type="text"
                    value={formData.phone}
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <label className="flexStart secondaryText">Email</label>
                <div
                  className="flexCenter search-bar"
                  style={{ marginBottom: "5%" }}
                >
                  <input
                    style={{ width: "100%" }}
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <button
                  className="button"
                  type="submit"
                  style={{ marginTop: "5%", width: "30%", fontSize: "15px" }}
                >
                  Submit
                </button>
              </form>
            </div>
          ) : (
            <div className="flexColCenter inner-container">
              <span className="primaryText">
                Thanks for showing you interest
              </span>
              <span className="secondaryText">
                Our Sales Specialist will get in touch with you as soon as
                possible
                <br />
                Or you can proceed to book a time with us on the Whatsapps
                Provide above.
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
