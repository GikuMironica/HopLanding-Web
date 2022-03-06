import React from "react";
import "./Team.css";
import LinkedinLogo from "../../assets/images/linkedin.svg";
import GithubLogo from "../../assets/images/github.svg";
import { useTranslation } from "react-i18next";
const CardMember = ({
  role,
  teamMember,
  memberInfo,
  memberIcon,
  linkedIn,
  github,
  skills,
  hasGithub,
}) => {
  const { t, i18n } = useTranslation();

  return (
    <div class="card-container">
      <span class="pro">{role}</span>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <img
          class="round"
          src={memberIcon}
          style={{ height: 144, width: 144 }}
          alt="user"
        />
      </div>
      <h4>{teamMember}</h4>
      <h6
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <img
          src={LinkedinLogo}
          style={{
            marginRight: 8,
            color: "#0077b5",
            height: 20,
            cursor: "pointer",
          }}
          onClick={() =>
            window.open(`https://www.linkedin.com/in/${linkedIn}`, "_blank")
          }
        />
        {hasGithub && (
          <img
            src={GithubLogo}
            style={{ height: 20, cursor: "pointer" }}
            onClick={() =>
              window.open(`https://github.com/${github}`, "_blank")
            }
          />
        )}
      </h6>
      <p style={{ padding: 5 }}>{memberInfo}</p>
      <div class="skills">
        <h6>{t("team.skills")}</h6>
        <ul>
          {skills.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default CardMember;
