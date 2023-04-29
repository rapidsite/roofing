import React from "react";

const About = () => {
  return (
    <>
      <section id="about" className="about-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div 
                className="about-image"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <img src="/images/about-img1.jpg" alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div 
                className="about-content pl-15"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <h3>Protecting Your Home from the Top Down</h3>
                <p>
                At Rapid  Roofing, we understand the importance of a strong and reliable roof in protecting your home and your family. 
                That's why our team is committed to delivering top-quality roofing services that keep your home safe and secure from the top down.
                </p>

                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className="single-inner-content">
                      <div className="title">
                        <div className="icon">
                          <i className="fas fa-helmet-safety"></i>
                        </div>

                        <h3>Insured</h3>
                      </div>

                      <p>
                      Fully insured, giving you peace of mind knowing that your property is protected in the event of any unforeseen circumstances.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="single-inner-content">
                      <div className="title">
                        <div className="icon">
                          <i className="fas fa-drivers-license"></i>
                        </div>

                        <h3>Licensed</h3>
                      </div>

                      <p>
                      We are a fully licensed, ensuring that our team of experts is qualified and trained to provide you with the highest level of service and professionalism.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="single-inner-content">
                      <div className="title">
                        <div className="icon">
                          <i className="fas fa-thumbs-up"></i>
                        </div>

                        <h3>Satisfaction Guarantee</h3>
                      </div>

                      <p>
                      We believe in providing our customers with complete satisfaction. 
                      That's why we offer a satisfaction guarantee on all our roofing services.
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="single-inner-content">
                      <div className="title">
                        <div className="icon">
                          <i className="fas fa-plus"></i>
                        </div>

                        <h3>Quality Materials</h3>
                      </div>

                      <p>
                      We understand that quality materials are essential for a long-lasting and durable roof. 
                      That's why we only use the highest quality materials from top brands and suppliers.
                      </p>
                    </div>
                  </div>
                </div>

                <a href="#" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="circle">
          <img src="/images/circle.png" alt="circle" />
        </div>
      </section>
    </>
  );
};

export default About;
