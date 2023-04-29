import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer-area-two">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-md-6">
              <div 
                className="contact-info"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <h4>Ganial</h4>
                <span>lorem Ipsum donor sit.</span>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div 
                className="contact-info"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <h4>Phone No:</h4>
                <span>
                  <a href="tel:1234567896">(+41) 123 456 7896</a>
                </span>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div 
                className="contact-info"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <h4>Email:</h4>
                <span>
                  <a href="mailto:ganial@gmail.com">ganial@gmail.com</a>
                </span>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div 
                className="contact-info"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <h4>Address:</h4>
                <span>123 lorem ipsum New York, USA.</span>
              </div>
            </div>

            <div className="col-lg-12 col-md-12">
              <div className="bar"></div>
            </div>

            <div className="col-lg-7 col-md-7">
              <p>
                <i className="far fa-copyright"></i> {currentYear} Genial. All
                Rights Reserved{" "}
                <a href="https://envytheme.com/">EnvyTheme.com</a>
              </p>
            </div>

            <div className="col-lg-5 col-md-5">
              <ul>
                <li>
                  <a href="https://www.facebook.com/" target="_blank">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.twitter.com/" target="_blank">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="_blank">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/" target="_blank">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
