import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

const Cta = () => {
  // if toggler is updated when lightbox is closed it will open it
  const [toggler, setToggler] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <section className="cta-area ptb-100 jarallax pb-0">
        <div className="container">
          <div className="cta-content">
            <h2>
              How App <span>Works</span>
            </h2>
            <p>
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan lacus vel facilisis.
            </p>

            <div onClick={() => setToggler(!toggler)} className="video-btn">
              <i className="fas fa-play"></i>
            </div>
          </div>

          <div className="cta-inner-content">
            <div className="row justify-content-center">
              <div 
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <div className="single-cta-box">
                  <i className="fas fa-download"></i>
                  <h3>Download</h3>
                  <p>
                    Duis cursus dictum enim dictum venenatis. Orci varius
                    natoque penatibus et magnis dis.
                  </p>
                </div>
              </div>

              <div 
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <div className="single-cta-box">
                  <i className="fas fa-bars"></i>
                  <h3>Setup It</h3>
                  <p>
                    Duis cursus dictum enim dictum venenatis. Orci varius
                    natoque penatibus et magnis dis.
                  </p>
                </div>
              </div>

              <div 
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <div className="single-cta-box">
                  <i className="far fa-thumbs-up"></i>
                  <h3>Enjoy It</h3>
                  <p>
                    Duis cursus dictum enim dictum venenatis. Orci varius
                    natoque penatibus et magnis dis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cta;
