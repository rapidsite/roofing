import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const Services = () => {
  return (
    <>
      <section className="services-area ptb-100 pt-0">
        <div className="container">
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
            className="services-slides"
          >
            <SwiperSlide>
              <div className="single-services">
                <i className="fas fa-laptop"></i>
                <h3>Web Design</h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-services">
                <i className="fas fa-mobile-alt"></i>
                <h3>Mobile Development</h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-services">
                <i className="fas fa-rocket"></i>
                <h3>Branding Identity</h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-services">
                <i className="fas fa-camera"></i>
                <h3>Photography</h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-services">
                <i className="fab fa-sketch"></i>
                <h3>Sketch</h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Services;
