import React from "react";
import footerStyles from "./footer.module.styl";

const Footer = () => (
  <footer className={footerStyles.container} id="footer">
    <div className="grid">
      <div className="row">
        <div className="c2 med-c12 med-push-bottom">
          <h3 className="heading-small half-push-bottom">Find us</h3>
          <p className="no-push">
            <a
              href="http://maps.google.com/?q=65 Wrotham Road, Gravesend, Kent, DA11 0QB"
              target="_blank"
              rel="noopener noreferrer"
            >
              65 Wrotham Road,
              <br />
              Gravesend,
              <br />
              Kent,
              <br />
              DA11 0QB
            </a>
          </p>
        </div>
        <div className="c3 med-c12 med-push-bottom">
          <h3 className="heading-small half-push-bottom">Contact us</h3>
          <ul className="push-bottom">
            <li>
              <a href="mailto:info@chattorey.com">info@chattorey.com</a>
            </li>
            <li>
              <a href="tel:01474322123">01474 322123</a>
            </li>
          </ul>

          <p className="no-push">
            <strong>We accept cash only.</strong>
          </p>
        </div>
        <div className="c4 med-c12 med-push-bottom">
          <h3 className="heading-small half-push-bottom">Opening hours</h3>
          <ul className="push-bottom">
            <li>Monday: Closed</li>
            <li>Tuesday - Friday: 5pm - 10pm</li>
            <li>Saturday - Sunday: 12.30pm - 10pm</li>
          </ul>
        </div>
        <div className="c3 med-c12">
          <h3 className="heading-small half-push-bottom">Christmas hours</h3>
          <ul className="push-bottom">
            <li>23rd - 24th Dec: 5pm - 10pm</li>
            <li>25th - 26th Dec: Closed</li>
            <li>27th Dec: 5pm - 10pm</li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
