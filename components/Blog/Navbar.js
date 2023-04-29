import Link from "next/link";
import React, { Component } from "react";

class Navbar extends Component {
  state = {
    collapsed: true,
  };

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  componentDidMount() {
    this._isMounted = true;
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  }
  render() {
    const { collapsed } = this.state;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "navbar-collapse collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";
    return (
      <>
        <nav
          id="navbar"
          className="navbar navbar-expand-lg navbar-style-one navbar-light bg-light"
        >
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src="/images/white-logo.png" alt="logo" />
              <img src="/images/black-logo.png" alt="logo" />
            </a>

            <button
              onClick={this.toggleNavbar}
              className={classTwo}
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className={classOne} id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" href="/#home">
                    Home
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" href="/#about">
                    About
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" href="/#features">
                    Features
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" href="/#testimonials">
                    Testimonials
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" href="/#pricing">
                    Pricing
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" href="/#blog">
                    News
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" href="/#contact">
                    Contact
                  </Link>
                </li>
              </ul>

              <ul className="others-option">
                <li>
                  <Link href="/signin" className="btn btn-primary">
                    Sign In
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
