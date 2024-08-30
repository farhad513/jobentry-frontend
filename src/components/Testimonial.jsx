/* eslint-disable no-unused-vars */
import React from "react";
import img1 from "../assets/img/testimonial-1.jpg";
import img2 from "../assets/img/testimonial-2.jpg";
import img3 from "../assets/img/testimonial-3.jpg";
const Testimonial = () => {
  return (
    <div>
      <section className="bg-light py-5 py-xl-8">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h2 className="fs-6 text-secondary mb-2 text-uppercase text-center">
                Happy Customers
              </h2>

              <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
            </div>
          </div>
        </div>
        <div className="container overflow-hidden">
          <div className="row gy-4 gy-md-0 gx-xxl-5">
            <div className="col-12 col-md-4">
              <div className="card border-0 border-bottom border-primary shadow-sm">
                <div className="card-body p-4 p-xxl-5">
                  <figure>
                    <img
                      className="img-fluid rounded rounded-circle mb-4 border border-5"
                      loading="lazy"
                      src={img1}
                      alt="Luna John"
                    />
                    <figcaption>
                      <div
                        className="bsb-ratings text-warning mb-3"
                        data-bsb-star={5}
                        data-bsb-star-off={0}
                      />
                      <blockquote className="bsb-blockquote-icon mb-4">
                        We were so impressed with the work they did for us. They
                        were able to take our vision and turn it into a reality,
                        and they did it all on time and within budget. We would
                        highly recommend them to anyone looking for a reliable
                        partner.
                      </blockquote>
                      <h4 className="mb-2">Luna John</h4>
                      <h5 className="fs-6 text-secondary mb-0">UX Designer</h5>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card border-0 border-bottom border-primary shadow-sm">
                <div className="card-body p-4 p-xxl-5">
                  <figure>
                    <img
                      className="img-fluid rounded rounded-circle mb-4 border border-5"
                      loading="lazy"
                      src={img2}
                      alt="Mark Smith"
                    />
                    <figcaption>
                      <div
                        className="bsb-ratings text-warning mb-3"
                        data-bsb-star={4}
                        data-bsb-star-off={1}
                      />
                      <blockquote className="bsb-blockquote-icon mb-4">
                        We were looking for a company that could help us develop
                        a new website that was both visually appealing and
                        user-friendly. We are so happy with the results, and we
                        would highly recommend them to anyone looking for a new
                        website.
                      </blockquote>
                      <h4 className="mb-2">Mark Smith</h4>
                      <h5 className="fs-6 text-secondary mb-0">
                        Marketing Specialist
                      </h5>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card border-0 border-bottom border-primary shadow-sm">
                <div className="card-body p-4 p-xxl-5">
                  <figure>
                    <img
                      className="img-fluid rounded rounded-circle mb-4 border border-5"
                      loading="lazy"
                      src={img3}
                      alt="Luke Reeves"
                    />
                    <figcaption>
                      <div
                        className="bsb-ratings text-warning mb-3"
                        data-bsb-star={5}
                        data-bsb-star-off={0}
                      />
                      <blockquote className="bsb-blockquote-icon mb-4">
                        We were looking for a company that could help us with
                        our branding. We needed a website and marketing
                        materials. They were able to create a brand identity
                        that we loved. They worked with us to develop a logo
                        that represented our company.
                      </blockquote>
                      <h4 className="mb-2">Luke Reeves</h4>
                      <h5 className="fs-6 text-secondary mb-0">
                        Sales Manager
                      </h5>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
