import React from "react";
import "./Footer.scss";
import Insta from "../../assets/Icons/Icon-instagram.svg";
import Twitter from "../../assets/Icons/Icon-twitter.svg";
import Facebook from "../../assets/Icons/Icon-facebook.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__section">
        <a className="footer__link" href="https://nuthatch.lastelm.software/">
          <h3 className="footer__title">Nuthatch API </h3>
        </a>
        <p className="footer__contact">
          <a
            className="footer__contact-link"
            href="mailto:lastelmsoft@gmail.com"
          >
            lastelmsoft@gmail.com
          </a>
        </p>
      </div>
      <div className="footer__section">
        <h3 className="footer__title">Social Media</h3>
        <ul className="footer__social-list">
          <li className="footer__social-item">
            <a className="footer__social-link" href="#">
              <img className="footer__social-link-img" src={Facebook} />
            </a>
          </li>
          <li className="footer__social-item">
            <a className="footer__social-link" href="#">
              <img className="footer__social-link-img" src={Twitter} />
            </a>
          </li>
          <li className="footer__social-item">
            <a className="footer__social-link" href="#">
              <img className="footer__social-link-img" src={Insta} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
