import React from "react";

const Features = () => {
  return (
    <>
      <section id="features" className="features-area-two bg-f7fafd ptb-100">
        <div className="container">
          <div className="saas-section-title">
            <h2>Our Amazing Features</h2>
            <div className="bar"></div>
            <p>
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan lacus vel facilisis.
            </p>
          </div>

          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="features-content">
                <div className="row">
                  <div 
                    className="col-lg-6 col-md-6"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="100"
                  >
                    <div className="box">
                      <i className="far fa-hand-point-up"></i>
                      Drag and Drop
                    </div>
                  </div>

                  <div 
                    className="col-lg-6 col-md-6"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                  >
                    <div className="box">
                      <i className="far fa-gem"></i>
                      Fully Customizable
                    </div>
                  </div>

                  <div 
                    className="col-lg-6 col-md-6"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="300"
                  >
                    <div className="box">
                      <i className="fas fa-fighter-jet"></i>
                      App Integration
                    </div>
                  </div>

                  <div 
                    className="col-lg-6 col-md-6"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <div className="box">
                      <i className="fas fa-lock"></i>
                      Private and Security
                    </div>
                  </div>

                  <div 
                    className="col-lg-6 col-md-6"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="500"
                  >
                    <div className="box">
                      <i className="fas fa-magic"></i>
                      High Quality
                    </div>
                  </div>

                  <div 
                    className="col-lg-6 col-md-6"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="600"
                  >
                    <div className="box">
                      <i className="fas fa-location-arrow"></i>
                      Easy To Use
                    </div>
                  </div>

                  <div 
                    className="col-lg-6 col-md-6"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="700"
                  >
                    <div className="box">
                      <i className="fas fa-compress"></i>
                      Pixel Precision
                    </div>
                  </div>

                  <div 
                    className="col-lg-6 col-md-6"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="800"
                  >
                    <div className="box">
                      <i className="fas fa-cloud"></i>
                      Cloud Service
                    </div>
                  </div>

                  <div 
                    className="col-lg-6 col-md-6"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="900"
                  >
                    <div className="box">
                      <i className="fas fa-edit"></i>
                      Vector Editing
                    </div>
                  </div>

                  <div 
                    className="col-lg-6 col-md-6"
                    data-aos="fade-up"
                    data-aos-duration="1200"
                    data-aos-delay="1000"
                  >
                    <div className="box">
                      <i className="fas fa-cogs"></i>
                      Latest Technology
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="features-image">
                <img 
                  src="/images/main-pic.png" 
                  alt="main-pic" 
                  
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="1000"
                />
                <img
                  src="/images/circle-shape.png"
                  className="rotate-image rotateme"
                  alt="circle"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
