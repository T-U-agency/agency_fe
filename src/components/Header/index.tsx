"use client";
import React from "react";
import Link from "next/link";

function Header() {
  console.log("hi hi");
  return (
    <div
      data-animation="default"
      data-collapse="medium"
      data-duration="400"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className="navbar w-nav"
    >
      <div className="container w-container">
        <div className="grid-navbar">
          <Link
            id="w-node-d032e098-d331-9278-0626-85c9ae1d98b6-ae1d98b3"
            className="brand w-nav-brand"
            aria-label="home"
            href="/"
            passHref
          >
            <h4 className="navbar-logo">Home</h4>
          </Link>
          <nav
            role="navigation"
            id="w-node-d032e098-d331-9278-0626-85c9ae1d98b8-ae1d98b3"
            className="nav-menu w-nav-menu "
          >
            <Link
              className="nav-link w-nav-link"
              style={{ maxWidth: "1520px" }}
              href="/landing-pages/home-1"
              passHref
            >
              Home
            </Link>
            <Link
              className="nav-link w-nav-link"
              href="/company-pages/about"
              style={{ maxWidth: "1520px" }}
              passHref
            >
              About
            </Link>
          </nav>
          <div
            id="w-node-d032e098-d331-9278-0626-85c9ae1d990b-ae1d98b3"
            className="navbar-right nav-right-hide"
          >
            <Link
              className="button-black-inline nav-button w-button"
              href="/contact"
              passHref
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
