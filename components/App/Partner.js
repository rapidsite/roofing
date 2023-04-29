import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const Partner = () => {
  return (
    <>
      <section className="partner-area">
        <div className="container">
          <h3>Trusted by Over 2.5 Million Company</h3>

          <Swiper
            spaceBetween={20}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 6,
              },
            }}
            autoplay={{
              delay: 6500,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay]}
            className="partner-slides"

            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <img src="/images/agency-partner1.png" alt="logo" />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <img src="/images/agency-partner2.png" alt="logo" />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <img src="/images/agency-partner3.png" alt="logo" />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <img src="/images/agency-partner4.png" alt="logo" />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <img src="/images/agency-partner5.png" alt="logo" />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <img src="/images/agency-partner6.png" alt="logo" />
                </a>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="partner-item">
                <a href="#" target="_blank">
                  <img src="/images/agency-partner3.png" alt="logo" />
                </a>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Partner;
