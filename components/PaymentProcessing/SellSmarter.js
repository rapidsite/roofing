import React from "react";
import Link from "next/link";

const SellSmarter = () => {
  return (
    <>
      <div className="start-now-area ptb-100">
        <div className="container">
          <div 
            className="start-now-content"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <span>Sell Smarter</span>
            <h2>Accept Payments Online. Get Paid Faster.</h2>
            <p>
              Keep track of all your payments using our beautifully designed
              payments dashboard. With all your payment information in one
              place, you'll be a more organized and efficient business owner.
            </p>
            <Link href="#" className="btn btn-primary">
              Start Now!
            </Link>
          </div>

          <div 
            className="dashboard-image"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="300"
          >
            <img src="/images/banner-chart-home.jpg" alt="image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SellSmarter;
