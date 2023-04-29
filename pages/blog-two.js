import React from "react";
import Navbar from "../components/Blog/Navbar";
import Footer from "../components/Layouts/Footer";
import BlogTwoGrid from "../components/Blog/BlogTwoGrid";

const BlogTwo = () => {
  return (
    <>
      <Navbar />

      {/* Page Title */}
      <section className="page-title-area jarallax">
        <div className="container">
          <h2>Blog</h2>
        </div>
      </section>

      <BlogTwoGrid />

      <Footer />
    </>
  );
};

export default BlogTwo;
