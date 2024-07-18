import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const HelmetHeader = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Mori 3 Residence</title>
        <meta
          name="Mori 3 Residence "
          content="The Way of Mori Residences is a New Class of Condo that refines the way in designing living spaces, by rethinking the essentials in product creation and value innovation.
The sincerity of Mori is to pursue an endless effort in building quality and sustainable homeownership experience that
grows beyond the walls, beyond the time.."
        />
        <meta
          name="keywords"
          content="mori 3, rawang freehold, rawang condo under 400k, mori residence, anggung city condo"
        />
        <meta name="author" content="Scientex" />
        <meta property="og:title" content="Scientex" />
        <meta property="og:description" content="Freehold Condo" />
      </Helmet>
    </HelmetProvider>
  );
};

export default HelmetHeader;
