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
      <section
        className="payment-processing-funfacts ptb-100 jaralax"
      >
        <div className="container">
          <div className="funfacts-inner">
            <div 
              className="single-funfacts-box"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <p>Trusted by</p>
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
                      end={this.state.didViewCountUp ? 100 : 0}
                      duration={3}
                    />
                  </VisibilitySensor>
                </span>
                K
              </h3>
              <p>Businesses</p>
            </div>

            <div 
              className="single-funfacts-box"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <p>Processing</p>
              <h3>
                $
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
                      end={this.state.didViewCountUp ? 50 : 0}
                      duration={3}
                    />
                  </VisibilitySensor>
                </span>
                B
              </h3>
              <p>Businesses</p>
            </div>

            <div 
              className="single-funfacts-box"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="600"
            >
              <p>Trusted by</p>
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
                      end={this.state.didViewCountUp ? 654 : 0}
                      duration={3}
                    />
                  </VisibilitySensor>
                </span>
                K
              </h3>
              <p>Software Platform Integrations</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Funfact;
