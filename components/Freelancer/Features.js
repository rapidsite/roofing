import React from "react";

const Features = () => {
  return (
    <>
      <section id="features" className="boxes-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div 
                className="single-box"
                data-aos="zoom-in-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <i className="fas fa-bezier-curve"></i>
                <h3>Stunning Design</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div 
                className="single-box"
                data-aos="zoom-in-up"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <i className="fas fa-filter"></i>
                <h3>Intelligent Interactions</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div 
                className="single-box"
                data-aos="zoom-in-up"
                data-aos-duration="1200"
                data-aos-delay="600"
              >
                <i className="fas fa-headset"></i>
                <h3>24/7 Support</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
