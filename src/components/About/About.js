import React from "react";
import "./About.css";
import Img3 from "../../assets/images/ab3.png.jpg";
import Img4 from "../../assets/images/ab4.png.jpg";
import Play from "../../assets/images/google-play-badge.png";
import Apple from "../../assets/images/apple-download-badge.svg";
import { useTranslation } from "react-i18next";
function About() {
  const { t } = useTranslation();
  return (
    <div className="container about-page">
      <div className="row">
        <div className="our-mission">
          <h2>{t("us.mission")}</h2>
          <div className="row">
            <div className="col-md-6 my-5">
              <p>{t("us.paragraph1")}</p>
            </div>
            <div className="col-md-4">
              <img src={Img4} style={{ width: 500 }} alt="App to discover people nearby or Make friends in Local Area" />
            </div>
          </div>
        </div>
      </div>
      <div className="our-mission-2">
        <div className="row d-flex">
          <div className="col-md-5 order-sm-1">
            <img src={Img3} style={{ width: 400 }} alt="Local Events or Party Finder App" />
          </div>
          <div className="col-md-6 my-5 order-sm-2" style={{ marginLeft: 40 }}>
            <p>{t("us.paragraph2")}</p>
          </div>
        </div>
      </div>
      <div className="hopout">
        <div className="row">
          <div className="col-md-7">
            <h1>{t("us.hopout")}</h1>
          </div>
          <div className="col-md-5">
            <div>
              <p>{t("us.hopout1")}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-5 features">
        <h1 style={{ textAlign: "center" }} className="my-5">
          {t("us.horizon")}
        </h1>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h4 className="mb-0">{t("us.card1-header")}</h4>
              </div>

              <div className="collapse show">
                <div className="card-body">{t("us.card1-text")}</div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h4 className="mb-0">{t("us.card2-header")}</h4>
              </div>

              <div className="collapse show">
                <div className="card-body">{t("us.card2-text")}</div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h4 className="mb-0">{t("us.card3-header")}</h4>
              </div>

              <div className="collapse show">
                <div className="card-body">{t("us.card3-text")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="download-now">
          <h2>{t("us.waiting")}</h2>
          <div className="download-now-buttons">
            <div className="apple">
              <img src={Apple} style={{ width: 122, marginTop: 1 }} alt="Download HopAut App for IOS" />
            </div>
            <div className="google">
              <img
                src={Play} alt="HopAut the best Neighborhood and Local Events Finder App" 
                style={{ width: 152, cursor: "pointer" }}
                onClick={() =>
                  window.open(
                    "https://play.google.com/store/apps/details?id=com.hopaut.hopaut",
                    "_blank"
                  )
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
