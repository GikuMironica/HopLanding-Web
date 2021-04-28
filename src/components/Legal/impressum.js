import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function Impressum() {
  const { t, i18n } = useTranslation();

  return (
    <div className="container">
      <div
        className="row"
        style={{
          marginTop: 50,
          marginLeft: 30,
        }}
      >
        <div className="impressum">
          <h1 style={{paddingBottom: 25}}>{t("impressum.title")}</h1>
          <p>{t("impressum.subtitle")}</p>
          <div className="main-info">
            <div>
              <address>
              <strong>HopAut UG (haftungsbeschränkt)</strong>
              <p>Speditionstraße 15A,<br />
                40221 Düsseldorf<br />
                {t("impressum.germany")}
              </p>
              </address>
              <p>
                <strong>{t("impressum.website")}</strong>: <a href="//www.hopaut.com">www.hopaut.com</a><br/>
                <strong>Email</strong>: legal at hopaut.com
              </p>
            </div>
          </div>
          <div className="contact-info">
            <div>
              <h5><strong>{t("impressum.founder-title")}</strong></h5>
              <p>Gheorghe Mironica </p>
            </div>
          </div>
          <div className="contact-info">
            <div>
              <h5><strong>
                {t("impressum.vat-id")}
              </strong>
              </h5>
              <p>DE 337158071</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Impressum;
