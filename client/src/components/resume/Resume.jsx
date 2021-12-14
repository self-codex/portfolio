import React from "react";
import "./resume.css";

const Resume = () => {
  return (
    <>
      <div className="container mt-5 mb-5 d-flex">
        <p className="accordion-btn">
          <a
            class="btn btn-primary"
            data-bs-toggle="collapse"
            href="#multiCollapseExample1"
            role="button"
            aria-expanded="false"
            aria-controls="multiCollapseExample1"
          >
            Toggle first element
          </a>
          <button
            class="btn btn-primary"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#multiCollapseExample2"
            aria-expanded="false"
            aria-controls="multiCollapseExample2"
          >
            Toggle second element
          </button>
        </p>
        <div class="row">
          <div class="col">
            <div class="collapse " id="multiCollapseExample1">
              <div class="card card-body">
                Some placeholder content for the first collapse component of
                this multi-collapse example. This panel is hidden by default but
                revealed when the user activates the relevant trigger.
              </div>
            </div>
          </div>
          <div class="col">
            <div class="collapse " id="multiCollapseExample2">
              <div class="card card-body">
                Some placeholder content for the second collapse component of
                this multi-collapse example. This panel is hidden by default but
                revealed when the user activates the relevant trigger.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
