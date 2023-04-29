import React from "react";
import Link from 'next/link';

const Signin = () => {
  return (
    <>
      <section className="login-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="login-form">
              <h3>Welcome Back!</h3>

              <form>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                  />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Login
                </button>

                <p>
                  <Link href="/signup" className="pull-left">
                    Create a new account
                  </Link>

                  <Link href="/forgot-your-password" className="pull-right">
                    Forgot your password?
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signin;
