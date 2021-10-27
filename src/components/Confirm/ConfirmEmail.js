import React, { useEffect, useState } from "react";
import queryString from "query-string";
import axios from "axios";
import ConfirmEmailIconSvg from "../../assets/images/confirm_email.svg";
import "./confirm.css";
import { useTranslation } from "react-i18next";

const ConfirmEmail = () => {
  const queryStringParams = queryString.parse(window.location.search);

  const { t } = useTranslation();

  return (
    <div className="confirmWrapper">
      <img src={ConfirmEmailIconSvg} className="confirm-image" />
      <p className="confirm-success-title">{t("confirm.email")}</p>
      <p>{t("confirm.emailInstruction")}</p>
    </div>
  );
};

export default ConfirmEmail;
