import React from "react";
import Img from "../image/img1.jpg";
import "./home.css";

const Home = () => {
  return (
    <div className="container-fluid home">
      <div className="left-side">
        <h4>
          Hello, I'M <span>Muhammad Talha</span>
        </h4>
        <h2>mern stack developer</h2>
        <p>
          Knack of building applications with front and back end operations.
        </p>
        <div className="bnt-container">
          <button className="btn-default">Hire Me</button>
          <a
            className="btn-default"
            href="resume.pdf"
            download="M.Talha resume.pdf"
          >
            Get Resume
          </a>
        </div>
      </div>
      <div className="right-side">
        <div className="clip-circle">
          <img src={Img} alt="img" className="d-block w-100" />
        </div>
      </div>
    </div>
  );
};

export default Home;
