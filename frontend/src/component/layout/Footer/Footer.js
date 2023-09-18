import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer id="footer">
      <div className="leftFooter">
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>BeaWorth</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights {year} &copy; BeaWorth</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a
          href="https://www.linkedin.com/company/beaworth/about/"
          target="_blank"
        >
          <AiFillLinkedin className="footer-icons" />
        </a>
        <a
          href="https://instagram.com/_beaworth_?utm_source=qr&igshid=OGIxMTE0OTdkZA=="
          target="_blank"
        >
          <AiFillInstagram className="footer-icons" />
        </a>
        <a href="https://www.beaworth.com" target="_blank">
          <BsGlobe className="footer-icons" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
