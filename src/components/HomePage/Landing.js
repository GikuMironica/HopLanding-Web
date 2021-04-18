import React from "react";
import "./Landing.css";
import Hero from "../../assets/images/another_hero.jpg";
import Phone from "../../assets/images/phone.png";
function Landing() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div className="container">
        <div className="hero-banner-1 row">
          <div className="col-md-6"></div>
        </div>
        <div className="main-hero">
          <div className="row justify-content-around">
            <div className="col-4">
            <p className="text-center">Build up a community</p>
            </div>
            <div className="col-6">
          <img src={Phone} className="float-right" style={{height: "60%"}} />
            </div>
          </div>
        </div>
        <div
          className="hero-banner-2 my-4"
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
          <div class="icon-scroll"></div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
