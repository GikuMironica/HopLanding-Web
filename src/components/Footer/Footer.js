import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <nav class="footer">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <h4>Company</h4>
            <div className="about-section">
              <Link to="/about-us">About us</Link>
            </div>
          </div>
          <div className="col-md-4">
            <h4>Legal entities</h4>
            <div className="about-section">
              <Link to="/about-us">Privacy policy</Link>
            </div>
            <div className="about-section">
              <Link to="/about-us">Terms and services</Link>
            </div>
          </div>
          <div className="col-md-4">
            <h4>Legal entities</h4>
            <div className="about-section">
              <Link to="/about-us">Privacy policy</Link>
            </div>
            <div className="about-section">
              <Link to="/about-us">Terms and services</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
