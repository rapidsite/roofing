import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const Feedback = () => {
  return (
    <>
      <section id="testimonials" className="testimonial-area ptb-100 bg-image">
        <div className="container">
          <div className="app-section-title">
            <h2>
              What Say Our <span>Clients</span>
            </h2>
            <p>
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan lacus vel facilisis.
            </p>
          </div>

          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="testimonial-slides"
          >
            <SwiperSlide>
              <div className="testimonial-item">
                <div className="client-image">
                  <img src="/images/author1.jpg" alt="feedback" />
                </div>

                <div className="testimonial-content">
                  <div className="desc">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed malesuada vulputate nisi in fermentum. Vivamus ac
                      libero quis nisi auctor pulvinar. Aenean sit amet lectus
                      posuere, mattis massa eget, ullamcorper diam. Nunc sit
                      amet felis eget arcu congue dictum.
                    </p>
                  </div>

                  <div className="client-info">
                    <h3>John Smith</h3>
                    <span>Web Developer</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-item">
                <div className="client-image">
                  <img src="/images/author2.jpg" alt="feedback" />
                </div>

                <div className="testimonial-content">
                  <div className="desc">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed malesuada vulputate nisi in fermentum. Vivamus ac
                      libero quis nisi auctor pulvinar. Aenean sit amet lectus
                      posuere, mattis massa eget, ullamcorper diam. Nunc sit
                      amet felis eget arcu congue dictum.
                    </p>
                  </div>

                  <div className="client-info">
                    <h3>Steven Smith</h3>
                    <span>Product Manager</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-item">
                <div className="client-image">
                  <img src="/images/author3.jpg" alt="feedback" />
                </div>

                <div className="testimonial-content">
                  <div className="desc">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed malesuada vulputate nisi in fermentum. Vivamus ac
                      libero quis nisi auctor pulvinar. Aenean sit amet lectus
                      posuere, mattis massa eget, ullamcorper diam. Nunc sit
                      amet felis eget arcu congue dictum.
                    </p>
                  </div>

                  <div className="client-info">
                    <h3>Alina Eva</h3>
                    <span>Web Designer</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="testimonial-item">
                <div className="client-image">
                  <img src="/images/author4.jpg" alt="feedback" />
                </div>

                <div className="testimonial-content">
                  <div className="desc">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed malesuada vulputate nisi in fermentum. Vivamus ac
                      libero quis nisi auctor pulvinar. Aenean sit amet lectus
                      posuere, mattis massa eget, ullamcorper diam. Nunc sit
                      amet felis eget arcu congue dictum.
                    </p>
                  </div>

                  <div className="client-info">
                    <h3>Steven Smith</h3>
                    <span>Product Manager</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};
export default Feedback;
