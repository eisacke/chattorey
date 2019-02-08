import React from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";

import map from "../images/map.png";

const FindUs = () => (
  <Layout>
    <SEO title="Find us" />
    <div>
      <h1 className="heading-medium push-bottom med-text-center">Find us</h1>
      <p className="text-medium double-push-bottom">
        <a
          href="http://maps.google.com/?q=65 Wrotham Road, Gravesend, Kent, DA11 0QB"
          target="_blank"
          rel="noopener noreferrer"
        >
          65 Wrotham Road,
          <br />
          Gravesend,
          <br />
          Kent,
          <br />
          DA11 0QB
        </a>
      </p>
      <h2 className="heading-medium push-bottom med-text-center">Parking</h2>
      <p className="text-medium double-push-bottom">
        There is parking very close to the restaurant. <a href="https://www.gravesham.gov.uk/home/parking-and-roads/car-parks/overview/parrock-street-car-park" target="_blank" rel="noopener noreferrer">Parrock St Car Park</a> (postcode DA12 1ER) is the nearest car park and is roughly a 5 minute walk to the restaurant. Alternatively, there is parking across the road from us in front of Wrotham Court on Wrotham Road, but please bear in mind that spaces are limited.
      </p>
      <h2 className="heading-medium push-bottom med-text-center">By train</h2>
      <p className="text-medium double-push-bottom">
        We are also a short walk (roughly 7 minutes) from Gravesend Rail Station (postcode DA11 0HP).
      </p>
      <img src={map} alt="Map of Gravesend" />
    </div>
  </Layout>
);

export default FindUs;
