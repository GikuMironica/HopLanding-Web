import React from "react";
import "./About.css";
import Img3 from "../../assets/images/ab3.png.jpg";
import Img4 from "../../assets/images/ab4.png.jpg";
import Play from "../../assets/images/google-play-badge.png";
import Apple from "../../assets/images/apple-download-badge.svg";

function About() {
  return (
    <div className="container about-page">
      <div className="row">
        <div className="our-mission">
          <h1>Our mission</h1>
          <div className="row">
            <div className="col-md-6 my-5">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
            </div>
            <div className="col-md-4">
              <img src={Img4} style={{ width: 500 }} />
            </div>
          </div>
        </div>
      </div>
      <div className="our-mission-2">
        <div className="row d-flex">
          <div className="col-md-5 order-sm-1">
            <img src={Img3} style={{ width: 400 }} />
          </div>
          <div className="col-md-6 my-5 order-sm-2" style={{ marginLeft: 40 }}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="hopout">
        <div className="row">
          <div className="col-md-7">
            <h1>What is Hopout ?</h1>
          </div>
          <div className="col-md-5">
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-5 features">
        <h1 style={{ textAlign: "center" }} className="my-5">
          Features
        </h1>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h4 className="mb-0">Lorem ipsum</h4>
              </div>

              <div className="collapse show">
                <div className="card-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h4 className="mb-0">Lorem ipsum</h4>
              </div>

              <div className="collapse show">
                <div className="card-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h4 className="mb-0">Lorem ipsum</h4>
              </div>

              <div className="collapse show">
                <div className="card-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="download-now">
          <h1>What are you waiting for ? </h1>
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
  );
}

export default About;
