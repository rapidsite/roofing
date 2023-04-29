import React, { useState } from "react";
import Link from "next/link";
import FsLightbox from "fslightbox-react";

const Banner = () => {
  // if toggler is updated when lightbox is closed it will open it
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <div id="home" className="freelancer-banner">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-8">
                  <div className="freelancer-banner-content">
                    <h1
                      data-aos="fade-up"
                      data-aos-duration="1200"
                      data-aos-delay="100"
                    >
                      I'm A Full Stack Web <span>Developer</span>
                    </h1>

                    <ul
                      data-aos="fade-up"
                      data-aos-duration="1200"
                      data-aos-delay="200"
                    >
                      <li>
                        <a href="#" target="_blank">
                          <i className="fab fa-github"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="fab fa-codepen"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="fab fa-stack-overflow"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <i className="fab fa-gitlab"></i>
                        </a>
                      </li>
                    </ul>

                    <div
                      className="btn-box"
                      data-aos="fade-up"
                      data-aos-duration="1200"
                      data-aos-delay="300"
                    >
                      <a href="#contact" className="btn btn-primary">
                        Get Started
                      </a>

                      <div
                        onClick={() => setToggler(!toggler)}
                        className="video-btn"
                      >
                        <i className="fas fa-play"></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 col-md-4">
                  <div
                    className="freelancer-banner-image"
                    data-aos="fade-down"
                    data-aos-duration="1200"
                    data-aos-delay="500"
                  >
                    <img src="/images/developer.png" alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="back-text">
          <h1>Developer</h1>
        </div>
      </div>
    </>
  );
};

export default Banner;
