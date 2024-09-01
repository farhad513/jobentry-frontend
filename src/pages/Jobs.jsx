/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearAllJobErrors, fetchJobs } from "../store/slices/jobSlice";
import Spinner from "../components/Spinner";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Jobs = () => {
  const [city, setCity] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [niche, setNiche] = useState("");
  const [selectedNiche, setSelectedNiche] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  const { jobs, loading, error } = useSelector((state) => state.jobs);

  const handleCityChange = (city) => {
    setCity(city);
    setSelectedCity(city);
  };
  const handleNicheChange = (niche) => {
    setNiche(niche);
    setSelectedNiche(niche);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllJobErrors());
    }
    dispatch(fetchJobs(city, niche, searchKeyword));
  }, [dispatch, error, city, niche]);

  const handleSearch = () => {
    dispatch(fetchJobs(city, niche, searchKeyword));
  };

  const cities = [
    "Dhaka",
    "Faridpur",
    "Gazipur",
    "Gopalganj",
    "Jamalpur",
    "Kishoreganj",
    "Madaripur",
    "Manikganj",
    "Munshiganj",
    "Mymensingh",
    "Narayanganj",
    "Narsingdi",
    "Netrokona",
    "Rajbari",
    "Shariatpur",
    "Sherpur",
    "Tangail",
    "Bogra",
    "Joypurhat",
    "Naogaon",
  ];

  const nichesArray = [
    "Software Development",
    "Web Development",
    "Cybersecurity",
    "Data Science",
    "Artificial Intelligence",
    "Cloud Computing",
    "DevOps",
    "Mobile App Development",
    "Blockchain",
    "Database Administration",
    "Network Administration",
    "UI/UX Design",
    "Game Development",
    "IoT (Internet of Things)",
    "Big Data",
    "Machine Learning",
    "IT Project Management",
    "IT Support and Helpdesk",
    "Systems Administration",
    "IT Consulting",
  ];

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <div className="container-xxl py-5 bg-dark page-header mb-5">
            <div className="container my-5 pt-5 pb-4">
              <h1 className="display-3 text-white mb-3 animated slideInDown">
                Job List
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
                    Job List
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <section className="container">
            <div className="d-flex justify-content-center align-items-center py-4 ">
              <input
                type="text"
                className="form-control w-50  rounded-0 py-3"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
              />
              <button
                onClick={handleSearch}
                className="text-back-color border-0 btn rounded-0 py-3 px-3 "
              >
                Find Job
              </button>
            </div>
            <div className="container">
              <div className="row mt-3">
                <div className="col-md-5 d-none d-md-block  ">
                  <div className="">
                    <div className="filter-bar">
                      <div className="">
                        <h2>Filter Job City</h2>
                        {cities.map((city, index) => (
                          <div className="d-flex gap-2" key={index}>
                            <input
                              type="radio"
                              id={city}
                              name="city"
                              value={city}
                              checked={selectedCity === city}
                              onChange={() => handleCityChange(city)}
                            />
                            <label htmlFor={city}>{city}</label>
                          </div>
                        ))}
                      </div>
                      <div className="cities">
                        <h2 className="my-3">Filter Job Niche</h2>
                        {nichesArray.map((niche, index) => (
                          <div className="d-flex gap-2" key={index}>
                            <input
                              type="radio"
                              id={niche}
                              name="niche"
                              value={niche}
                              checked={selectedNiche === niche}
                              onChange={() => handleNicheChange(niche)}
                            />
                            <label htmlFor={niche}>{niche}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-7 gap-5">
                  <div className="mobile_device d-none">
                    <select
                      className="form-control mb-3"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    >
                      <option value="">Filter By City</option>
                      {cities.map((city, index) => (
                        <option value={city} key={index}>
                          {city}
                        </option>
                      ))}
                    </select>
                    <select
                      className="form-control mb-3"
                      value={niche}
                      onChange={(e) => setNiche(e.target.value)}
                    >
                      <option value="">Filter By Niche</option>
                      {nichesArray.map((niche, index) => (
                        <option value={niche} key={index}>
                          {niche}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="d-flex gap-5">
                    <div className="jobs_container">
                      {jobs &&
                        jobs.map((element) => {
                          return (
                            <div className="card p-3 mb-3" key={element._id}>
                              {element.hiringMultipleCandidates === "Yes" ? (
                                <p className="">Hiring Multiple Candidates</p>
                              ) : (
                                <p
                                  style={{
                                    width: 70,
                                    textAlign: "center",
                                    borderRadius: 10,
                                  }}
                                  className="px-2 py-2 text-back-color"
                                >
                                  Hiring
                                </p>
                              )}
                              <p className="fs-2 mb-0 fw-bold">
                                {element.title}
                              </p>
                              <p className="fs-5 mb-0">{element.companyName}</p>
                              <p className="location mb-0">
                                Location : {element.location}
                              </p>
                              <p className="mb-0">
                                <span>Salary:</span> Rs. {element.salary}
                              </p>
                              <p className="posted">
                                <span>Posted On:</span>{" "}
                                {element.jobPostedOn.substring(0, 10)}
                              </p>
                              <div
                                style={{
                                  width: 120,
                                  borderRadius: 10,
                                  textAlign: "center",
                                }}
                                className="text-back-color py-1"
                              >
                                <Link
                                  className="btn"
                                  to={`/post/application/${element._id}`}
                                >
                                  Apply Now
                                </Link>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Jobs;
