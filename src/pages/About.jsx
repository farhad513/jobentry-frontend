/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/img/about-1.jpg";
import img2 from "../assets/img/about-2.jpg";
import img3 from "../assets/img/about-3.jpg";
import img4 from "../assets/img/about-4.jpg";
const About = () => {
  return (
    <div>
      <div className="container-xxl py-5 bg-dark page-header mb-5">
        <div className="container my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            About Us
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb text-uppercase">
              <li className="breadcrumb-item">
                <Link className="text-main-color" to="/">
                  Home
                </Link>
              </li>

              <li
                className="breadcrumb-item text-white active"
                aria-current="page"
              >
                About
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="row g-0 about-bg rounded overflow-hidden">
                <div className="col-6 text-start">
                  <img className="img-fluid w-100" src={img1} />
                </div>
                <div className="col-6 text-start">
                  <img
                    className="img-fluid"
                    src={img2}
                    style={{ width: "85%", marginTop: "15%" }}
                  />
                </div>
                <div className="col-6 text-end">
                  <img
                    className="img-fluid"
                    src={img3}
                    style={{ width: "85%" }}
                  />
                </div>
                <div className="col-6 text-end">
                  <img className="img-fluid w-100" src={img4} />
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 className="mb-4">
                We Help To Get The Best Job And Find A Talent
              </h1>
              <p className="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <p>
                <i className="fa fa-check text-main-color me-3" />
                Tempor erat elitr rebum at clita
              </p>
              <p>
                <i className="fa fa-check text-main-color me-3" />
                Aliqu diam amet diam et eos
              </p>
              <p>
                <i className="fa fa-check text-main-color me-3" />
                Clita duo justo magna dolore erat amet
              </p>
              <Link
                className="btn btn-primary py-3 px-5 mt-3 text-back-color border-0"
                to="/about"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
