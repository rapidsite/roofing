import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const Feedback = () => {
  return (
    <>
      <section id="testimonials" className="feedback-area-two ptb-100">
        <div className="container">
          <div className="saas-section-title">
            <h2>What Our Clients Say About Us</h2>
            <div className="bar"></div>
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
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="feedback-slides"
          >
            <SwiperSlide>
              <div className="feedback-item">
                <img src="/images/client1.png" alt="client" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <div className="client-info">
                  <h3>Jason Statham</h3>
                  <span>CEO ThemeForest</span>
                </div>

                <i className="fas fa-quote-left"></i>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="feedback-item">
                <img src="/images/client2.png" alt="client" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <div className="client-info">
                  <h3>Steven Smith</h3>
                  <span>CEO EnvyTheme</span>
                </div>

                <i className="fas fa-quote-left"></i>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="feedback-item">
                <img src="/images/client3.png" alt="client" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <div className="client-info">
                  <h3>David Warner</h3>
                  <span>CEO ABC Company</span>
                </div>

                <i className="fas fa-quote-left"></i>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="feedback-item">
                <img src="/images/client2.png" alt="client" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>

                <div className="client-info">
                  <h3>David MM</h3>
                  <span>React Developer</span>
                </div>

                <i className="fas fa-quote-left"></i>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Feedback;
