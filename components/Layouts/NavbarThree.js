import React, { Component } from "react";
import Link from "next/link";
import AnchorLink from "react-anchor-link-smooth-scroll";

class NavbarThree extends Component {
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
    this.menuActiveClass();
  }

  menuActiveClass = () => {
    let mainNavLinks = document.querySelectorAll("nav ul li a");
    window.addEventListener("scroll", () => {
      let fromTop = window.scrollY;
      mainNavLinks.forEach((link) => {
        if (link.hash) {
          let section = document.querySelector(link.hash);

          if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
          ) {
            link.classList.add("active");
          } else {
            link.classList.remove("active");
          }
        }
      });
    });
  };

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
            <Link href="/saas" className="navbar-brand">
              <img src="/images/white-logo.png" alt="logo" />
              <img src="/images/black-logo.png" alt="logo" />
            </Link>

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
                  <AnchorLink
                    onClick={this.toggleNavbar}
                    offset={() => 100}
                    className="nav-link active"
                    href="#home"
                  >
                    Home
                  </AnchorLink>
                </li>

                <li className="nav-item">
                  <AnchorLink
                    onClick={this.toggleNavbar}
                    offset={() => 0}
                    className="nav-link"
                    href="#services"
                  >
                    Services
                  </AnchorLink>
                </li>

                <li className="nav-item">
                  <AnchorLink
                    onClick={this.toggleNavbar}
                    offset={() => 0}
                    className="nav-link"
                    href="#features"
                  >
                    Features
                  </AnchorLink>
                </li>

                <li className="nav-item">
                  <AnchorLink
                    onClick={this.toggleNavbar}
                    offset={() => -10}
                    className="nav-link"
                    href="#testimonials"
                  >
                    Testimonials
                  </AnchorLink>
                </li>

                <li className="nav-item">
                  <AnchorLink
                    onClick={this.toggleNavbar}
                    offset={() => -10}
                    className="nav-link"
                    href="#pricing"
                  >
                    Pricing
                  </AnchorLink>
                </li>

                <li className="nav-item">
                  <AnchorLink
                    onClick={this.toggleNavbar}
                    offset={() => -10}
                    className="nav-link"
                    href="#blog"
                  >
                    News
                  </AnchorLink>
                </li>

                <li className="nav-item">
                  <AnchorLink
                    onClick={this.toggleNavbar}
                    offset={() => -10}
                    className="nav-link"
                    href="#contact"
                  >
                    Contact
                  </AnchorLink>
                </li>
              </ul>

              <ul className="others-option">
                <li>
                  <a href="/signin" className="btn btn-primary">
                    Sign In
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default NavbarThree;
