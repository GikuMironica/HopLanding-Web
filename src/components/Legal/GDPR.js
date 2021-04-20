import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import AGB from "../../assets/legal/AGB_HopAut_korrigiert_Leo.md";
import GDPr from "../../assets/legal/GDPR_English_korrigiert_Leo.md";

import "./Privacy.css";
function GDPR() {
  const [agb, setAgb] = useState("");
  const [gdpr, setGDPR] = useState("");
  const [checkedA, setChecked] = useState(false);

  const fetchGDPR = () => {
    fetch(GDPr)
      .then((response) => response.text())
      .then((text) => {
        setGDPR(text);
      });
  };
  const fetchAGB = () => {
    fetch(AGB)
      .then((response) => response.text())
      .then((text) => {
        setAgb(text);
      });
  };

  useEffect(() => {
    fetchAGB();
    fetchGDPR();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="privacy-policy">
          <ReactMarkdown children={gdpr} />
        </div>
      </div>
    </div>
  );
}

export default GDPR;
