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
      
      <div id="home" className="saas-banner">
        <div className="effect"></div>

        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="saas-banner-content">
                <h1
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  Ultimate Platform to Monitor Your Best Workflow.
                </h1>

                <p
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  It should be noted that although application software is
                  thought of as a program, it can be anything that runs on a
                  computer.
                </p>

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
                    <i className="fab fa-google-play"></i> Watch Our Video
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div 
          className="saas-banner-image"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="500"
        >
          <img src="/images/laptop.png" alt="b" />
        </div>
      </div>
    </>
  );
};

export default Banner;
