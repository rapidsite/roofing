import React from "react";

const Interests = () => {
  return (
    <>
      <section className="my-interests ptb-100 pt-0">
        <div className="container">
          <div className="freelancer-section-title">
            <h2>
              My <span>Interests</span>
            </h2>
            <p>
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan lacus vel facilisis.
            </p>
          </div>

          <div className="row justify-content-center">
            <div 
              className="col-lg-2 col-md-4"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="single-interests">
                <i className="fas fa-gamepad"></i>
                <h3>Gaming</h3>
              </div>
            </div>

            <div 
              className="col-lg-2 col-md-4"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="single-interests">
                <i className="fas fa-book"></i>
                <h3>Reading</h3>
              </div>
            </div>

            <div 
              className="col-lg-2 col-md-4"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="single-interests">
                <i className="fas fa-music"></i>
                <h3>Music</h3>
              </div>
            </div>

            <div 
              className="col-lg-2 col-md-4"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <div className="single-interests">
                <i className="fas fa-film"></i>
                <h3>Movies</h3>
              </div>
            </div>

            <div 
              className="col-lg-2 col-md-4"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="500"
            >
              <div className="single-interests">
                <i className="fas fa-shopping-cart"></i>
                <h3>Shopping</h3>
              </div>
            </div>

            <div 
              className="col-lg-2 col-md-4"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="600"
            >
              <div className="single-interests">
                <i className="fas fa-bicycle"></i>
                <h3>Bicycling</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Interests;
