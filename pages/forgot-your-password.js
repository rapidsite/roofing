import React from "react";

const ForgotYourPassword = () => {
  return (
    <>
      <section className="login-area">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="login-form">
              <h3>Forgot Password</h3>

              <form>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Forgot Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ForgotYourPassword;
