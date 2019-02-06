import React from "react";
import { StaticQuery, graphql } from "gatsby";
import layoutStyles from "./layout.module.styl";
import Footer from "../footer/footer";
import hand from "../../images/logo.png";
import Header from "../header/header";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className={layoutStyles.body}>
        <div className={layoutStyles.content}>
          <Header siteTitle={data.site.siteMetadata.title} />
          <div className="u-pad-page">
            <div className="grid">
              <div className="row">
                <div className="c4 med-c12 med-double-push-bottom med-text-center">
                  <img
                    src={hand}
                    alt="Chattorey logo"
                    className={layoutStyles.hand}
                  />
                </div>
                <div className="c6 s1 med-c12 med-s0">{children}</div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )}
  />
);

export default Layout;
