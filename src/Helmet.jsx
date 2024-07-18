import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const HelmetHeader = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Tuan 3 Heritage</title>
        <meta
          name="Tuan 3 Heritage "
          content="Introducing Tuan Heritag3, the third chapter in the esteemed Tuan Series, where classic elegance meets contemporary urban living. Rising majestically at 45-storey along Jalan Segambut, this residential masterpiece seamlessly integrates colonial charm with the allure of a retro train station, offering residents a truly unique and sophisticated lifestyle."
        />
        <meta
          name="keywords"
          content="Tuan 3, Jalan Ipoh Condo, Mont Kiara Freehold, Freehold under RM500k"
        />
        <meta name="author" content="Your Name" />
        <meta property="og:title" content="My Awesome App" />
        <meta property="og:description" content="Live the British" />
      </Helmet>
    </HelmetProvider>
  );
};

export default HelmetHeader;
