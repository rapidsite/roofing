import React from "react";

const Pricing = () => {
  return (
    <>
      <section id="pricing" className="pricing-area ptb-100 bg-f5fbff">
        <div className="container">
          <div className="car-subscription-section-title">
            <span>Pricing</span>
            <h2>Genial Monthly Plans</h2>
            <img src="/images/car-icon.png" alt="car-icon" />
          </div>

          <div className="row justify-content-center">
            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="single-pricing">
                <div className="pricing-header">
                  <div className="icon">
                    <i className="fas fa-tachometer-alt"></i>
                  </div>

                  <h3>Economy</h3>
                </div>

                <ul className="pricing-features">
                  <li>
                    <i className="fas fa-check-circle"></i> insurance included
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Toyota Yaris or
                    Similar
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> insurance included
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Toyota Yaris or
                    Similar
                  </li>
                </ul>

                <div className="price">
                  $499
                  <span>Per month + tax</span>
                </div>

                <a href="#" className="select-btn">
                  Select
                </a>
              </div>
            </div>

            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="single-pricing active">
                <div className="pricing-header">
                  <div className="icon">
                    <i className="fas fa-tachometer-alt"></i>
                  </div>

                  <h3>Standard</h3>
                </div>

                <ul className="pricing-features">
                  <li>
                    <i className="fas fa-check-circle"></i> insurance included
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Toyota Yaris or
                    Similar
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> insurance included
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Toyota Yaris or
                    Similar
                  </li>
                </ul>

                <div className="price">
                  $549
                  <span>Per month + tax</span>
                </div>

                <a href="#" className="select-btn">
                  Select
                </a>
              </div>
            </div>

            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="single-pricing">
                <div className="pricing-header">
                  <div className="icon">
                    <i className="fas fa-tachometer-alt"></i>
                  </div>

                  <h3>Midsize</h3>
                </div>

                <ul className="pricing-features">
                  <li>
                    <i className="fas fa-check-circle"></i> insurance included
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Toyota Yaris or
                    Similar
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> insurance included
                  </li>
                  <li>
                    <i className="fas fa-check-circle"></i> Toyota Yaris or
                    Similar
                  </li>
                </ul>

                <div className="price">
                  $649
                  <span>Per month + tax</span>
                </div>

                <a href="#" className="select-btn">
                  Select
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
