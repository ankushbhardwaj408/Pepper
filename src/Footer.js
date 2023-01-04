import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__first">
        <div className="appnav__first">
          <div className="appnav__logo">
            <div className="appnav__logofirst"></div>
            <div className="appnav__logosecond"></div>
          </div>
          <strong className="name" style={{ color: "white" }}>
            Pepper
          </strong>
        </div>
        <div className="footer__text" style={{ color: "white" }}>
          Pepper is one of the most reliable delivery platform management
          service to automate your work.
        </div>
        <button className="getstarted" style={{ color: "white" }}>
          Get started
        </button>
        <div>
          <LinkedInIcon style={{ color: "white" }}></LinkedInIcon>
          <TwitterIcon style={{ color: "white" }}></TwitterIcon>
          <EmailIcon style={{ color: "white" }}></EmailIcon>
        </div>
      </div>
      <div className="footer__second">
        <div className="list1">
          <strong style={{ color: "white" }}>Pages Main</strong>
          <ul>
            <li>Home</li>
            <li>Blog</li>
            <li>Blog Template</li>
            <li>Pricing</li>
            <li>Pricing Ecommerce</li>
            <li>About</li>
            <li>Careers</li>
            <li>Careers Template</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="list1">
          <strong style={{ color: "white" }}>Template Pages</strong>
          <ul>
            <li>Style Guide</li>
            <li>Licenses</li>
            <li>ChangeLog</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
