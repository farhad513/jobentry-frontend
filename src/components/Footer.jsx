/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import {
//   FaSquareXTwitter,
//   FaSquareInstagram,
//   FaYoutube,
//   FaLinkedin,
// } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";

const Footer = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  return (
    <>
      {/* <footer>
        <div>
          <img src="/logo.png" alt="logo" />
        </div>
        <div>
          <h4>Support</h4>
          <ul>
            <li>Street No.007 Shahrah-e-Faisal Karachi, Pakistan</li>
            <li>nichenest@gmail.com</li>
            <li>+92 3106507521</li>
          </ul>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li to={"/"}>
              <Link>Home</Link>
            </li>
            <li to={"/jobs"}>
              <Link>Jobs</Link>
            </li>
            {isAuthenticated && (
              <li>
                <Link to={"/dashboard"}>Dashboard</Link>
              </li>
            )}
          </ul>
        </div>
        <div>
          <h4>Follow Us</h4>
          <ul>
            <li>
              <Link to={"/"}>
                <span>
                  <FaSquareXTwitter />
                </span>
                <span>Twitter (X)</span>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <span>
                  <FaSquareInstagram />
                </span>
                <span>Instagram</span>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <span>
                  <FaYoutube />
                </span>
                <span>Youtube</span>
              </Link>
            </li>
            <li>
              <Link to={"/"}>
                <span>
                  <FaLinkedin />
                </span>
                <span>LinkedIn</span>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
      <div className="copyright">
        &copy; CopyRight 2024. All Rights Reserved By CodeWithZeeshu
      </div> */}
      <div
        className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Company</h5>
              <Link to={"/about"} className="btn btn-link text-white-50">
                About Us
              </Link>
              <Link className="btn btn-link text-white-50" to={"/contact"}>
                Contact Us
              </Link>
              <Link className="btn btn-link text-white-50" to={"/service"}>
                Our Services
              </Link>
              <Link className="btn btn-link text-white-50" to={"/privacy"}>
                Privacy Policy
              </Link>
              <a className="btn btn-link text-white-50" href>
                Terms &amp; Condition
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Quick Links</h5>
              <Link className="btn btn-link text-white-50" to="/">
                Cv Writting
              </Link>
              <Link className="btn btn-link text-white-50" to={"/"}>
                Carrier Service
              </Link>
              <a className="btn btn-link text-white-50" href>
                Our Services
              </a>
              <Link className="btn btn-link text-white-50" to={"/register"}>
                Create Account
              </Link>
              <a className="btn btn-link text-white-50" href>
                Terms &amp; Condition
              </a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Contact</h5>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3" />
                Chatkhil, Noakhali
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3" />
                +8801518-690471
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3" />
                farhad.nc@gmail.com
              </p>
              <div className="d-flex pt-2">
                <Link className="btn btn-outline-light btn-social" to={"/"}>
                  <i className="fab fa-twitter" />
                </Link>
                <Link className="btn btn-outline-light btn-social" to={"/"}>
                  <i className="fab fa-facebook-f" />
                </Link>
                <Link className="btn btn-outline-light btn-social" to={"/"}>
                  <i className="fab fa-youtube" />
                </Link>
                <Link className="btn btn-outline-light btn-social" to={"/"}>
                  <i className="fab fa-linkedin-in" />
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="text-white mb-4">Newsletter</h5>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div
                className="position-relative mx-auto"
                style={{ maxWidth: 400 }}
              >
                <input
                  className="form-control bg-transparent w-100 py-3 ps-4 pe-5 text-white"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  SignUp
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
