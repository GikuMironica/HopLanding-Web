import React, { useEffect, useState } from "react";
import queryString from "query-string";
import axios from "axios";
import ConfirmEmailIconSvg from "../../assets/images/confirm_email.svg";

const ConfirmEmail = () => {
  const queryStringParams = queryString.parse(window.location.search);

  const [showConfirmButton, setConfirmButton] = useState(false);
  const [showConfirmed, setRegisterConfirmed] = useState(false);

  useEffect(() => {
    if (queryStringParams) {
      if (queryStringParams.token !== "" && queryStringParams.userId !== "") {
        confirm();
      }
    }
  }, []);

  const confirm = () => {
    let obj = {
      token: queryStringParams.token,
      email: queryStringParams.email,
    };

    axios
      .get(
        `https://hop-out.com/api/v1/identity/resetpassword?email=${obj.email}&token=${obj.token}`,
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
    <div>{showConfirmed && <p>Temporary password successfully created</p>}</div>
  );
};

export default ConfirmEmail;
