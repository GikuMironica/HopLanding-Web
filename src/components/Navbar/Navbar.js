import React, { useState, useEffect } from "react";
import { withRouter, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Navbar.css";
import Logo from "../../assets/images/logo.png";
import Select from "react-select";

function Navbar({}) {
  const [active, setActive] = useState(0);
  const [isOpened, setOpen] = useState(false);
  const history = useHistory();

  const links = [
    { id: 0, text: "home", link: "/" },
    { id: 1, text: "about", link: "/about-us" },
    { id: 2, text: "team", link: "/team" },
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

  const openNavbar = () => {
    setOpen((isOpened) => !isOpened);
  };

  const options = [
    { value: "de", label: "German" },
    { value: "en", label: "English" },
  ];

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.value);
    localStorage.setItem("language", JSON.stringify(event.value));
  };

  const chosenLanguageIndex = options.indexOf(
    options.find((item) => item.value === i18n.language)
  );

  return (
    <div class="container">
      <nav class="navbar navbar-expand-md navbar-light">
        <a class="navbar-brand" href="/">
          <img src={Logo} style={{ width: 150 }} />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          onClick={openNavbar}
          data-toggle="collapse"
          aria-controls="navbarSupportedContent"
          data-target="#navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class={
            isOpened
              ? "collapse navbar-collapse show"
              : "collapse navbar-collapse"
          }
          id="navbarSupportedContent"
        >
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
            <li className="nav-item">
              <Select
                defaultValue={options[chosenLanguageIndex]}
                options={options}
                onChange={changeLanguage}
              />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
