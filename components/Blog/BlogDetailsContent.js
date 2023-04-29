import React from "react";
import BlogSidebar from "./BlogSidebar";

const BlogDetailsContent = () => {
  return (
    <>
      <section className="blog-details-area ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details">
                <div className="post-image">
                  <img src="/images/blog-details.jpg" alt="image" />
                </div>

                <h3>The Most Popular New top Business Apps</h3>

                <div className="blog-meta">
                  <ul>
                    <li>
                      <i className="fas fa-user"></i> <a href="#">Admin</a>
                    </li>
                    <li>
                      <i className="far fa-clock"></i> June 20, 2023
                    </li>
                    <li>
                      <i className="far fa-comment-dots"></i>{" "}
                      <a href="#">6 Comments</a>
                    </li>
                    <li>
                      <i className="fas fa-folder-open"></i>{" "}
                      <a href="#">Event</a>
                    </li>
                  </ul>
                </div>

                <p>
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in that some form by
                  injected humour or randomised words which don’t look even
                  slightly believable. If you are going to use a passage of
                  Lorem Ipsum you need to be sure there isn’t anything of
                  embarrassing. There are many that an variations of passages of
                  Lorem Ipsum available but the majority have suffered
                  alteration in that some form by a injected humour or
                  randomised words which don’t look even of slightly believable.
                  If you are going to use a the passage of Lorem Ipsum you need
                  to be sure there isn’t anything embarrassing.
                </p>

                <blockquote className="blockquote">
                  <p>
                    There are many variations of passages of Lorem the Ipsum
                    available but the that as that majority have is suffered
                    alteration.
                  </p>
                </blockquote>

                <p>
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in that some form by
                  injected humour or randomised words which don’t look even
                  slightly believable. If you are going to use a passage of
                  Lorem Ipsum you need to be sure there isn’t anything of
                  embarrassing.
                </p>

                <p>
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in that some form by
                  injected humour or randomised words which don’t look even
                  slightly believable. If you are going to use a passage of
                  Lorem Ipsum you need to be sure there isn’t anything of
                  embarrassing.
                </p>

                <p>
                  Randomised words which don’t look even slightly believable. If
                  you are going a to use a passage you need to be sure there
                  isn’t anything embarrassing. Consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <div className="post-tag-media">
                <div className="row h-100 align-items-center">
                  <div className="col-lg-6 col-md-7">
                    <ul className="tag">
                      <li>
                        <span>Tags:</span>
                      </li>
                      <li>
                        <a href="#">Event,</a>
                      </li>
                      <li>
                        <a href="#">App,</a>
                      </li>
                      <li>
                        <a href="#">Software</a>
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-6 col-md-5">
                    <ul className="social-share">
                      <li>
                        <span>Share on:</span>
                      </li>
                      <li>
                        <a href="https://www.facebook.com/" target="_blank">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.twitter.com/" target="_blank">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/" target="_blank">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/" target="_blank">
                          <i className="fab fa-linkedin"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div id="comments" className="comments-area">
                <h2 className="comments-title">3 Comments</h2>

                <ol className="comment-list">
                  <li className="comment">
                    <article className="comment-body">
                      <footer className="comment-meta">
                        <div className="comment-author vcard">
                          <img
                            src="/images/author1.jpg"
                            alt="image"
                            className="avatar"
                          />
                          <b className="fn">John Smith</b>
                          <span className="says">says:</span>
                        </div>

                        <div className="comment-metadata">
                          March 28, 2023 at 7:16 am
                        </div>
                      </footer>

                      <div className="comment-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Integer posuere erat a ante. It is a long
                          established fact that a reader will be distracted by
                          the readable content of a page when looking at its
                          layout.
                        </p>
                      </div>

                      <div className="reply">
                        <a
                          href="#"
                          className="comment-reply-link"
                        >
                          Reply
                        </a>
                      </div>
                    </article>

                    <ol className="children">
                      <li className="comment">
                        <article className="comment-body">
                          <footer className="comment-meta">
                            <div className="comment-author vcard">
                              <img
                                src="/images/author2.jpg"
                                alt="image"
                                className="avatar"
                              />
                              <b className="fn">Steven Warner</b>
                              <span className="says">says:</span>
                            </div>

                            <div className="comment-metadata">
                              March 28, 2023 at 7:16 am
                            </div>
                          </footer>

                          <div className="comment-content">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Integer posuere erat a ante. It is a long
                              established fact that a reader will be distracted
                              by the readable content of a page when looking at
                              its layout.
                            </p>
                          </div>

                          <div className="reply">
                            <a
                              href="#"
                              className="comment-reply-link"
                            >
                              Reply
                            </a>
                          </div>
                        </article>
                      </li>
                    </ol>
                  </li>

                  <li className="comment">
                    <article className="comment-body">
                      <footer className="comment-meta">
                        <div className="comment-author vcard">
                          <img
                            src="/images/author3.jpg"
                            alt="image"
                            className="avatar"
                          />
                          <b className="fn">John Smith</b>
                          <span className="says">says:</span>
                        </div>

                        <div className="comment-metadata">
                          March 28, 2023 at 7:16 am
                        </div>
                      </footer>

                      <div className="comment-content">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Integer posuere erat a ante. It is a long
                          established fact that a reader will be distracted by
                          the readable content of a page when looking at its
                          layout.
                        </p>
                      </div>

                      <div className="reply">
                        <a
                          href="#"
                          className="comment-reply-link"
                        >
                          Reply
                        </a>
                      </div>
                    </article>
                  </li>
                </ol>

                <div id="respond" className="comment-respond">
                  <h3 className="comment-reply-title">Leave a Reply</h3>

                  <form id="commentform" className="comment-form">
                    <p className="comment-notes">
                      Your email address will not be published.
                    </p>

                    <p className="comment-form-comment">
                      <textarea
                        id="comment"
                        placeholder="Comment"
                        cols="45"
                        rows="4"
                      />
                    </p>

                    <p className="comment-form-author">
                      <input id="author" placeholder="Name" type="text" />
                    </p>

                    <p className="comment-form-email">
                      <input id="email" placeholder="Email" type="text" />
                    </p>

                    <p className="comment-form-url">
                      <input id="url" placeholder="Website" type="text" />
                    </p>
                    
                    <p className="form-submit">
                      <input
                        name="submit"
                        type="submit"
                        id="submit"
                        className="submit"
                        value="Post Comment"
                      />
                    </p>
                  </form>
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

export default BlogDetailsContent;
