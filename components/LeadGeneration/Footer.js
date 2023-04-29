import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer-area-three bg-fffcf4">
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
      </footer>
    </>
  );
};

export default Footer;
