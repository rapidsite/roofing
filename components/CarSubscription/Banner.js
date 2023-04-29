import React from "react";

const Banner = () => {
  return (
    <>
      <div id="home" className="car-subscription-banner overflow-hidden">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="car-subscription-banner-content">
                    <h1
                      data-aos="fade-up"
                      data-aos-duration="1200"
                      data-aos-delay="100"
                    >
                      Own The Moment, Not The Car!
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

                    <form
                      data-aos="fade-up"
                      data-aos-duration="1200"
                      data-aos-delay="300"
                    >
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter email address"
                      />
                      <button type="submit" className="btn btn-primary">
                        Subscribe Now!
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div 
          className="car-subscription-banner-image"
          data-aos="fade-left"
          data-aos-duration="1200"
          data-aos-delay="500"
        >
          <img src="/images/car-with-man.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default Banner;
