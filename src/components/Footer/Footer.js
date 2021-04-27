import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import Select from "react-select";
import { useTranslation } from "react-i18next";
function Footer() {
  const options = [
    { value: "de", label: "German" },
    { value: "en", label: "English" },
  ];

  const { t, i18n } = useTranslation();

  const customStyles = {
    control: () => ({
      width: "50%",
    }),
  };

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.value);
    localStorage.setItem("language", JSON.stringify(event.value));
  };

  return (
    <div>
      <nav class="footer">
        <div className="container clearfix">
          <div className="row d-flex justify-content-start">
            <div className="col-md-4">
              <h4>{t("footer.company")}</h4>
              <Link to="/about-us">{t("footer.about")}</Link>
              <Link to="/legal/impressum">{t("footer.impressum")}</Link>
            </div>
            <div className="col-md-4">
              <h4>{t("footer.legal")}</h4>
              <Link to="/legal/privacy">{t("footer.privacy")}</Link>
              <Link to="/legal/terms">{t("footer.terms")}</Link>
            </div>
            <div className="col-md-4">
              <h4>{t("footer.lang")}</h4>
              <Select options={options} onChange={changeLanguage} />
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
