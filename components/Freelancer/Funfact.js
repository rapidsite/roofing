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
        <section className="funfacts-area-two ptb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div 
                  className="funfact"
                  data-aos="fade-down"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  <i className="fas fa-users"></i>
                  <h3>
                    <VisibilitySensor
                      onChange={this.onVisibilityChange}
                      offset={{
                        top: 10,
                      }}
                      delayedCall
                    >
                      <CountUp
                        start={0}
                        end={this.state.didViewCountUp ? 1078 : 0}
                        duration={3}
                      />
                    </VisibilitySensor>
                  </h3>
                  <p>Happy Customers</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div 
                  className="funfact"
                  data-aos="fade-down"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  <i className="fas fa-thumbs-up"></i>
                  <h3>
                    <VisibilitySensor
                      onChange={this.onVisibilityChange}
                      offset={{
                        top: 10,
                      }}
                      delayedCall
                    >
                      <CountUp
                        start={0}
                        end={this.state.didViewCountUp ? 510 : 0}
                        duration={3}
                      />
                    </VisibilitySensor>
                  </h3>
                  <p>Complete Projects</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div 
                  className="funfact"
                  data-aos="fade-down"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <i className="fas fa-bullhorn"></i>
                  <h3>
                    <VisibilitySensor
                      onChange={this.onVisibilityChange}
                      offset={{
                        top: 10,
                      }}
                      delayedCall
                    >
                      <CountUp
                        start={0}
                        end={this.state.didViewCountUp ? 954124 : 0}
                        duration={3}
                      />
                    </VisibilitySensor>
                  </h3>
                  <p>Lines Of Code</p>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div 
                  className="funfact"
                  data-aos="fade-down"
                  data-aos-duration="1200"
                  data-aos-delay="400"
                >
                  <i className="fas fa-crown"></i>
                  <h3>
                    <VisibilitySensor
                      onChange={this.onVisibilityChange}
                      offset={{
                        top: 10,
                      }}
                      delayedCall
                    >
                      <CountUp
                        start={0}
                        end={this.state.didViewCountUp ? 27 : 0}
                        duration={3}
                      />
                    </VisibilitySensor>
                    +
                  </h3>
                  <p>Years of Experience</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Funfact;
