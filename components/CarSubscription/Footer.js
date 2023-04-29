import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-area-four">
        <div className="container">
          <div className="row">
            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="single-footer-widget">
                <div className="logo">
                  <img src="/images/white-logo.png" alt="logo" />
                </div>

                <ul className="contact-info">
                  <li>1828 Johns Drive Glenview, IL 60025</li>
                  <li>
                    <a href="tel:2242288475">(224) 228-8475</a>
                  </li>
                  <li>
                    <a href="mailto:support@ganial.com">support@ganial.com</a>
                  </li>
                  <li>
                    <a href="#">www.ganial.com</a>
                  </li>
                </ul>
              </div>
            </div>

            <div 
              className="col-lg-2 col-md-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="single-footer-widget pl-3">
                <h3>Quick Links</h3>

                <ul className="list">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Features</a>
                  </li>
                  <li>
                    <a href="#">Screenshots</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">News</a>
                  </li>
                </ul>
              </div>
            </div>

            <div 
              className="col-lg-3 col-md-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="single-footer-widget pl-5">
                <h3>Support</h3>

                <ul className="list">
                  <li>
                    <a href="#">Quick Support</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Copyright</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Testimonials</a>
                  </li>
                </ul>
              </div>
            </div>

            <div 
              className="col-lg-3 col-md-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <div className="single-footer-widget">
                <h3>My Account</h3>

                <ul className="list">
                  <li>
                    <a href="#">Managed Account</a>
                  </li>
                  <li>
                    <a href="#">Create Account</a>
                  </li>
                  <li>
                    <a href="#">Download Software</a>
                  </li>
                  <li>
                    <a href="#">Support Center</a>
                  </li>
                  <li>
                    <a href="#">Account Security</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
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
        </div>
      </footer>
    </>
  );
};

export default Footer;
