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
                Tired of spending endless hours searching for interesting and
                fun activities around you ? You came to the right address! Our
                mission is to make you hop out of your house and join the events
                that you're looking for, find people with the same interests and
                make new connections
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
              Enjoy the endless possibilities of finding new friends, exploring
              different cities and enjoying life all with a few clicks on your
              phone or computer. Don't wait for the perfect opportunity, create
              one yourself!
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
                Hopout is a geosocial mobile and web based application allowing
                user to easily create, attend and explore various types of
                events scattered around their city!
              </p>
            </div>
            <div>
              <p>
                Utilizing GPS tracking, Hopout can pinpoint the user's current
                location and display events in close vacinity, mitigating the
                need to search for hours on end for fun activities!
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
          The horizon is the limit
        </h1>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h4 className="mb-0">Register</h4>
              </div>

              <div className="collapse show">
                <div className="card-body">
                  No more tedious registration processes and endless forms.
                  Register within a minute and Hop Out!
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h4 className="mb-0">Find</h4>
              </div>

              <div className="collapse show">
                <div className="card-body">
                  Whatever you are looking for, whether it's a party or car,
                  bicycle or bike meet, it's all here, don't miss it!
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h4 className="mb-0">Party</h4>
              </div>

              <div className="collapse show">
                <div className="card-body">
                  Are you a party animal? Find your people and make some good
                  memories. Within 2 minutes you can post your party for free
                  and let the others know.
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
