import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-area bg-fffcf4">
        <div className="container">
          <div className="row">
            <div 
              className="col-lg-5 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="single-footer-widget">
                <div className="logo">
                  <Link href="/">
                    <img className="reallogo" src="/images/black-logo.png" alt="logo" />
                  </Link>
                </div>

                <ul className="contact-info">
                  <li>212 W TROY ST, STE B, DOTHAN AL 36303</li>
                  <li>
                    <Link href="tel:2072001127">(207) 200-1127</Link>
                  </li>
                  <li>
                    <Link href="mailto:admin@rapidsite.us">
                      admin@rapidsite.us
                    </Link>
                  </li>
                  <li>
                    <a href="https://www.rapidsite.com" target="_blank">www.rapidsite.com</a>
                  </li>
                </ul>
              </div>
            </div>

            <div 
              className="col-lg-4 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="single-footer-widget pl-3">
                <h3>Quick Links</h3>

                <ul className="list">
                  <li>
                    <Link href="#home">Home</Link>
                  </li>
                  <li>
                    <Link href="#features">Features</Link>
                  </li>
                  <li>
                    <Link href="#about">About</Link>
                  </li>
                  <li>
                    <Link href="#blog">News</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div 
              className="col-lg-3 col-sm-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="single-footer-widget pl-5">
                <h3>Support</h3>

                <ul className="list">
                  <li>
                    <Link href="#">Quick Support</Link>
                  </li>
                  <li>
                    <Link href="#">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="#">Copyright</Link>
                  </li>
                  <li>
                    <Link href="#">Terms & Conditions</Link>
                  </li>
                  <li>
                    <Link href="#">Testimonials</Link>
                  </li>
                </ul>
              </div>
            </div>

            
          </div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-7">
                <p>
                  <i className="far fa-copyright"></i> {currentYear} Rapidite. All Rights
                  Reserved <a href="https://rapidsite.us">Rapidsite</a>
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
                    <a href="https://twitter.com/" target="_blank">
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

        <div className="map2">
          <img src="/images/map2.png" alt="map" />
        </div>
      </footer>
    </>
  );
};

export default Footer;
