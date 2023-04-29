import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";

const FeaturedCars = () => {
  return (
    <>
      <section className="featured-cars ptb-100 bg-f5fbff">
        <div className="container">
          <div className="car-subscription-section-title">
            <span>Featured Cars?</span>
            <h2>Featured Cars for Subscription</h2>
          </div>

          <Swiper
            spaceBetween={30}
            navigation={true}
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
            modules={[Navigation, Autoplay]}
            className="featured-cars-slides"
          >
            <SwiperSlide>
              <div className="single-featured-cars">
                <img
                  src="/images/featured-cars1.jpg"
                  alt="cars"
                  className="w-100"
                />

                <div className="featured-cars-content">
                  <h3>
                    <a href="#">2015 Toyota Corolla</a>
                  </h3>
                  <span>from $450/mo</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-featured-cars">
                <img
                  src="/images/featured-cars2.jpg"
                  alt="cars"
                  className="w-100"
                />

                <div className="featured-cars-content">
                  <h3>
                    <a href="#">2015 Toyota Corolla</a>
                  </h3>
                  <span>from $450/mo</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-featured-cars">
                <img
                  src="/images/featured-cars3.jpg"
                  alt="cars"
                  className="w-100"
                />

                <div className="featured-cars-content">
                  <h3>
                    <a href="#">2015 Toyota Corolla</a>
                  </h3>
                  <span>from $450/mo</span>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-featured-cars">
                <img
                  src="/images/featured-cars2.jpg"
                  alt="cars"
                  className="w-100"
                />

                <div className="featured-cars-content">
                  <h3>
                    <a href="#">2015 Toyota Corolla</a>
                  </h3>
                  <span>from $450/mo</span>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default FeaturedCars;
