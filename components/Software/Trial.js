import React from "react";
import Link from "next/link";

const Trial = () => {
  return (
    <>
      <section className="free-trial-area ptb-100 pt-0">
        <div className="container">
          <div 
            className="free-trial-content"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="400"
          >
            <img src="/images/man-and-women.png" alt="owman" />
            <h3>Start Your 30 Days Free Trials Today!</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Link href="#" className="btn btn-primary">
              Try It Free
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Trial;
