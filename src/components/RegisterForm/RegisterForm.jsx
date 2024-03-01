import React, { useState } from "react";
import "./RegisterForm.css";
import userSubmitForm from "../../hooks/useForm.jsx";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    project: "Atera",
  });

  const [formSubmitted, setFormSubmitStatus] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any actions with the form data (e.g., submit to a server)
    console.log("Form submitted:", formData);

    const response = userSubmitForm(formData);

    if (response) {
      setFormSubmitStatus(true);
    }
  };

  return (
    <div id="get-started" className="g-wrapper">
      <div className="paddings innerWidth g-container">
        {!formSubmitted ? (
          <div className="flexColCenter inner-container">
            <span className="primaryText">Register You Interest</span>
            <span className="secondaryText">
              Subscribe and find super attractive price quotes from us.
              <br />
              Find your residence soon
            </span>
            <form onSubmit={handleSubmit} style={{ width: "50%" }}>
              <label className="flexStart secondaryText">Name</label>
              <div
                className="flexCenter search-bar"
                style={{ marginBottom: "5%" }}
              >
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <label className="flexStart secondaryText">Phone</label>
              <div
                className="flexCenter search-bar"
                style={{ marginBottom: "5%" }}
              >
                <input
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
                  name="email"
                  type="text"
                  value={formData.email}
                  onChange={(e) => handleChange(e)}
                />
              </div>

              <button className="button" type="submit">
                Submit
              </button>
            </form>
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};

export default RegisterForm;
