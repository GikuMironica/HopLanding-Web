import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import Select from "react-select";
import { useTranslation } from "react-i18next";
import { ArrowForwardOutline } from "react-ionicons";

function Footer() {
  const { t, i18n } = useTranslation();
  const date = new Date();
  return (
    <div>
      <nav className="footer">
        <div className="container clearfix">
          <div className="row d-flex justify-content-start navigation">
            <div className="col-md-4 align-items-start">
              <h4>HopAut</h4>
              <ul className="list-unstyled">
                <li>
                  <Link to="/">{t("header.home")}</Link>
                </li>
                <li>
                  <Link to="/login">{t("header.login")}</Link>
                </li>
                <li>
                  <Link to="/register">{t("header.register")}</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4 align-items-start">
              <h4>{t("footer.company")}</h4>
              <ul className="list-unstyled">
                <li>
                  <Link to="/about-us">{t("footer.about")}</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4 align-items-start">
              <h4>{t("footer.legal")}</h4>
              <ul className="list-unstyled">
                <li>
                  <Link to="/legal/privacy">{t("footer.privacy")}</Link>
                </li>
                <li>
                  <Link to="/legal/terms">{t("footer.terms")}</Link>
                </li>
                <li>
                  <Link to="/legal/impressum">{t("footer.impressum")}</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <div className="row d-flex align-items-center">
              <div className="col-md align-items-end">
                <p>
                  &copy; {date.getUTCFullYear()} Hopaut UG (haftungsbeschränkt)
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Footer;
