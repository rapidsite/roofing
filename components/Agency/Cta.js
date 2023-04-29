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
          <div 
            className="cta-content"
            data-aos="fade-in"
            data-aos-duration="1200"
            data-aos-delay="200"
          >
            <h2>Contact us today to schedule a free roofing consultation and estimate.</h2>
            <p>
            Our team of skilled roofers is ready to provide personalized solutions to meet your specific needs and budget.
            </p>

            
          </div>

          <div className="cta-inner-content">
            <div className="row justify-content-center">
              <div 
                className="col-lg-4 col-md-6"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <div className="single-cta-box">
                  <i className="fas fa-people-roof"></i>
                  <h3>Roofing Services</h3>
                  <p>
                  We offer a wide range of roofing services, including repairs, replacements, and installations.
    Our team is experienced in working with all types of roofing materials, from shingles to metal roofs, ensuring a high-quality result every time.
                  </p>
                </div>
              </div>

              <div 
                className="col-lg-4 col-md-6"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <div className="single-cta-box">
                  <i className="fas fa-user-check"></i>
                  <h3>Customer Satisfaction</h3>
                  <p>
                  We prioritize clear communication, transparency, and reliability throughout every project we undertake.
    Our goal is to exceed your expectations and leave you with a durable, long-lasting roofing solution that provides peace of mind for years to come.
                  </p>
                </div>
              </div>

              <div 
                className="col-lg-4 col-md-6"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="600"
              >
                <div className="single-cta-box">
                  <i className="fas fa-money-check-dollar"></i>
                  <h3>Competitive Pricing</h3>
                  <p>
                  We are committed to providing exceptional roofing services that protect your property and enhance its curb appeal. Our team of skilled professionals has the experience and expertise to handle any roofing project, from simple repairs to full replacements. 
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
