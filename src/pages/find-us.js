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
          href="http://maps.google.com/?q=65 Wrotham Road, Gravesent, Kent, DA11 0QB"
          target="_blank"
        >
          65 Wrotham Road,
          <br />
          Gravesent,
          <br />
          Kent,
          <br />
          DA11 0QB
        </a>
      </p>
      <h2 className="heading-medium push-bottom med-text-center">Parking</h2>
      <p className="text-medium double-push-bottom">
        There is Parking is very close to the restaurant. Parrock St Car Park (Postcode DA12 1ER) is the nearest car park and is roughly 5 minute walk to the restaurant.
      </p>
      <h2 className="heading-medium push-bottom med-text-center">By train</h2>
      <p className="text-medium double-push-bottom">
        We are also a short walk (roughly 7 min) from Gravesend Rail Station (Post code DA11 0HP). Alternatively there is parking across the road from us in front of Wrotham Court on Wrotham Road, but please bear in mind spaces are limited.
      </p>
      <img src={map} alt="Map of Gravesend" />
    </div>
  </Layout>
);

export default FindUs;
