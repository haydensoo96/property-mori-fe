import React from "react";
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import Layouts from "../components/Layouts/Layouts";
import RegisterForm from "../components/RegisterForm/RegisterForm";

const Website = () => {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Hero />
      </div>
      {/* <Companies /> */}
      <Layouts />
      {/* <Value/> */}
      <Contact />
      <RegisterForm />
    </div>
  );
};

export default Website;
