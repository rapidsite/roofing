import React from "react";

const Download = () => {
  return (
    <>
      <section className="download-app ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div 
                className="download-content"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <h3>
                  Download Our Apps <span>Today</span>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum hendrerit diam lacus, eu euismod augue tincidunt
                  non. Nam vestibulum vulputate sem sed ultrices. Duis et leo
                  quam. Vestibulum eros purus, eleifend vel volutpat id,
                  consectetur in urna. Nam vestibulum vulputate sem sed
                  ultrices.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum hendrerit diam lacus, eu euismod augue tincidunt
                  non. Nam vestibulum vulputate.
                </p>

                <div className="download-btn">
                  <a href="#" target="_blank">
                    <i className="fab fa-android"></i>
                    Available On <span>Google Store</span>
                  </a>
                  <a href="#" target="_blank">
                    <i className="fab fa-apple"></i>
                    Available On <span>Apple Store</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div 
                className="download-image"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <img src="/images/man-and-women.png" alt="download" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Download;
