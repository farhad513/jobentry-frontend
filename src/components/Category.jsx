/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import CATEGORIES from "../utils/category";
const Category = () => {
  return (
    <div>
      <div className="container-xxl py-5">
        <div className="container">
          <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
            Explore By Category
          </h1>
          <div className="row g-4">
            {CATEGORIES.map((c, i) => {
              return (
                <div
                  key={i}
                  className="col-lg-3 col-sm-6 wow fadeInUp text-center "
                  data-wow-delay="0.1s"
                >
                  <Link
                    className="cat-item rounded p-4 text-decoration-none"
                    to="/"
                  >
                    <i
                      className={`fa fa-3x ${c.icon} text-primary mb-4 text-main-color`}
                    />
                    <h6 className="mb-3 text-black">{c.name}</h6>
                    <p className="mb-0 text-main-color">{c.vacancy} Vacancy</p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
