import React from "react";

const About = () => {
  return (
    <>
      <section id="about" className="about-area ptb-100">
        <div className="container">
          <div className="row justify-content-center">
            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="single-about-box">
                <div className="icon">
                  <i className="fas fa-camera"></i>
                </div>
                <h3>Camera Filter</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="single-about-box">
                <div className="icon">
                  <i className="fas fa-fighter-jet"></i>
                </div>
                <h3>Fast and Optimized</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>

            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="single-about-box">
                <div className="icon">
                  <i className="far fa-hand-pointer"></i>
                </div>
                <h3>Drag and Drop</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-inner-area">
          <div className="container-fluid">
            <div className="row h-100 justify-content-center align-items-center">
              <div className="col-lg-6 col-md-12">
                <div 
                  className="about-image"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="500"
                >
                  <img src="/images/laptop.png" alt="about" />
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div className="about-inner-content">
                  <div 
                    className="about-item" 
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                  >
                    <div className="icon">
                      <i className="fas fa-phone"></i>
                    </div>
                    <h3>Free Calling Service</h3>
                    <p>
                      Plan ahead by day, week, or month, and see project status
                      at a glance. Search and filter to focus in on anything
                      form a single project to an individual person's workload.
                    </p>
                  </div>

                  <div 
                    className="about-item" 
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="300"
                  >
                    <div className="icon">
                      <i className="fas fa-gift"></i>
                    </div>
                    <h3>Daily Free Gift</h3>
                    <p>
                      Plan ahead by day, week, or month, and see project status
                      at a glance. Search and filter to focus in on anything
                      form a single project to an individual person's workload.
                    </p>
                  </div>

                  <div 
                    className="about-item" 
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <div className="icon">
                      <i className="fas fa-qrcode"></i>
                    </div>
                    <h3>QR Code Scaner</h3>
                    <p>
                      Plan ahead by day, week, or month, and see project status
                      at a glance. Search and filter to focus in on anything
                      form a single project to an individual person's workload.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
