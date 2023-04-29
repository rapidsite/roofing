import React from "react";

const Subscribe = () => {
  return (
    <>
      <section className="subscribe-area ptb-100">
        <div className="container">
          <div className="subscribe-content">
            <div
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <h2>Subscribe Our Newsletter</h2>
              <p>
                Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
            </div>

            <form 
              className="newsletter-form"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="row align-items-center">
                <div className="col-lg-8 col-md-8">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email address"
                    name="EMAIL"
                    required
                  />
                </div>

                <div className="col-lg-4 col-md-4">
                  <button type="submit">Subscribe</button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="rocket">
          <img src="/images/rocket.png" alt="rocket" />
        </div>
        <div className="map">
          <img src="/images/map.png" alt="map" />
        </div>
      </section>
    </>
  );
};

export default Subscribe;
