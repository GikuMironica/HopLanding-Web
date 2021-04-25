import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import Select from "react-select";

function Footer() {
  const options = [
    { value: "de", label: "German" },
    { value: "en", label: "English" },
  ];

  const customStyles = {
    control: () => ({
      width: "50%",
    }),
  };
  return (
    <div>
      <nav class="footer">
        <div className="container">
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
                <Link to="/legal/privacy">Privacy policy</Link>
              </div>
              <div className="about-section">
                <Link to="/legal/terms">Terms and services</Link>
              </div>
            </div>
            <div className="col-md-4">
              <Select options={options} />
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
