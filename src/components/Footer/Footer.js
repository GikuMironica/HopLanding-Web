import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <nav class="footer">
        <div className="container clearfix">
          <div className="row d-flex justify-content-start">
            <div className="col-md-4">
              <h4>Company</h4>
                <Link to="/about-us">About Us</Link>
            </div>
            <div className="col-md-4">
              <h4>Legal entities</h4>
                <Link to="/legal/privacy">Privacy Policy</Link>
                <Link to="/legal/terms">Terms and Services</Link> 
            </div>
            <div className="col-md-4">
            </div>
          </div>

          <div className="copyright">
            <p>&copy; 2021 Hopaut UG (haftungsbeschränkt)</p>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
