import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import AGB from "../../assets/legal/AGB_HopAut_korrigiert_Leo.md";
import GDPr from "../../assets/legal/GDPR_English_korrigiert_Leo.md";

import "./Privacy.css";
import { useTranslation } from "react-i18next";
function GDPR() {
  const [agb, setAgb] = useState("");
  const [gdpr, setGDPR] = useState("");
  const [checkedA, setChecked] = useState(false);
  const { i18n } = useTranslation();
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
        <div
          className="privacy-policy"
          style={{ width: "100%", wordBreak: "break-word" }}
        >
          <ReactMarkdown children={i18n.language === "en" ? gdpr : agb} />
        </div>
      </div>
    </div>
  );
}

export default GDPR;
