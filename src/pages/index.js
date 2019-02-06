import React from "react";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import indexStyles from "./index.module.styl";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className={indexStyles.copy}>
      <h1 className="push-bottom text-large">
        Chattorey. <em className="o-text-regular">noun (hindi)</em>
      </h1>
      <p className="text-large no-push">
        Foodies. People devoted to enjoyment, especially that derived from fine
        food and drink.
      </p>
    </div>
  </Layout>
);

export default IndexPage;
