import React from "react";
import Link from 'next/link';

const HowWorks = () => {
  return (
    <>
      <section id="how-it-works" className="how-it-works ptb-100">
        <div className="container">
          <div className="payment-processing-section-title">
            <span>Process</span>
            <h2>How It Works</h2>
            <p>
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan lacus vel facilisis.
            </p>
          </div>

          <div className="row justify-content">
            <div className="col-lg-4 col-md-6">
              <div 
                className="single-work-process"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <span>.01</span>
                <h3>Add Customers</h3>
                <p>
                  This should be used to tell a story and talk about your
                  product.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div 
                className="single-work-process"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <span>.02</span>
                <h3>Schedule Payments</h3>
                <p>
                  This should be used to tell a story and talk about your
                  product.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div 
                className="single-work-process"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <span>.03</span>
                <h3>Collect on due Dates</h3>
                <p>
                  This should be used to tell a story and talk about your
                  product.
                </p>
              </div>
            </div>
          </div>

          <div 
            className="alert-info-box"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="400"
          >
            <Link href="#">
              Learn more about collecting Invoice payments{" "}
              <i className="fas fa-long-arrow-alt-right"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowWorks;
