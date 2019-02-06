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
    url: "/drinks",
    text: "Drinks"
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
    );
  }
}

export default Header;
