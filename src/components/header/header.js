import React, { Component } from "react";
import headerStyles from "./header.module.styl";
import { Link } from "gatsby";

const links = [
  {
    url: "/",
    text: "Home"
  },
  {
    url: "/menu",
    text: "Menu"
  },
  {
    url: "/find-us",
    text: "Find us"
  },
  {
    url: "/bookings",
    text: "Bookings"
  },
  {
    url: "/catering",
    text: "Catering"
  },
  {
    url: "/careers",
    text: "Careers"
  }
];

class Header extends Component {
  scrollToFooter = () => {
    const footer = document.getElementById("footer");
    footer.scrollIntoView();
  };

  render() {
    return (
      <>
        <div className={headerStyles.banner}>
          <div className="grid">
            <div className="row">
              <div className="c12">
                <p className={headerStyles.bannerTitle}>Temporary Closure</p>
                Unfortunately due to the COVID-19 pandemic and in accordance
                with the latest social distancing guidelines we have had to
                close until further notice. We look forward to seeing you when
                we reopen.
              </div>
            </div>
          </div>
        </div>
        <div className={headerStyles.container}>
          <div className="grid">
            <div className="row">
              <div className="c5 lrg-c12 lrg-text-center lrg-half-push-bottom">
                <Link to="/" className={headerStyles.logo}>
                  <h1 className="heading">{this.props.siteTitle}</h1>
                </Link>
              </div>
              <div className={headerStyles.navLinksWrapper + " c7 lrg-c12"}>
                <ul className={headerStyles.navLinks}>
                  {links.map((link, index) => (
                    <li key={index} className={headerStyles.navLink}>
                      <Link
                        to={link.url}
                        activeClassName={headerStyles.navLinkActive}
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                  <li className={headerStyles.navLink + " hide med-show"}>
                    <button onClick={this.scrollToFooter}>Contact</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
