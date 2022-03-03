import React from "react";
import CardMember from "./CardMember";
import "./Team.css";

const Team = () => {
  const team = [
    { teamMember: "Gheorge Mironica", role: "CEO" },
    { teamMember: "Ivailo Gatev", role: "COO" },
    { teamMember: "Tonislav Tachev", role: "CTO" },
  ];

  return (
    <div className="container">
      <div className="team-members">
        <h3 style={{ textAlign: "center" }}>Meet the team behind the idea</h3>
        <div className="team-member-cards-container">
          {team.map((item) => {
            return <CardMember role={item.role} teamMember={item.teamMember} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
