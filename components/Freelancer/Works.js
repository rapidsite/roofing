import React, { Component } from "react";
const isServer = typeof window === "undefined";
const mixitup = !isServer ? require("mixitup") : null;

class Works extends Component {
  state = {
    photoIndex: 0,
    isOpen: false,
  };

  componentDidMount() {
    mixitup("#mix-wrapper", {
      animation: {
        effects: "fade rotateZ(0deg)",
        duration: 700,
      },
      classNames: {
        block: "programs",
        elementFilter: "filter-btn",
      },
      selectors: {
        target: ".mix-target",
      },
    });
  }

  render() {
    return (
      <>
        <section id="portfolio" className="portfolio-area ptb-100 bg-f9f9f9">
          <div className="container">
            <div className="freelancer-section-title">
              <h2>
                My Latest <span>Work</span>
              </h2>
              <p>
                Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
            </div>

            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="shorting-menu">
                  <button className="filter" data-filter="all">
                    All
                  </button>
                  <button className="filter" data-filter=".design">
                    Design
                  </button>
                  <button className="filter" data-filter=".seo">
                    SEO
                  </button>
                  <button className="filter" data-filter=".branding">
                    Branding
                  </button>
                  <button className="filter" data-filter=".print">
                    Print
                  </button>
                  <button className="filter" data-filter=".video">
                    Video
                  </button>
                </div>
              </div>
            </div>

            <div className="shorting">
              <div className="row justify-content-center" id="mix-wrapper">
                <div className="col-lg-4 col-md-6 mix design mix-target">
                  <div className="single-work">
                    <a href="#" className="popup-btn" target="_blank"></a>

                    <div className="work-image">
                      <img src="/images/work-img1.jpg" alt="work-image" />

                      <div className="work-overlay">
                        <h3>Digital Marketing</h3>
                        <span>UI/UX</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mix print seo mix-target">
                  <div className="single-work">
                    <a href="#" className="popup-btn" target="_blank"></a>

                    <div className="work-image">
                      <img src="/images/work-img2.jpg" alt="work-image" />

                      <div className="work-overlay">
                        <h3>Web Development</h3>
                        <span>React</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mix video branding mix-target">
                  <div className="single-work">
                    <a href="#" className="popup-btn" target="_blank"></a>

                    <div className="work-image">
                      <img src="/images/work-img3.jpg" alt="work-image" />

                      <div className="work-overlay">
                        <h3>App Development</h3>
                        <span>App</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mix design print mix-target">
                  <div className="single-work">
                    <a href="#" className="popup-btn" target="_blank"></a>

                    <div className="work-image">
                      <img src="/images/work-img4.jpg" alt="work-image" />

                      <div className="work-overlay">
                        <h3>eCommerce</h3>
                        <span>UI/UX</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mix branding video mix-target">
                  <div className="single-work">
                    <a href="#" className="popup-btn" target="_blank"></a>

                    <div className="work-image">
                      <img src="/images/work-img5.jpg" alt="work-image" />

                      <div className="work-overlay">
                        <h3>Business Consultancy</h3>
                        <span>Consultancy</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6 mix seo design mix-target">
                  <div className="single-work">
                    <a href="#" className="popup-btn" target="_blank"></a>

                    <div className="work-image">
                      <img src="/images/work-img6.jpg" alt="work-image" />

                      <div className="work-overlay">
                        <h3>Marketing & Reporting</h3>
                        <span>Marketing</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Works;
