import React from "react";
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import Layouts from "../components/Layouts/Layouts";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import ConceptCard from "../components/ConceptCard/ConceptCard";
import MapComponent from "../components/MapComponent/MapComponent";
import ConceptKey from "../components/ConceptCard/ConceptKey";
import MapComponent2 from "../components/MapComponent/MapComponent2";
import ConceptElement from "../components/ConceptCard/ConceptElement";
import PhotoSliders from "../components/Layouts/PhotoSlider";

const Website = () => {
  return (
    <div className="App">
      <div>
        <Hero />
      </div>
      <PhotoSliders />

      <ConceptKey />

      {/* <ConceptElement /> */}
      <div>
        <div className="white-gradient" />
        <Contact />
      </div>
      <Layouts />
      <MapComponent />

      <RegisterForm />

      <MapComponent2 />
    </div>
  );
};

export default Website;
