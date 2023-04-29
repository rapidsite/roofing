import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const Services = () => {
  return (
    <>
      <section id="services" className="services-area ptb-100">
        <div className="container">
          <div className="lead-generation-section-title">
            <span>Services</span>
            <h2>We Offer Many Services to Our Great Customers</h2>
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
            modules={[Pagination]}
            className="services-slides"
          >
            <SwiperSlide>
              <div className="services-box">
                <img src="/images/blog1.jpg" alt="blog" />

                <div className="services-content">
                  <h3>Creative Design</h3>
                  <p>
                    This should be used to tell a story and talk about your
                    product.
                  </p>

                  <ul>
                    <li>IT Solution</li>
                    <li>Web Design</li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="services-box">
                <img src="/images/blog2.jpg" alt="blog" />

                <div className="services-content">
                  <h3>Ultra Responsive</h3>
                  <p>
                    This should be used to tell a story and talk about your
                    product.
                  </p>

                  <ul>
                    <li className="bg-cdf1d8">IT Solution</li>
                    <li className="bg-cdf1d8">Web Design</li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="services-box">
                <img src="/images/blog3.jpg" alt="image" />

                <div className="services-content">
                  <h3>No Coding Required</h3>
                  <p>
                    This should be used to tell a story and talk about your
                    product.
                  </p>

                  <ul>
                    <li className="bg-f78acb">IT Solution</li>
                    <li className="bg-f78acb">Web Design</li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="services-box">
                <img src="/images/blog4.jpg" alt="image" />

                <div className="services-content">
                  <h3>Retina Ready</h3>
                  <p>
                    This should be used to tell a story and talk about your
                    product.
                  </p>

                  <ul>
                    <li className="bg-c679e3">IT Solution</li>
                    <li className="bg-c679e3">Web Design</li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="services-box">
                <img src="/images/blog5.jpg" alt="image" />

                <div className="services-content">
                  <h3>Drag and Drop</h3>
                  <p>
                    This should be used to tell a story and talk about your
                    product.
                  </p>

                  <ul>
                    <li className="bg-eb6b3d">IT Solution</li>
                    <li className="bg-eb6b3d">Web Design</li>
                  </ul>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Services;
