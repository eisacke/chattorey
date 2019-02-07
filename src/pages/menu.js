import React from "react";

import Layout from "../components/layout/layout";
import SEO from "../components/seo";

const Menu = () => (
  <Layout>
    <SEO title="Menu" />
    <div>
      <h1 className="heading-medium push-bottom med-text-center">Menu</h1>
      <p className="text-medium">
        Growing up in a household of chattorey (foodies) has made us experience
        indian food at its best. We’d had enough of the same old balti houses
        (which actually translates to bucket houses) all serving sloppy red
        currys that all taste the same.
      </p>

      <p className="text-medium push-bottom">
        It's about time we all experienced an authentic Indian meal, have a look
        at our menus below:
      </p>

      <ul>
        <li className="half-push-bottom">
          <a href="/all-day-menu.pdf" target="blank" className="text-medium">
            All day menu
          </a>{" "}
          &rarr;
        </li>
        <li>
          <a href="/desserts.pdf" target="blank" className="text-medium">
            Desserts menu
          </a>{" "}
          &rarr;
        </li>
        <li>
          <a href="/drinks.pdf" target="blank" className="text-medium">
            Drinks menu
          </a>
          &rarr;
        </li>
      </ul>
    </div>
  </Layout>
);

export default Menu;
