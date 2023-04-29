import React, { Component } from "react";
import Link from "next/link";

class NavbarSix extends Component {
  render() {
    return (
      <>
        <nav
          id="navbar"
          className="navbar navbar-expand-lg navbar-style-three navbar-light bg-light"
        >
          <div className="container">
            <Link href="/lead-generation" className="navbar-brand">
              <img src="/images/white-logo.png" alt="logo" />
            </Link>
          </div>
        </nav>
      </>
    );
  }
}

export default NavbarSix;
