import React, { useState, useEffect } from "react";
import "./Navbar.css";
function Navbar() {
  const [active, setActive] = useState(0);

  const links = [
    { id: 0, text: "About us" },
    { id: 1, text: "Register" },
  ];

  const setActiveLink = (index) => {
    setActive(index);
  };
  return (
    <div class="container">
      <nav class="navbar navbar-expand-md navbar-light">
        <a class="navbar-brand" href="/">
          Hopout
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
                    onClick={() => setActiveLink(index)}
                  >
                    <a className="nav-link">{item.text}</a>
                  </li>
                </>
              );
            })}
            <li className="nav-item get-started">
              <a className="nav-link">Login</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
