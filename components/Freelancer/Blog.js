import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

const Blog = () => {
  return (
    <>
      <section id="blog" className="blog-area ptb-100 bg-f9f9f9">
        <div className="container">
          <div className="freelancer-section-title">
            <h2>
              Latest <span>News</span>
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
              768: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="blog-slides"
          >
            <SwiperSlide>
              <div className="single-blog-item">
                <div className="blog-image">
                  <Link href="/blog-details">
                    <img src="/images/blog1.jpg" alt="blog" />
                  </Link>

                  <div className="post-tag">
                    <Link href="#">Technology</Link>
                  </div>
                </div>

                <div className="blog-post-content">
                  <span className="date">25 Feb, 2023</span>
                  <h3>
                    <Link href="/blog-details">
                      The Most Popular New top Business Apps
                    </Link>
                  </h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum.
                  </p>

                  <Link href="/blog-details" className="read-more-btn">
                    Read More <i className="icofont-double-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-blog-item">
                <div className="blog-image">
                  <Link href="/blog-details">
                    <img src="/images/blog2.jpg" alt="blog" />
                  </Link>

                  <div className="post-tag">
                    <Link href="#">Agency</Link>
                  </div>
                </div>

                <div className="blog-post-content">
                  <span className="date">27 Feb, 2023</span>
                  <h3>
                    <Link href="/blog-details">
                      The Best Marketing top use Management Tools
                    </Link>
                  </h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum.
                  </p>

                  <Link href="/blog-details" className="read-more-btn">
                    Read More <i className="icofont-double-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-blog-item">
                <div className="blog-image">
                  <Link href="/blog-details">
                    <img src="/images/blog3.jpg" alt="blog" />
                  </Link>

                  <div className="post-tag">
                    <Link href="#">IT</Link>
                  </div>
                </div>

                <div className="blog-post-content">
                  <span className="date">28 Feb, 2023</span>
                  <h3>
                    <Link href="/blog-details">
                      3 WooCommerce Plugins to Boost Sales
                    </Link>
                  </h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum.
                  </p>

                  <Link href="/blog-details" className="read-more-btn">
                    Read More <i className="icofont-double-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-blog-item">
                <div className="blog-image">
                  <Link href="/blog-details">
                    <img src="/images/blog4.jpg" alt="blog" />
                  </Link>

                  <div className="post-tag">
                    <Link href="#">Creative</Link>
                  </div>
                </div>

                <div className="blog-post-content">
                  <span className="date">29 Feb, 2023</span>
                  <h3>
                    <Link href="/blog-details">
                      Top 21 Must-Read Blogs For Creative Agencies
                    </Link>
                  </h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum.
                  </p>

                  <Link href="/blog-details" className="read-more-btn">
                    Read More <i className="icofont-double-right"></i>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Blog;
