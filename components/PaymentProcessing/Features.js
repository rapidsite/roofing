import React from "react";
import Link from 'next/link';

const Features = () => {
  return (
    <>
      <section
        id="features"
        className="payment-processing-features ptb-100 bg-f5fbff"
      >
        <div className="container">
          <div 
            className="payment-processing-section-title"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <span>Services</span>
            <h2>Our Features</h2>
            <p>
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan lacus vel facilisis.
            </p>
          </div>

          <div className="row justify-content-center">
            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="single-features-box">
                <i className="fas fa-search-dollar"></i>
                <h3>Advanced Fraud Detection</h3>
              </div>
            </div>

            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="single-features-box">
                <i className="fab fa-shirtsinbulk"></i>
                <h3>Customer Information Manager</h3>
              </div>
            </div>

            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <div className="single-features-box">
                <i className="fas fa-money-check"></i>
                <h3>Payment Types</h3>
              </div>
            </div>

            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="500"
            >
              <div className="single-features-box">
                <i className="fas fa-user-circle"></i>
                <h3>Account Updater</h3>
              </div>
            </div>

            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="600"
            >
              <div className="single-features-box">
                <i className="fas fa-file-invoice-dollar"></i>
                <h3>Invoicing</h3>
              </div>
            </div>

            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="700"
            >
              <div className="single-features-box">
                <i className="fas fa-hand-point-up"></i>
                <h3>Simple Checkout</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
