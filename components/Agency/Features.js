import React from "react";

const Features = () => {
  return (
    <>
      <section id="features" className="features-area ptb-100 bg-f9f9f9">
        <div className="container">
          <div className="section-title">
            <h2>What Makes Us Different</h2>
            
          </div>

          <div className="row justify-content-center">
            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="single-features">
                <div className="icon bg1">
                  <i className="fas fa-file-clipboard"></i>
                </div>
                <h3>Personalized Solutions</h3>
                <p>
                We offer customized roofing solutions that are tailored to meet your unique needs, rather than a one-size-fits-all approach.
                </p>
              </div>
            </div>

            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="single-features">
                <div className="icon bg2">
                  <i className="fas fa-magnifying-glass"></i>
                </div>
                <h3>Transparency</h3>
                <p>
                We believe in clear, open communication throughout every stage of the process, so you always know what to expect.
                </p>
              </div>
            </div>

            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <div className="single-features">
                <div className="icon bg3">
                  <i className="fas fa-plus"></i>
                </div>
                <h3>Quality Materials</h3>
                <p>
                We only use high-quality, durable materials that are built to last and protect your property for years to come.
                </p>
              </div>
            </div>

            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="500"
            >
              <div className="single-features">
                <div className="icon bg4">
                  <i className="fas fa-cogs"></i>
                </div>
                <h3>Skilled Team</h3>
                <p>
                Our experienced team of professionals is highly trained and skilled, ensuring that your project is completed with precision and efficiency.
                </p>
              </div>
            </div>

            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="600"
            >
              <div className="single-features">
                <div className="icon bg5">
                  <i className="fas fa-money-bill"></i>
                </div>
                <h3>Financing Options</h3>
                <p>
                We offer flexible financing options to help make the process more accessible and affordable for our customers.
                </p>
              </div>
            </div>

            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="700"
            >
              <div className="single-features">
                <div className="icon bg6">
                  <i className="fas fa-headset"></i>
                </div>
                <h3>Customer Support</h3>
                <p>
                We prioritize exceptional customer service, and our team is always available to answer your questions and provide support throughout your project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
