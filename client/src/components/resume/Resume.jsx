import React from "react";
import "./resume.css";

const Resume = () => {
  return (
    <>
      <h1 id="resume">Resume</h1>
      <div
        className=" accordion resume container-lg d-flex"
        id="accordionExample"
      >
        <div className="accordion-item left-side container-fluid">
          <div className="bullet-icons">
            <p id="educationOne">
              <i
                className="fas fa-user-graduate"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#education"
                aria-expanded="true"
                aria-controls="education"
              ></i>
            </p>
            <p id="workOne">
              <i
                className="fas fa-history"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#work"
                aria-expanded="true"
                aria-controls="work"
              ></i>
            </p>
            <p id="programmingSkill">
              <i
                className="fas fa-laptop-code"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#programming"
                aria-expanded="true"
                aria-controls="programming"
              ></i>
            </p>
            <p id="projectOne">
              <i
                className="fas fa-chart-bar"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#project"
                aria-expanded="true"
                aria-controls="project"
              ></i>
            </p>
            <p id="interestOne">
              <i
                className="fas fa-palette"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#interest"
                aria-expanded="true"
                aria-controls="interest"
              ></i>
            </p>
          </div>
          <div className="bullet-text">
            <div className="" id="educationOne">
              <p
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#education"
                aria-expanded="true"
                aria-controls="education"
              >
                Educations
              </p>
            </div>
            <div id="workOne">
              <p
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#work"
                aria-expanded="false"
                aria-controls="work"
              >
                work History
              </p>
            </div>
            <div id="programmingSkill">
              <p
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#programming"
                aria-expanded="false"
                aria-controls="programming"
              >
                programming Skills
              </p>
            </div>
            <div id="projectOne">
              <p
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#project"
                aria-expanded="false"
                aria-controls="project"
              >
                Projects
              </p>
            </div>
            <div id="interestOne">
              <p
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#interest"
                aria-expanded="false"
                aria-controls="interest"
              >
                interests
              </p>
            </div>
          </div>
        </div>
        <div className="right-side accordion-item">
          <div
            id="education"
            className="accordion-collapse educations collapse show fade"
            aria-labelledby="educationOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="edu">
                <div className="institute">
                  <p className="uni">
                    <i className="fas fa-circle"></i>Superior University, Lahore
                    Pk
                  </p>
                  <p className="deg">(MCS) Master of Computer Science</p>
                </div>
                <div className="year">2019-2021</div>
              </div>
              <div className="edu">
                <div className="institute">
                  <p className="uni">
                    <i className="fas fa-circle"></i>Superior College, Lahore Pk
                  </p>
                  <p className="deg">(BCS) Bacholor of Computer Science</p>
                </div>
                <div className="year">2017-2019</div>
              </div>
              <div className="edu">
                <div className="institute">
                  <p className="uni">
                    <i className="fas fa-circle"></i>Superior College, Daska Pk
                  </p>
                  <p className="deg">(ICS) Intermediate of Computer Science</p>
                </div>
                <div className="year">2015-2017</div>
              </div>
            </div>
          </div>
          <div
            id="work"
            className="accordion-collapse collapse work fade"
            aria-labelledby="workOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="edu">
                <div className="institute">
                  <p className="uni">
                    <i className="fas fa-circle"></i>wGroup Tech
                  </p>
                  <p className="deg">FULL STACK DEVELOPER INTERN</p>
                </div>
                <div className="year">2019-2021</div>
              </div>
              <div className="works">
                <p className="des">
                  I’m a fresh Graduate. My Objective is to search for a position
                  that will allow me to improve my current programming,
                  Communication and team work skills. From this position, I also
                  seek the opportunity to learn new skills for future use I’m
                  very confident that will be excellent fit for your
                  organization.
                </p>
                <p className="des">
                  - Developed an ecommerce website for client with the dashboard
                  for managing the products, managing reviews, users, payment
                  etc. .
                </p>
                <p className="des">
                  - Integrated the web app with backend services to create new
                  user onboarding application with dynamic form content.
                </p>
                <p className="des">
                  - I stretch my mental capacity to develope UI as per the given
                  designs.
                </p>
              </div>
            </div>
          </div>
          <div
            id="programming"
            className="accordion-collapse skills collapse fade"
            aria-labelledby="programmingSkill"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="skill">
                <div className="institute">
                  <p className="uni">
                    <i className="fas fa-circle"></i>JavaScript
                  </p>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      50%
                    </div>
                  </div>
                </div>
              </div>
              <div className="skill">
                <div className="institute">
                  <p className="uni">
                    <i className="fas fa-circle"></i>Mongo DB
                  </p>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "40%" }}
                      aria-valuenow="40"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      40%
                    </div>
                  </div>
                </div>
              </div>
              <div className="skill">
                <div className="institute">
                  <p className="uni">
                    <i className="fas fa-circle"></i>ExpressJs
                  </p>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      50%
                    </div>
                  </div>
                </div>
              </div>
              <div className="skill">
                <div className="institute">
                  <p className="uni">
                    <i className="fas fa-circle"></i>ReactJs
                  </p>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "60%" }}
                      aria-valuenow="60"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      60%
                    </div>
                  </div>
                </div>
              </div>
              <div className="skill">
                <div className="institute">
                  <p className="uni">
                    <i className="fas fa-circle"></i>NodeJS
                  </p>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "40%" }}
                      aria-valuenow="40"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      40%
                    </div>
                  </div>
                </div>
              </div>
              <div className="skill">
                <div className="institute">
                  <p className="uni">
                    <i className="fas fa-circle"></i>ReduxJS
                  </p>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "60%" }}
                      aria-valuenow="60"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      60%
                    </div>
                  </div>
                </div>
              </div>
              <div className="skill">
                <div className="institute">
                  <p className="uni">
                    <i className="fas fa-circle"></i>CSS
                  </p>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "65%" }}
                      aria-valuenow="65"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >
                      65%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="project"
            className="accordion-collapse project collapse fade"
            aria-labelledby="projectOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="edu">
                <div className="institute">
                  <p className="uni">
                    <i className="fas fa-circle"></i>Personal Portfolio Website
                  </p>
                  <p className="deg">Technologies Used: React JS, Bootsrap</p>
                  <p className="des">
                    A Personal Portfolio website to showcase all my details and
                    projects at one place.
                  </p>
                </div>
                <div className="year">2019-2021</div>
              </div>
              <div className="edu">
                <div className="institute">
                  <p className="uni">
                    <i className="fas fa-circle"></i>Spotify-Clone
                  </p>
                  <p className="deg">
                    Technologies Used:Mongo DB, Express Js, Node Js, Redux.
                  </p>
                  <p className="des">
                    An Spotify application designed to online music
                  </p>
                </div>
                <div className="year">2017-2019</div>
              </div>
              <div className="edu">
                <div className="institute">
                  <p className="uni">
                    <i className="fas fa-circle"></i>Ecommerce Website
                  </p>
                  <p className="deg">
                    Technologies Used: Mongo DB, Epress Js, React Js, Node JS,
                    Redux, Bootstrap.
                  </p>
                  <p className="des">
                    Online ecommerce website for showcasing and selling products
                    onlne with payment system integration, with Stripe
                  </p>
                </div>
                <div className="year">2015-2017</div>
              </div>
            </div>
          </div>
          <div
            id="interest"
            className="accordion-collapse interest collapse fade"
            aria-labelledby="interestOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <div className="edu">
                <div>
                  <p className="uni">
                    <i className="fas fa-circle"></i>Teaching
                  </p>
                  <p className="des">
                    Apart from being a tech enthusiast and a code writer, i also
                    love to teach people what i know simply because i believe in
                    sharing.
                  </p>
                </div>
              </div>
              <div className="edu">
                <div>
                  <p className="uni">
                    <i className="fas fa-circle"></i>Music
                  </p>
                  <p className="des">
                    Listening to soothing music is something i can never
                    compromise with, skimming through Spotify's pop songs charts
                    is at times the best stress reliever that i can get my hands
                    on.
                  </p>
                </div>
              </div>
              <div className="edu">
                <div>
                  <p className="uni">
                    <i className="fas fa-circle"></i>Competitive Gaming
                  </p>
                  <p className="des">
                    I like to challenge my reflexes a lot while competing in
                    football games, pushing the rank and having interactive
                    gaming sessions excites me the most.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
