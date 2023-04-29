import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const Testimonials = () => {
  return (
    <>
      <section id="testimonials" className="feedback-area ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Our Customer Feedback</h2>
            
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
                I was impressed with the level of professionalism and expertise demonstrated by the team at [company name]. They took the time to explain the different options available to me and worked within my budget to find a solution that worked for me. I couldn't be happier with the results!
                </p>

                <div className="client-info">
                  <h3>Jason Statham</h3>
                  <span>Customer</span>
                </div>

                <i className="fas fa-quote-left"></i>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="feedback-item">
                <img src="/images/client2.png" alt="client" />
                <p>
                I had been putting off repairing my leaky roof for months, but after contacting [company name], they made the process so easy and stress-free. They arrived promptly and completed the repairs quickly, without disrupting my daily routine. I highly recommend their services!
                </p>

                <div className="client-info">
                  <h3>Steven Smith</h3>
                  <span>Customer</span>
                </div>

                <i className="fas fa-quote-left"></i>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="feedback-item">
                <img src="/images/client3.png" alt="client" />
                <p>
                I was hesitant to invest in a new roof, but after meeting with [company name], I felt confident that I was making the right decision. Their team was knowledgeable and thorough, and they took the time to explain the installation process to me. I am extremely satisfied with the end result!
                </p>

                <div className="client-info">
                  <h3>David Warner</h3>
                  <span>Customer</span>
                </div>

                <i className="fas fa-quote-left"></i>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="feedback-item">
                <img src="/images/client2.png" alt="client" />
                <p>
                The team at [company name] went above and beyond to ensure that my roof was installed to the highest standards. They were responsive to my questions and concerns and made sure that the project was completed on time and on budget. I would definitely recommend their services to anyone in need of roofing solutions!
                </p>

                <div className="client-info">
                  <h3>David MM</h3>
                  <span>Customer</span>
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

export default Testimonials;
