import React, { useState } from "react";
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

      <div id="home" className="main-banner">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="main-banner-content">
                <h1
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  Protecting your home from the top down.
                </h1>

                <p
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  Protect your home with the best roofing solutions from our experienced professionals.
                </p>

                <div 
                  className="btn-box"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="600"
                >
                  <a href="#contact" className="btn btn-primary">
                    Get Started
                  </a>

                  <div
                    className="video-btn"
                    onClick={() => setToggler(!toggler)}
                  >
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
