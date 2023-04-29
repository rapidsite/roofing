import React, { Component } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

class Funfact extends Component {
  state = {
    didViewCountUp: false,
  };

  onVisibilityChange = (isVisible) => {
    if (isVisible) {
      this.setState({ didViewCountUp: true });
    }
  };

  render() {
    return (
      <>
        <section className="funfacts-area-three ptb-100 pt-0">
          <div className="container">
            <div
              className="saas-section-title"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <h2>We Always Try to Understand Users Expectation</h2>
              <div className="bar"></div>
              <p>
                Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-3 col-md-3 col-6">
                <div
                  className="funfact-item"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <h3>
                    <span>
                      <VisibilitySensor
                        onChange={this.onVisibilityChange}
                        offset={{
                          top: 10,
                        }}
                        delayedCall
                      >
                        <CountUp
                          start={0}
                          end={this.state.didViewCountUp ? 180 : 0}
                          duration={3}
                        />
                      </VisibilitySensor>
                    </span>
                    M
                  </h3>
                  <p>Downloaded</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-6">
                <div
                  className="funfact-item"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <h3>
                    <span>
                      <VisibilitySensor
                        onChange={this.onVisibilityChange}
                        offset={{
                          top: 10,
                        }}
                        delayedCall
                      >
                        <CountUp
                          start={0}
                          end={this.state.didViewCountUp ? 20 : 0}
                          duration={3}
                        />
                      </VisibilitySensor>
                    </span>
                    K
                  </h3>
                  <p>Feedback</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-6">
                <div
                  className="funfact-item"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  <h3>
                    <span>
                      <VisibilitySensor
                        onChange={this.onVisibilityChange}
                        offset={{
                          top: 10,
                        }}
                        delayedCall
                      >
                        <CountUp
                          start={0}
                          end={this.state.didViewCountUp ? 500 : 0}
                          duration={3}
                        />
                      </VisibilitySensor>
                    </span>
                    +
                  </h3>
                  <p>Workers</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-6">
                <div
                  className="funfact-item"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="500"
                >
                  <h3>
                    <span>
                      <VisibilitySensor
                        onChange={this.onVisibilityChange}
                        offset={{
                          top: 10,
                        }}
                        delayedCall
                      >
                        <CountUp
                          start={0}
                          end={this.state.didViewCountUp ? 70 : 0}
                          duration={3}
                        />
                      </VisibilitySensor>
                    </span>
                    +
                  </h3>
                  <p>Contrubutors</p>
                </div>
              </div>
            </div>

            <div
              className="contact-cta-box"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="600"
            >
              <h3>Have Any Question About Us?</h3>

              <p>Don't hesitate to contact us</p>

              <a href="#contact" className="btn btn-primary">
                Contact Us
              </a>
            </div>
          </div>

          <div className="map-bg">
            <img src="/images/map.png" alt="map" />
          </div>
        </section>
      </>
    );
  }
}

export default Funfact;
