import React from "react";
import Link from "next/link";

const Custom404 = () => {
  return (
    <>
      <section className="error-area ptb-100 text-center">
        <div className="container">
          <div className="error-content">
            <img 
              src="/images/404.png" 
              alt="error" 
              className="mb-4"
            />

            <h2>Page Not Found</h2>

            <p>
              We're sorry, the page you requested could not be found please go
              back the homepage.
            </p>

            <Link href="/" className="btn btn-primary">
              Go To Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Custom404;
