import React from "react";
import "./Login.css";
import Logo from "../../assets/images/logo.png";
import {useTranslation} from "react-i18next";
function Login() {
  const {t} = useTranslation();
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <div className="card login-card">
            <div className="login-logo">
              <img src={Logo} style={{ width: 120 }} />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">{t("auth.email")}</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">{t("auth.password")}</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">{t("auth.confirm")}</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="form-group">
              <button
                type="submit"
                class="btn btn-secondary disabled"
                data-toggle="tooltip"
                data-placement="top"
                title={t("auth.unavailable")}
              >
                Register
              </button>
              <small
                class="form-text text-muted"
                style={{ textAlign: "center", marginTop: 10 }}
              >
                {t("auth.unavailable")}
              </small>
            </div>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
}

export default Login;
