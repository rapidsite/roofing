import React from "react";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <section id="contact" className="payment-processing-contact">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div 
                className="contact-content-box"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <h3>Ready to get Started?</h3>
                <p>No setup costs or contract - start taking payments today</p>
              </div>
            </div>

            <div className="col-lg-6">
              <div 
                className="contact-connect"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <Link href="/signin" className="btn btn-primary">
                  Sign Up Now
                </Link>

                <a href="mailto:genial@gmail.com" className="talk-to-sales">
                  Talk to Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
