/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <div className="container-xxl py-5 bg-dark page-header mb-5">
        <div className="container my-5 pt-5 pb-4">
          <h1 className="display-3 text-white mb-3 animated slideInDown">
            Contact
          </h1>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb text-uppercase">
              <li className="breadcrumb-item">
                <Link to="/">Home</Link>
              </li>
              <li
                className="breadcrumb-item text-white active"
                aria-current="page"
              >
                Contact
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className="container-xxl py-5">
        <div className="container">
          <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
            Contact For Any Query
          </h1>
          <div className="row g-4">
            <div className="col-12">
              <div className="row gy-4">
                <div className="col-md-4 wow fadeIn" data-wow-delay="0.1s">
                  <div className="d-flex align-items-center bg-light rounded p-4">
                    <div
                      className="bg-white border rounded d-flex flex-shrink-0 align-items-center justify-content-center me-3"
                      style={{ width: 45, height: 45 }}
                    >
                      <i className="fa fa-map-marker-alt text-primary" />
                    </div>
                    <span>Chatkhil, Noakhali</span>
                  </div>
                </div>
                <div className="col-md-4 wow fadeIn" data-wow-delay="0.3s">
                  <div className="d-flex align-items-center bg-light rounded p-4">
                    <div
                      className="bg-white border rounded d-flex flex-shrink-0 align-items-center justify-content-center me-3"
                      style={{ width: 45, height: 45 }}
                    >
                      <i className="fa fa-envelope-open text-primary" />
                    </div>
                    <span>farhad.nc@gmail.com</span>
                  </div>
                </div>
                <div className="col-md-4 wow fadeIn" data-wow-delay="0.5s">
                  <div className="d-flex align-items-center bg-light rounded p-4">
                    <div
                      className="bg-white border rounded d-flex flex-shrink-0 align-items-center justify-content-center me-3"
                      style={{ width: 45, height: 45 }}
                    >
                      <i className="fa fa-phone-alt text-primary" />
                    </div>
                    <span>+8801518-690471</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <iframe
                className="position-relative rounded w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d67857.42020486131!2d90.88467876113397!3d23.067156663627063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37549130d3d5032d%3A0xb039d1043fb53c85!2sChatkhil%20Upazila!5e0!3m2!1sen!2sbd!4v1723192672928!5m2!1sen!2sbd"
                style={{ minHeight: 400, border: 0 }}
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
              ></iframe>
            </div>
            <div className="col-md-6">
              <div className="wow fadeInUp" data-wow-delay="0.5s">
                <form>
                  <div className="row g-3 mt-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Your Email"
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          placeholder="Subject"
                        />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Leave a message here"
                          id="message"
                          style={{ height: 150 }}
                          defaultValue={""}
                        />
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button
                        className="btn btn-primary w-100 py-3"
                        type="submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
