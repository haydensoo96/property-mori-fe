import React from "react";
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import Residencies from "../components/Residencies/Residencies";
import RegisterForm from "../components/RegisterForm/RegisterForm";

const Website = () => {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Hero />
      </div>
      {/* <Companies /> */}
      <Residencies />
      {/* <Value/> */}
      <Contact />
      <RegisterForm />
    </div>
  );
};

export default Website;
