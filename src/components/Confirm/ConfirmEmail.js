import React, { useEffect, useState } from "react";
import queryString from "query-string";
import axios from "axios";
import ConfirmEmailIconSvg from "../../assets/images/confirm_email.svg";
import "./confirm.css";

const ConfirmEmail = () => {
  const queryStringParams = queryString.parse(window.location.search);

  const [showConfirmButton, setConfirmButton] = useState(false);
  const [showConfirmed, setRegisterConfirmed] = useState(false);

  useEffect(() => {
    if (queryStringParams) {
      if (queryStringParams.token !== "" && queryStringParams.userId !== "") {
        setConfirmButton(true);
      }
    }
  }, []);

  const confirm = () => {
    let obj = {
      token: queryStringParams.token,
      userId: queryStringParams.userId,
    };

    axios
      .get(
        `https://hop-out.com/api/v1/identity/confirmemail?userId=${obj.userId}&token=${obj.token}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((data) => {
        if (data.status === 200) {
          setRegisterConfirmed(true);
        }
      });
  };

  return (
    <div className="confirmWrapper">
      {showConfirmed && (
        <>
          <img src={ConfirmEmailIconSvg} className="confirm-image" />
          <p className="confirm-success-title">Email successfully confirmed</p>
        </>
      )}
    </div>
  );
};

export default ConfirmEmail;
