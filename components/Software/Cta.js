import React from "react";
import Link from "next/link";

const Cta = () => {
  return (
    <>
      <section className="cta-area-three ptb-100 bg-fffcf4">
        <div className="container">
          <div
            className="cta-content-three"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="400"
          >
            <img src="/images/star.png" alt="cta" />
            <h3>General Data Protection Regulation (GDPR)</h3>
            <p>
              The reforms are designed to reflect the world we're living in now,
              and brings laws and obligations - including those around personal
              data, privacy and consent - across Europe up to speed for the
              internet-connected age.
            </p>
            <Link href="#" className="btn btn-primary">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cta;
