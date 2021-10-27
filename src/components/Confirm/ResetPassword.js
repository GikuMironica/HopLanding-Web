import React, { useEffect, useState } from "react";
import queryString from "query-string";
import axios from "axios";
import ConfirmEmailIconSvg from "../../assets/images/reset_password.svg";
import "./confirm.css";
import { useTranslation } from "react-i18next";

const ResetPassword = () => {
  const { t } = useTranslation();

  return (
    <div className="confirmWrapper">
      <img
        src={ConfirmEmailIconSvg}
        className="confirm-image"
        style={{ marginLeft: 100 }}
      />
      <p className="confirm-success-title">{t("confirm.password")}</p>
      <p>{t("confirm.passwordInstruction")}</p>
    </div>
  );
};

export default ResetPassword;
