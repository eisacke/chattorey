import React from "react";
import footerStyles from "./footer.module.styl";

const Footer = () => (
  <footer className={footerStyles.container}>
    <div className="grid">
      <div className="row">
        <div className="c4 med-c12 med-push-bottom">
          <h3 className="heading-small half-push-bottom">Find us</h3>
          <p className="no-push">
            65 Wrotham Road,
            <br />
            Gravesent,
            <br />
            Kent,
            <br />
            DA11 0QB
          </p>
        </div>
        <div className="c4 med-c12 med-push-bottom">
          <h3 className="heading-small half-push-bottom">Contact us</h3>
          <ul className="push-bottom">
            <li>info@chattorey.com</li>
            <li>01474 322123</li>
          </ul>

          <p className="no-push">
            <strong>We accept cash only.</strong>
          </p>
        </div>
        <div className="c4 med-c12">
          <h3 className="heading-small half-push-bottom">Opening times</h3>
          <ul className="push-bottom">
            <li>Monday: Closed</li>
            <li>Tuesday - Friday: 5pm - 10pm</li>
            <li>Saturday - Sunday: 12.30pm - 10pm</li>
          </ul>
          <p className="no-push">
            <em>We are open on bank holidays.</em>
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
