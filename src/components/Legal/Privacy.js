import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import DatenSchutz from "../../assets/legal/Datenschutz_HopAut_korrigiert_Leo.md";
import PrivacyPolicy from "../../assets/legal/PrivacyPolicy_English.md";

import "./Privacy.css";
import { useTranslation } from "react-i18next";
function Privacy() {
  const [daten, setDaten] = useState("");
  const [privacy, setPrivacy] = useState("");
  const [checkedA, setChecked] = useState(false);
  const { i18n } = useTranslation();

  const fetchPrivacy = () => {
    fetch(PrivacyPolicy)
      .then((response) => response.text())
      .then((text) => {
        setPrivacy(text);
      });
  };

  const fetchDaten = () => {
    fetch(DatenSchutz)
      .then((response) => response.text())
      .then((text) => {
        setDaten(text);
      });
  };

  useEffect(() => {
    fetchDaten();
    fetchPrivacy();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div
          className="privacy-policy"
          style={{ width: "100%", wordBreak: "break-word" }}
        >
          <ReactMarkdown children={i18n.language === "en" ? privacy : daten} />
        </div>
      </div>
    </div>
  );
}

export default Privacy;
