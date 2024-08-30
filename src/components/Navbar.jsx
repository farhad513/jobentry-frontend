/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <Link
          to="/"
          className="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5"
        >
          <h1 className="m-0 text-main-color">JobEntry</h1>
        </Link>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <NavLink to="/" className="nav-item nav-link ">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-item nav-link">
              About
            </NavLink>
            <NavLink to="/jobs" className="nav-item nav-link">
              JOBS
            </NavLink>

            <NavLink to="/contact" className="nav-item nav-link">
              Contact
            </NavLink>
            {isAuthenticated ? (
              <NavLink to="/dashboard" className="nav-item nav-link">
                DASHBOARD
              </NavLink>
            ) : (
              <NavLink to="/login" className="nav-item nav-link">
                LOGIN
              </NavLink>
            )}
          </div>
          {/* <a
            href=""
            className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block"
          >
            Post A Job<i className="fa fa-arrow-right ms-3"></i>
          </a> */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
