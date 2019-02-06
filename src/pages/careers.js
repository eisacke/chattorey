import React from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";

const Careers = () => (
  <Layout>
    <SEO title="Careers" />
    <h1 className="heading-medium push-bottom med-text-center">Careers</h1>
    <p className="text-medium">
      Our team is the backbone of what we do, so it's very important that we
      find the right individuals to join us. If you would like to be part of our
      team, you need a genuine love for hospitality and people. We pride
      ourselves on the way we treat our guests and one another, so we invest in
      our staff by training and supporting them every step of the way.
    </p>
    <p className="text-medium no-push">
      You can apply by emailing your CV and covering letter to{" "}
      <a href="mailto:info@chattorey.com">info@chattorey.com</a> or just pop
      into the restaurant and have a chat with the manager.
    </p>
  </Layout>
);

export default Careers;
