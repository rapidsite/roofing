import React, { Component } from "react";

class HowItWorks extends Component {
  openTabSection = (evt, tabNmae) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs_item");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].classList.remove("fadeInUp");
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByTagName("li");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "");
    }

    document.getElementById(tabNmae).style.display = "block";
    document.getElementById(tabNmae).className += " fadeInUp animated";
    evt.currentTarget.className += "current";
  };

  render() {
    return (
      <>
        <section id="about" className="how-its-work ptb-100 pb-0">
          <div className="container">
            <div className="software-section-title">
              <h2>How Does It Works</h2>
              <div className="bar"></div>
              <p>
                Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.
              </p>
              <img src="/images/line.png" alt="line" />
            </div>

            <div className="tab how-its-work-tab">
              <div className="row">
                <div className="col-lg-3 col-md-4">
                  <ul className="tabs">
                    <li
                      onClick={(e) => {
                        e.preventDefault();
                        this.openTabSection(e, "tab1");
                      }}
                      className="current"
                    >
                      <a href="#">
                        <i className="fas fa-fill-drip"></i> One Click Demo
                        import
                      </a>
                    </li>

                    <li
                      onClick={(e) => {
                        e.preventDefault();
                        this.openTabSection(e, "tab2");
                      }}
                    >
                      <a href="#">
                        <i className="fas fa-crop"></i> Drop & Drag Editing
                      </a>
                    </li>

                    <li
                      onClick={(e) => {
                        e.preventDefault();
                        this.openTabSection(e, "tab3");
                      }}
                    >
                      <a href="#">
                        <i className="fas fa-edit"></i> In-line Editing
                      </a>
                    </li>

                    <li
                      onClick={(e) => {
                        e.preventDefault();
                        this.openTabSection(e, "tab4");
                      }}
                    >
                      <a href="#">
                        <i className="fas fa-dollar-sign"></i> Budget Overview
                      </a>
                    </li>

                    <li
                      onClick={(e) => {
                        e.preventDefault();
                        this.openTabSection(e, "tab5");
                      }}
                    >
                      <a href="#">
                        <i className="fas fa-tools"></i> Create & Adjust
                      </a>
                    </li>

                    <li
                      onClick={(e) => {
                        e.preventDefault();
                        this.openTabSection(e, "tab6");
                      }}
                    >
                      <a href="#">
                        <i className="fas fa-chart-pie"></i> View Reports
                      </a>
                    </li>

                    <li
                      onClick={(e) => {
                        e.preventDefault();
                        this.openTabSection(e, "tab7");
                      }}
                    >
                      <a href="#">
                        <i className="fas fa-tools"></i> Create & Adjust
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-9 col-md-8">
                  <div className="tab_content">
                    <div id="tab1" className="tabs_item">
                      <img src="/images/laptop-with-dashoard.png" alt="new" />
                    </div>

                    <div id="tab2" className="tabs_item">
                      <img src="/images/laptop-with-dashoard2.png" alt="new" />
                    </div>

                    <div id="tab3" className="tabs_item">
                      <img src="/images/laptop-with-dashoard3.png" alt="new" />
                    </div>

                    <div id="tab4" className="tabs_item">
                      <img src="/images/laptop-with-dashoard4.png" alt="new" />
                    </div>

                    <div id="tab5" className="tabs_item">
                      <img src="/images/laptop-with-dashoard5.png" alt="new" />
                    </div>

                    <div id="tab6" className="tabs_item">
                      <img src="/images/laptop-with-dashoard6.png" alt="new" />
                    </div>

                    <div id="tab7" className="tabs_item">
                      <img src="/images/laptop-with-dashoard7.png" alt="new" />
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

export default HowItWorks;
