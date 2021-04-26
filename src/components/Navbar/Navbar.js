import React, { useState, useEffect } from "react";
import { withRouter, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Navbar.css";
import Logo from "../../assets/images/logo.png";
function Navbar({}) {
  const [active, setActive] = useState(0);
  const history = useHistory();

  const links = [
    { id: 0, text: "home", link: "/" },
    { id: 1, text: "about", link: "/about-us" },
    { id: 2, text: "register", link: "/register" },
  ];
  const { t, i18n } = useTranslation();
  const setActiveLink = (index, url) => {
    setActive(index);
    history.push(url);
  };

  const goToLogin = () => {
    history.push("/login");
    setActive(-1);
  };
  return (
    <div class="container">
      <nav class="navbar navbar-expand-md navbar-light">
        <a class="navbar-brand" href="/">
          <img src={Logo} style={{ width: 150 }} />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          aria-controls="navbarSupportedContent"
          data-target="#navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            {links.map((item, index) => {
              return (
                <>
                  <li
                    className={
                      index === active ? "nav-item active" : "nav-item"
                    }
                    key={index}
                    onClick={() => setActiveLink(index, item.link)}
                  >
                    <a className="nav-link">{t(`header.${item.text}`)}</a>
                  </li>
                </>
              );
            })}
            <li className="nav-item get-started" onClick={goToLogin}>
              <a className="nav-link">{t("header.login")}</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
