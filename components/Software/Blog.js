import React from "react";
import Link from "next/link";

const Blog = () => {
  return (
    <>
      <section id="blog" className="blog-area blog-section ptb-100 bg-fffcf4">
        <div className="container">
          <div className="section-title">
            <h2>Latest News</h2>
            <p>
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan lacus vel facilisis.
            </p>
          </div>

          <div className="row justify-content">
            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <div className="single-blog-post">
                <div className="image">
                  <img src="/images/agency-blog1.jpg" alt="image" />
                </div>

                <div className="blog-post-content">
                  <h3>
                    <Link href="/blog-details">
                      How to Document Processes to Scale Your Agency
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>

                  <Link href="/blog-details" className="read-more-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="single-blog-post">
                <div className="image">
                  <img src="/images/agency-blog2.jpg" alt="image" />
                </div>

                <div className="blog-post-content">
                  <h3>
                    <Link href="/blog-details">
                      15 Employee Feedback Tools to Track Your Team
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>

                  <Link href="/blog-details" className="read-more-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div 
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="single-blog-post">
                <div className="image">
                  <img src="/images/agency-blog3.jpg" alt="image" />
                </div>

                <div className="blog-post-content">
                  <h3>
                    <Link href="/blog-details">
                      12 Tried-and-True Ways to Improve User
                    </Link>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>

                  <Link href="/blog-details" className="read-more-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Blog;
