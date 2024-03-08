import React from "react";
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import Layouts from "../components/Layouts/Layouts";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import ConceptCard from "../components/ConceptCard/ConceptCard";
import MapComponent from "../components/MapComponent/MapComponent";
import ConceptKey from "../components/ConceptCard/ConceptKey";
import MapComponent2 from "../components/MapComponent/MapComponent2";

const Website = () => {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Hero />
      </div>
      <ConceptCard />
      <ConceptKey />
      <Contact />
      <Layouts />
      <MapComponent />
      <div>
        <div className="white-gradient-bottom-right" />
        <RegisterForm />
      </div>
      <MapComponent2 />
    </div>
  );
};

export default Website;
