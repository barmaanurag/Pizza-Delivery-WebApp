import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets"; 

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src={assets.footerlogo} alt="Your Pizza Logo" />
          <p>Your favorite pizza, delivered fresh & hot!</p>
        </div>

        {/* Navigation Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#explore-menu">Menu</a></li>
            <li><a href="#app-download">Mobile App</a></li>
            <li><a href="#footer">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><img src={assets.facebook_icon} alt="Facebook" /></a>
            <a href="#"><img src={assets.twitter_icon} alt="Twitter" /></a>
            <a href="#"><img src={assets.linkedin_icon} alt="LinkedIn" /></a>
          </div>
        </div>
      </div>
      <hr />
      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Your Pizza. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
