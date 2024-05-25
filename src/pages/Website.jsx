import React from "react";
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import Layouts from "../components/Layouts/Layouts";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import ConceptCard from "../components/ConceptCard/ConceptCard";
import MapComponent from "../components/MapComponent/MapComponent";
import ConceptKey from "../components/ConceptCard/ConceptKey";
import MapComponent2 from "../components/MapComponent/MapComponent2";
import PhotoSliders from "../components/Layouts/PhotoSlider";

const Website = () => {
  const legend = [
    "Entrance",
    "Drop-off Area",
    "Bike Trail",
    "Recreational Fustal Court",
  ];
  const groundFloorTitle = "GROUND FLOOR";

  const level6title = "LEVEL 6";

  const level6legend = [
    "Podium Entrance",
    "Legacy Fountain",
    "Glass Pavilion",
    "Infinity Swimming Pool",
    "Jacuzzi",
    "Kid's Water Play",
    "Playground",
    "Multipurpose Court",
    "BBQ Pavilion",
    " Multipurpose Hall/ Recreational Badminton",
    "Gym Room",
    "Games Room",
    "Washroom/Changing Room",
  ];

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

      <MapComponent2
        legend={legend}
        image={"./heritage_assets/ground-floor.png"}
        title={groundFloorTitle}
        type={1}
        withHeader
      />

      <MapComponent2
        legend={level6legend}
        image={"./heritage_assets/level-6.png"}
        title={level6title}
        type={2}
        background
      />
    </div>
  );
};

export default Website;
