import React from "react";
import Link from "next/link";

const Trial = () => {
  return (
    <>
      <section className="free-trial-area">
        <div className="container">
          <div className="free-trial-content">
            <img 
              src="/images/man-and-women.png" 
              alt="owman" 
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="100"
            />
            <h3
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              Start Your 30 Days Free Trials Today!
            </h3>
            <p
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link 
              href="#" 
              className="btn btn-primary"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              Try It Free
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Trial;
