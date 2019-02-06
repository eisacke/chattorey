import React from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";

const Drinks = () => (
  <Layout>
    <SEO title="Drinks" />
    <div>
      <h1 className="heading-medium push-bottom">Drinks</h1>
      <p className="text-medium push-bottom">
        We’ve got a range of fabulous drinks for all occasions. Find the perfect
        accompaniment to your curry, you can view our drinks menu below.
      </p>
      <a href="/drinks.pdf" target="blank" className="text-medium">
        Drinks menu
      </a>{" "}
      &rarr;
    </div>
  </Layout>
);

export default Drinks;
