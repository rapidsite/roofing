import React from "react";

const Platform = () => {
  return (
    <>
      <section className="platform-connect ptb-100 pt-0">
        <div className="container">
          <div className="payment-processing-section-title">
            <span>Connect with Us</span>
            <h2>Interact With Your Users On Every Single Platform</h2>
          </div>

          <div className="row justify-content-center">
            <div 
              className="col-lg-3 col-md-3"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <a href="#" className="platform-box" target="_blank">
                <img src="/images/mailchimp.png" alt="mailchimp" />

                <h3>Mail Chimp</h3>
              </a>
            </div>

            <div 
              className="col-lg-3 col-md-3"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <a href="https://slack.com/" className="platform-box" target="_blank">
                <img src="/images/slack.png" alt="slack" />

                <h3>Slack</h3>
              </a>
            </div>

            <div 
              className="col-lg-3 col-md-3"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <a href="https://www.twitter.com/" className="platform-box" target="_blank">
                <img src="/images/twitter.png" alt="twitter" />

                <h3>Twitter</h3>
              </a>
            </div>

            <div 
              className="col-lg-3 col-md-3"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <a href="https://www.instagram.com/" className="platform-box" target="_blank">
                <img src="/images/instagram.png" alt="instagram" />

                <h3>Instagram</h3>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Platform;
