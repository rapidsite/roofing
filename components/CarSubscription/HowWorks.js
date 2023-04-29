import React from "react";

const HowWorks = () => {
  return (
    <>
      <section id="how-it-works" className="how-it-works ptb-100 bg-f5fbff">
        <div className="container">
          <div className="car-subscription-section-title">
            <span>About</span>
            <h2>How it Works</h2>
            <img src="/images/car-icon.png" alt="image" />
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div
                className="single-work-process"
                data-aos="fade-in"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <span>.01</span>
                <h3>Select Your Car</h3>
                <p>
                  This should be used to tell a story and talk about your
                  product.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="single-work-process"
                data-aos="fade-in"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <span>.02</span>
                <h3>Confirm The Pickup</h3>
                <p>
                  This should be used to tell a story and talk about your
                  product.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="single-work-process"
                data-aos="fade-in"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1200"
                data-aos-delay="600"
              >
                <span>.03</span>
                <h3>Drive</h3>
                <p>
                  This should be used to tell a story and talk about your
                  product.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowWorks;
