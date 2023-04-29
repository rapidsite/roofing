import React from "react";

const Research = () => {
  return (
    <>
      <section className="ux-research-process ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div 
                className="research-process-image"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <img src="/images/ux-women.jpg" alt="image" className="image-stretch"/>
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="research-process-content pl-15">
                <h2>Our Step by Step Process</h2>
                

                <div 
                  className="single-process"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <span>1</span>
                  <h3>Inspection</h3>
                  <p>
                  We conduct a thorough inspection of your roof to assess its condition and identify any issues.
                  </p>
                </div>

                <div 
                  className="single-process"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  <span>2</span>
                  <h3>Recommendations and Quote</h3>
                  <p>
                  Based on our assessment, we will provide you with a detailed report of our findings and recommendations for any necessary repairs or replacements. We will also provide you with a clear and transparent quote for our services.
                  </p>
                </div>

                <div 
                  className="single-process"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="500"
                >
                  <span>3</span>
                  <h3>Scheduling and Prep</h3>
                  <p>
                  Once you have approved our recommendations and quote, we will work with you to schedule a convenient time for the work to be done. We will also prepare the job site by securing the area and ensuring that all necessary materials and equipment are available.
                  </p>
                </div>

                <div 
                  className="single-process"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="600"
                >
                  <span>4</span>
                  <h3>Roofing Services</h3>
                  <p>
                  Our team will get to work on your roofing project, using the highest quality materials and the latest techniques to ensure that your roof is repaired, replaced, or built to the highest standard.
                  </p>
                </div>

                <div 
                  className="single-process"
                  data-aos="fade-in"
                  data-aos-duration="1200"
                  data-aos-delay="700"
                >
                  <span>5</span>
                  <h3>Final Inspection and Clean-up</h3>
                  <p>
                  Once the work is complete, we will conduct a final inspection to ensure that everything has been done to your satisfaction. We will also clean up the job site, leaving your property clean and tidy.
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

export default Research;
