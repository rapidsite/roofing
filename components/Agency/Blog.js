import React from "react";
import Link from "next/link";

const Blog = () => {
  return (
    <>
      <section id="blog" className="blog-area blog-section ptb-100">
        <div className="container">
          <div className="section-title">
            <h2>Latest Blog Posts</h2>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div 
                className="single-blog-post"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <div className="image">
                  <img src="/images/agency-blog1.jpg" alt="image" />
                </div>

                <div className="blog-post-content">
                  <h3>
                    <Link href="/blog-details">
                    The Top 10 Signs Your Roof Needs Repairs
                    </Link>
                  </h3>
                  <p>
                  In this post, we'll go over the most common signs that your roof may be in need of repairs, from missing shingles to water stains on your ceiling. We'll also offer expert tips and advice on how to identify these signs and what to do if you suspect your roof is damaged.
                  </p>

                  <Link href="/blog-details" className="read-more-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div 
                className="single-blog-post"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <div className="image">
                  <img src="/images/agency-blog2.jpg" alt="image" />
                </div>

                <div className="blog-post-content">
                  <h3>
                    <Link href="/blog-details">
                    The Pros and Cons of Different Roofing Materials
                    </Link>
                  </h3>
                  <p>
                  Choosing the right roofing material for your home can be a difficult decision, which is why we've put together this post outlining the pros and cons of different materials, from asphalt shingles to metal roofs. We'll also discuss important factors to consider when making your decision, such as durability, cost, and maintenance requirements.
                  </p>

                  <Link href="/blog-details" className="read-more-btn">
                    Read More
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div 
                className="single-blog-post"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="600"
              >
                <div className="image">
                  <img src="/images/agency-blog3.jpg" alt="image" />
                </div>

                <div className="blog-post-content">
                  <h3>
                    <Link href="/blog-details">
                    Why Regular Roof Maintenance is Key to Protecting Your Home
                    </Link>
                  </h3>
                  <p>
                  In this post, we'll explain why regular roof maintenance is critical for protecting your home and avoiding costly repairs down the line. We'll also offer practical tips and advice for maintaining your roof, such as inspecting for damage after severe weather and cleaning your gutters regularly.


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
