import React from "react";
import Link from "next/link";
import BlogSidebar from "./BlogSidebar";

const BlogTwoGrid = () => {
  return (
    <>
      <section className="blog-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="single-blog-item">
                    <div className="blog-image">
                      <Link href="/blog-details">
                        <img src="/images/blog1.jpg" alt="imblogage" />
                      </Link>

                      <div className="post-tag">
                        <Link href="#">Technology</Link>
                      </div>
                    </div>

                    <div className="blog-post-content">
                      <span className="date">25 Feb, 2023</span>
                      <h3>
                        <Link href="#">
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
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="single-blog-item">
                    <div className="blog-image">
                      <Link href="/blog-details">
                        <img src="/images/blog2.jpg" alt="imblogage" />
                      </Link>

                      <div className="post-tag">
                        <Link href="#">Agency</Link>
                      </div>
                    </div>

                    <div className="blog-post-content">
                      <span className="date">27 Feb, 2023</span>
                      <h3>
                        <Link href="#">
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
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="single-blog-item">
                    <div className="blog-image">
                      <Link href="/blog-details">
                        <img src="/images/blog3.jpg" alt="imblogage" />
                      </Link>

                      <div className="post-tag">
                        <Link href="#">IT</Link>
                      </div>
                    </div>

                    <div className="blog-post-content">
                      <span className="date">28 Feb, 2023</span>
                      <h3>
                        <Link href="#">
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
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="single-blog-item">
                    <div className="blog-image">
                      <Link href="/blog-details">
                        <img src="/images/blog4.jpg" alt="imblogage" />
                      </Link>

                      <div className="post-tag">
                        <Link href="#">Creative</Link>
                      </div>
                    </div>

                    <div className="blog-post-content">
                      <span className="date">29 Feb, 2023</span>
                      <h3>
                        <Link href="#">
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
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="single-blog-item">
                    <div className="blog-image">
                      <Link href="/blog-details">
                        <img src="/images/blog5.jpg" alt="imblogage" />
                      </Link>

                      <div className="post-tag">
                        <Link href="#">Technology</Link>
                      </div>
                    </div>

                    <div className="blog-post-content">
                      <span className="date">25 Feb, 2023</span>
                      <h3>
                        <Link href="#">
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
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="single-blog-item">
                    <div className="blog-image">
                      <Link href="/blog-details">
                        <img src="/images/blog6.jpg" alt="imblogage" />
                      </Link>

                      <div className="post-tag">
                        <Link href="#">Agency</Link>
                      </div>
                    </div>

                    <div className="blog-post-content">
                      <span className="date">27 Feb, 2023</span>
                      <h3>
                        <Link href="#">
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
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="pagination-area">
                    <nav aria-label="Page navigation">
                      <ul className="pagination justify-content-center">
                        <li className="page-item">
                          <Link className="page-link" href="#">
                            <i className="fas fa-angle-double-left"></i>
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link active" href="#">
                            1
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" href="#">
                            2
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" href="#">
                            3
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link className="page-link" href="#">
                            <i className="fas fa-angle-double-right"></i>
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12">
              {/* BlogSidebar */}
              <BlogSidebar />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogTwoGrid;
