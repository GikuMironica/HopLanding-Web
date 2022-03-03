import React from "react";
import "./Team.css";
import LinkedinLogo from "../../assets/images/linkedin.svg";
import GithubLogo from "../../assets/images/github.svg";
const CardMember = ({ role, teamMember }) => {
  return (
    <div class="card-container">
      <span class="pro">{role}</span>
      <img
        class="round"
        src="https://randomuser.me/api/portraits/men/1.jpg"
        alt="user"
      />
      <h4>{teamMember}</h4>
      <h6>
        <img
          src={LinkedinLogo}
          style={{
            marginRight: 8,
            color: "#0077b5",
            height: 20,
            cursor: "pointer",
          }}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/tonislav-tachev-b0a336190/",
              "_blank"
            )
          }
        />
        <img
          src={GithubLogo}
          style={{ height: 20, cursor: "pointer" }}
          onClick={() =>
            window.open("https://github.com/TonislavTachev", "_blank")
          }
        />
      </h6>
      <p>
        User interface designer and <br /> front-end developer
      </p>
      <div class="skills">
        <h6>Skills</h6>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node</li>
        </ul>
      </div>
    </div>
  );
};

export default CardMember;
