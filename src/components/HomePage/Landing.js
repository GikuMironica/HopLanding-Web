import React from "react";
import "./Landing.css";
import Hero from "../../assets/images/another_hero.jpg";
import Phone from "../../assets/images/phone.png";
import Play from "../../assets/images/google-play-badge.png";
import Apple from "../../assets/images/apple-download-badge.svg";
import Hero3 from "../../assets/images/hero_3.jpg";
function Landing() {
  return (
    <div>
      <div className="container">
        <div className="hero-banner-1"></div>
        <div className="main-hero mt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-8 my-3 p-5">
                <div className="main-text-hero">
                  <h1>Find what's happening around you.</h1>
                </div>
                <div className="main-text-hero-alt">
                  <p>Your ultimate event companion.</p>
                </div>
                <div className="download-buttons-row">
                  <div className="apple">
                    <img src={Apple} style={{ width: 122, marginTop: 1 }} />
                  </div>
                  <div className="google" style={{ position: "relative" }}>
                    <img src={Play} style={{ width: 152 }} />
                  </div>
                </div>
                <div style={{ position: "relative", marginTop: 60 }}>
                  <div class="icon-scroll"></div>
                </div>
              </div>
              <div className="col-md-4 phone">
                <div>
                  <img src={Phone} />
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="hero-banner-3"
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="headings" style={{ textAlign: "center" }}>
                  <p>Build up a community</p>
                  <h3>Join the biggest community of party people</h3>{" "}
                </div>
                <img src={Hero} style={{ width: "87%" }} />
              </div>
            </div>
            <div className="row">
              <div className="download-now">
                <h1>Don't wait for the perfect opportunity, hop-out!</h1>
                <div className="download-now-buttons">
                  <div className="apple">
                    <img src={Apple} style={{ width: 122, marginTop: 1 }} />
                  </div>
                  <div className="google">
                    <img src={Play} style={{ width: 152 }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
