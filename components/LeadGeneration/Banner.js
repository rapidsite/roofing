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

      <div id="home" className="lead-generation-banner">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-12">
                  <div className="lead-generation-banner-content">
                    <h1
                      data-aos="fade-up"
                      data-aos-duration="1200"
                      data-aos-delay="100"
                    >
                      Great Way To show Your Services
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
                      <Link href="#" className="btn btn-primary">
                        Get Started
                      </Link>

                      <div
                        onClick={() => setToggler(!toggler)}
                        className="video-btn"
                      >
                        <i className="fab fa-google-play"></i> Watch our video
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-5 col-md-12">
                  <div
                    className="lead-generation-form"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="600"
                  >
                    <div className="form-header">
                      <h3>Start Your Free Trial</h3>
                      <span>Supporting call-to-action goes here</span>
                    </div>

                    <form>
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Your name"
                          className="form-control"
                        />
                      </div>

                      <div className="form-group">
                        <input
                          type="email"
                          placeholder="Your email"
                          className="form-control"
                        />
                      </div>

                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Phone number"
                          className="form-control"
                        />
                      </div>

                      <button type="submit" className="btn btn-primary">
                        Call to Action
                      </button>
                    </form>
                    <p>
                      <i className="fas fa-info-circle"></i> We will never share
                      your personal info
                    </p>
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
