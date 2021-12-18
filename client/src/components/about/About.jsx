import React from "react";
import Img from "../../image/img.jpg";
import "./about.css";

const About = () => {
  return (
    <>
      <h1 id="about">About Me</h1>
      <div className="about container-fluid">
        <div className="container-lg">
          <div className="left-side">
            <img src={Img} alt="my img" className="d-block" />
          </div>
          <div className="right-side">
            <p className="about-detail">
              Full stack web developer with background knowledge of MERN stacks
              with redux, along with a knack of building applications with
              utmost efficiency. Strong professional with a BSC willing to be an
              asset for an organization.
            </p>
            <h5>Here are a Few Highlights:</h5>
            <p>
              <i class="fas fa-circle"></i>
              Full Stack web and mobile development
            </p>
            <p>
              <i class="fas fa-circle"></i>
              Interactive Front End as per the design
            </p>
            <p>
              <i class="fas fa-circle"></i>
              Reactjs and Redux
            </p>
            <p>
              <i class="fas fa-circle"></i>
              Redux for State Mnanagement
            </p>
            <p>
              <i class="fas fa-circle"></i>
              Building REST API
            </p>
            <p>
              <i class="fas fa-circle"></i>
              Managing database
            </p>
            <div className="btn-continer mt-4">
              <button href="#" className="btn-default hire-btn">
                Hire
              </button>
              <a
                href="resume.pdf"
                className="btn-default res-btn "
                download="M.Talha resume.pdf"
              >
                Get Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
