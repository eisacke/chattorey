import React from "react";
import headerStyles from "./header.module.styl";
import { Link } from "gatsby";

const links = [
  {
    url: "/",
    text: "Home",
  },
  {
    url: "/menu",
    text: "Menu",
  },
  {
    url: "/find-us",
    text: "Find us",
  },
  {
    url: "/bookings",
    text: "Bookings",
  },
  {
    url: "/catering",
    text: "Catering",
  },
  {
    url: "/careers",
    text: "Careers",
  },
];

const Header = ({ siteTitle }) => {
  const scrollToFooter = () => {
    const footer = document.getElementById("footer");
    footer.scrollIntoView();
  };

  return (
    <div className={headerStyles.container}>
      <div className="grid">
        <div className="row">
          <div className="c5 lrg-c12 lrg-text-center lrg-half-push-bottom">
            <Link to="/" className={headerStyles.logo}>
              <h1 className="heading">{siteTitle}</h1>
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
                <button onClick={scrollToFooter}>Contact</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
