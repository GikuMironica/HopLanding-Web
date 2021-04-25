import React, { useState, useEffect } from "react";

function impressum() {
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
          <h3>HopAut UG (haftungsbeschränkt)</h3>
          <div className="main-info">
            <div>
              <h5>Address Line</h5>
              <p>Speditionstraße 15A, 40221 Düsseldorf</p>
              <p>
                <a href="www.hopaut.com">Website</a>
              </p>
            </div>
          </div>
          <div className="contact-info">
            <div>
              <h5>Founder / Geschäftsführer</h5>
              <p>Gheorghe Mironica </p>
            </div>
          </div>
          <div className="contact-info">
            <div>
              <h5>Headquarters / Sitz der Gesellschaft</h5>
              <p>Speditionstraße 15A, 40221 Düsseldorf</p>
            </div>
          </div>
          <div className="contact-info">
            <div>
              <h5>
                VAT indentification number / Umsatzsteuer-Identifikationsnummer
              </h5>
              <p>DE XXXXXXXXX</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default impressum;
