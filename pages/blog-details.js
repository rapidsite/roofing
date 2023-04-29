import React from "react";
import Navbar from "../components/Blog/Navbar";
import Footer from "../components/Layouts/Footer";
import BlogDetailsContent from "../components/Blog/BlogDetailsContent";

const BlogDetails = () => {
  return (
    <>
      <Navbar />

      {/* Page Title */}
      <section className="page-title-area jarallax">
        <div className="container">
          <h2>Blog Details</h2>
        </div>
      </section>

      <BlogDetailsContent />

      <Footer />
    </>
  );
};

export default BlogDetails;
