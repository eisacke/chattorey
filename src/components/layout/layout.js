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
              <div className="row flex-reverse">
                <div className="c6 s1 med-c12 med-s0 med-double-push-bottom">
                  {children}
                </div>
                <div className="c4 med-c12 med-text-center">
                  <img
                    src={hand}
                    alt="Chattorey logo"
                    className={layoutStyles.hand}
                  />
                </div>
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
