/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  clearAllApplicationErrors,
  postApplication,
  resetApplicationSlice,
} from "../store/slices/applicationSlice";
import { toast } from "react-toastify";
import { fetchSingleJob } from "../store/slices/jobSlice";
import { IoMdCash } from "react-icons/io";
import { FaToolbox } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const PostApplication = () => {
  const { singleJob } = useSelector((state) => state.jobs);
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { loading, error, message } = useSelector(
    (state) => state.applications
  );

  const { jobId } = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [resume, setResume] = useState("");

  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const handlePostApplication = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("coverLetter", coverLetter);
    if (resume) {
      formData.append("resume", resume);
    }
    dispatch(postApplication(formData, jobId));
  };

  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setEmail(user.email || "");
      setPhone(user.phone || "");
      setAddress(user.address || "");
      setCoverLetter(user.coverLetter || "");
      setResume((user.resume && user.resume.url) || "");
    }
    if (error) {
      toast.error(error);
      dispatch(clearAllApplicationErrors());
    }
    if (message) {
      toast.success(message);

      dispatch(resetApplicationSlice());
      navigateTo("/");
    }
    dispatch(fetchSingleJob(jobId));
  }, [dispatch, error, message, jobId, user]);

  let qualifications = [];
  let responsibilities = [];  
  let offering = [];
  if (singleJob.qualifications) {
    qualifications = singleJob.qualifications.split(". ");
  }
  if (singleJob.responsibilities) {
    responsibilities = singleJob.responsibilities.split(". ");
  }
  if (singleJob.offers) {
    offering = singleJob.offers.split(". ");
  }

  const resumeHandler = (e) => {
    const file = e.target.files[0];
    setResume(file);
  };
  console.log(singleJob);
  return (
    <>
      <div>
        <div className="container-xxl py-5 bg-dark page-header mb-5">
          <div className="container my-5 pt-5 pb-4">
            <h1 className="display-3 text-white mb-3 animated slideInDown">
              Job Detail
            </h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb text-uppercase">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>

                <li
                  className="breadcrumb-item text-white active"
                  aria-current="page"
                >
                  Job Detail
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container">
            <div className="row gy-5 gx-4">
              <div className="col-lg-8">
                <div className="d-flex align-items-center mb-5">
                  <div className="text-start ps-0">
                    <h3 className="mb-3">{singleJob.title}</h3>
                    <span className="text-truncate me-3">
                      <i className="fa fa-map-marker-alt text-primary me-2" />
                      {singleJob.location}
                    </span>
                    <span className="text-truncate me-3">
                      <i className="far fa-clock text-primary me-2" />
                      {singleJob.jobType}
                    </span>
                    <span className="text-truncate me-0">
                      <i className="far fa-money-bill-alt text-primary me-2" />
                      {singleJob.salary}
                    </span>
                  </div>
                </div>
                <div className="mb-5">
                  <h4 className="mb-3">Job description</h4>
                  <p style={{ textAlign: "justify" }}>
                    {singleJob.introduction}
                  </p>
                  {singleJob.responsibilities && (
                    <div>
                      <h4 className="mb-3">Responsibility</h4>
                      <ul>
                        {responsibilities.map((element) => {
                          return (
                            <li
                              key={element}
                              style={{
                                listStyle: "inside",
                                textAlign: "justify",
                              }}
                            >
                              {element}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}

                  {singleJob.qualifications && (
                    <>
                      <h4 className="mb-3">Qualifications</h4>
                      <ul>
                        {qualifications.map((element) => {
                          return (
                            <li
                              key={element}
                              style={{
                                listStyle: "inside",
                                textAlign: "justify",
                              }}
                            >
                              {element}
                            </li>
                          );
                        })}
                      </ul>
                    </>
                  )}
                </div>
                <div className>
                  <h4 className="mb-4">Apply For The Job</h4>
                  <form>
                    <div className="row g-3">
                      <div className="col-12 col-sm-6">
                        <input
                          type="text"
                          className="form-control"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <div className="col-12 col-sm-6">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Your Email"
                          value={email}
                          disabled
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <div className="col-12 col-sm-6">
                        <input
                          type="number"
                          value={phone}
                          className="form-control"
                          onChange={(e) => setPhone(e.target.value)}
                        />
                      </div>

                      <div className="col-12 col-sm-6">
                        {user && user.role === "Job Seeker" && (
                          <input
                            type="file"
                            onChange={resumeHandler}
                            className="form-control bg-white"
                          />
                        )}
                      </div>

                      <div className="col-12">
                        {user && user.role === "Job Seeker" && (
                          <textarea
                            className="form-control"
                            rows={5}
                            placeholder="Coverletter"
                            defaultValue={""}
                            value={coverLetter}
                            onChange={(e) => setCoverLetter(e.target.value)}
                          />
                        )}
                      </div>
                      <div className="col-12">
                        {isAuthenticated && user.role === "Job Seeker" && (
                          <div style={{ alignItems: "flex-end" }}>
                            <button
                              className="btn btn-primary w-100"
                              type="submit"
                              onClick={handlePostApplication}
                              disabled={loading}
                            >
                              Apply Now
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-4">
                <div
                  className="bg-light rounded p-5 mb-4 wow slideInUp"
                  data-wow-delay="0.1s"
                >
                  <h4 className="mb-4">Job Summery</h4>
                  <p>
                    <i className="fa fa-angle-right text-primary me-2" />
                    Published On:{" "}
                    {new Date(singleJob.jobPostedOn).toLocaleDateString(
                      "en-GB"
                    )}
                  </p>

                  <p>
                    <i className="fa fa-angle-right text-primary me-2" />
                    Job Nature: {singleJob.jobType}
                  </p>
                  <p>
                    <i className="fa fa-angle-right text-primary me-2" />
                    Salary: ${singleJob.salary}
                  </p>
                  <p>
                    <i className="fa fa-angle-right text-primary me-2" />
                    Location: {singleJob.location}
                  </p>
                </div>
                <div
                  className="bg-light rounded p-5 wow slideInUp"
                  data-wow-delay="0.1s"
                >
                  <h4 className="mb-4">Company Offers</h4>
                  <p className="m-0 " style={{ textAlign: "justify" }}>
                    {singleJob.offers}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostApplication;
