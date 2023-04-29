import React from "react";
import { Progress } from "react-sweet-progress";

const Skill = () => {
  return (
    <>
      <section id="skill" className="skill-area">
        <div className="container-fluid p-0">
          <div className="row m-0">
            <div className="col-lg-6 col-md-12 p-0">
              <div className="skill-content ptb-100">
                <div className="freelancer-section-title">
                  <h2>
                    Some of My <span>Skills</span>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>

                <div className="skills">
                  <div className="skill-item">
                    <div className="skill-header">
                      <h3 className="skill-title">Branding</h3>
                    </div>

                    <div className="skill-bar">
                      <Progress percent={98} />
                    </div>
                  </div>

                  <div className="skill-item">
                    <div className="skill-header">
                      <h3 className="skill-title">Marketing</h3>
                    </div>

                    <div className="skill-bar">
                      <Progress percent={92} />
                    </div>
                  </div>

                  <div className="skill-item">
                    <div className="skill-header">
                      <h3 className="skill-title">Design</h3>
                    </div>

                    <div className="skill-bar">
                      <Progress percent={60} />
                    </div>
                  </div>

                  <div className="skill-item">
                    <div className="skill-header">
                      <h3 className="skill-title">Development</h3>
                    </div>

                    <div className="skill-bar">
                      <Progress percent={75} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 p-0">
              <div className="skill-image">
                <img src="/images/skill-bg.jpg" alt="skill-image" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
