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
          <h1 style={{paddingBottom: 25}}>Impressum</h1>
          <div className="main-info">
            <div>
              <h5>HopAut UG (haftungsbeschränkt)</h5>
              <p>Speditionstraße 15A,<br />40221 Düsseldorf</p>
              <p>
                <a href="//www.hopaut.com">Website</a>
              </p>
            </div>
          </div>
          <div className="contact-info">
            <div>
              <h5>{t("impressum.founder-title")}</h5>
              <p>Gheorghe Mironica </p>
            </div>
          </div>
          <div className="contact-info">
            <div>
              <h5>{t("impressum.headquarters")}</h5>
              <p>Speditionstraße 15A,<br />40221 Düsseldorf</p>
            </div>
          </div>
          <div className="contact-info">
            <div>
              <h5>
                {t("impressum.vat-id")}
              </h5>
              <p>DE XXXXXXXXX</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Impressum;
