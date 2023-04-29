import React from "react";

const ShopOnline = () => {
  return (
    <>
      <section className="shop-online-area ptb-100">
        <div className="container">
          <div
            className="payment-processing-section-title"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <span>Shopping</span>
            <h2>Shop 50 million online stores and counting.</h2>
            <p>
              Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
              maecenas accumsan lacus vel facilisis.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-12 col-md-12">
              <div
                className="shop-online-image"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="200"
              >
                <img src="/images/man-and-women.png" alt="shop" />
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="single-item"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <i className="fas fa-money-check"></i>
                <h3>Shop your favorite brands.</h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="single-item"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="400"
              >
                <i className="fas fa-shopping-cart"></i>
                <h3>Who shops in the world? You.</h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div
                className="single-item"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="500"
              >
                <i className="fas fa-headset"></i>
                <h3>Buy with confidence.</h3>
                <p>
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopOnline;
