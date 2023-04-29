import React from "react";
import Navbar from "../components/Blog/Navbar";
import BlogGridCard from "../components/Blog/BlogGridCard";
import Footer from "../components/Layouts/Footer";

const Blog = () => {
  return (
    <>
      <Navbar />

      {/* Page Title */}
      <section className="page-title-area jarallax">
        <div className="container">
          <h2>Blog</h2>
        </div>
      </section>

      <BlogGridCard />

      <Footer />
    </>
  );
};

export default Blog;
