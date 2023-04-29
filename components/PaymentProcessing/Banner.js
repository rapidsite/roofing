import React from "react";

const Banner = () => {
  return (
    <>
      <div id="home" className="payment-processing-banner">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12 p-0">
              <div className="payment-processing-banner-content">
                <h1
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  The New Standard in Online Payments
                </h1>

                <p
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  It should be noted that although application software is
                  thought of as a program, it can be anything that runs on a
                  computer.
                </p>

                <ul
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <li>All popular payment methods</li>
                  <li>Payments around the world</li>
                  <li>In-depth data insights</li>
                </ul>

                <a 
                  href="#contact" 
                  className="btn btn-primary"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  Get Started!
                </a>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 p-0">
              <div className="payment-processing-banner-image">
                <img src="/images/payment-banner.jpg" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
