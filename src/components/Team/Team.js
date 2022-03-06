import React from "react";
import CardMember from "./CardMember";
import "./Team.css";
import Slider from "react-slick";
import Giku from "../../assets/images/Gicu.png";
import Tony from "../../assets/images/Tony.png";
import Ivo from "../../assets/images/Ivo.png";
import Livia from "../../assets/images/Livia.png";
import Braz from "../../assets/images/Braz.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
const Team = () => {
  const { t, i18n } = useTranslation();

  const team = [
    {
      teamMember: "Gheorge Mironica",
      role: "CEO",
      memberInfo:
        "Co-founder of Hopaut and leader of this team of young professionals.",
      icon: Giku,
      linkedIn: "gheorghemironica/",
      github: "GikuMironica",
      skills: ["C#", ".NET 6", "Flutter", "AWS"],
      hasGithub: true,
    },
    {
      teamMember: "Ivailo Gatev",
      role: "BE",
      memberInfo: "Responsible for software quality, system performance.",
      icon: Ivo,
      linkedIn: "ivaylo-gatev-b68842180/",
      github: "IvayloGatev",
      skills: ["C#", ".NET", "Flutter", "Java"],
      hasGithub: true,
    },
    {
      teamMember: "Tonislav Tachev",
      role: "UI/UX",
      memberInfo:
        "An indispensable part of the team responsible for the app UI/UX.",
      icon: Tony,
      linkedIn: "tonislav-tachev-b0a336190/",
      github: "TonislavTachev",
      skills: ["React", "React Native", "Node.js", "Express"],
      hasGithub: true,
    },
    {
      teamMember: "Livia Mironica",
      role: "Design",
      memberInfo:
        "Responsible for the business development and digital marketing.",
      icon: Livia,
      linkedIn: "livia-mironica-412729183/",
      github: "GikuMironica",
      skills: ["Google AdWord", "Facebook Ads", "Business"],
      hasGithub: false,
    },
    {
      teamMember: "Braz Castana",
      role: "BE",
      memberInfo: "He's not a magician, but he may look like one.",
      icon: Braz,
      linkedIn: "braz-c2782/",
      github: "brazc",
      skills: ["Python", "Flutter", "Java"],
      hasGithub: true,
    },
  ];

  const settings = {
    dots: true,
    slidesToShow: 3,
    arrows: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slides = team.map((item, index) => (
    <CardMember
      role={item.role}
      key={index}
      teamMember={item.teamMember}
      memberInfo={item.memberInfo}
      memberIcon={item.icon}
      linkedIn={item.linkedIn}
      github={item.github}
      skills={item.skills}
      hasGithub={item.hasGithub}
    />
  ));

  return (
    <div className="container">
      <div className="team-members">
        <h3 style={{ textAlign: "center" }}>{t("team.meet")}</h3>
        <div className="team-member-cards-container">
          <Slider {...settings}>{slides}</Slider>
        </div>
      </div>
    </div>
  );
};

export default Team;
