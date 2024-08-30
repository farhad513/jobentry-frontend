/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  clearAllJobErrors,
  postJob,
  resetJobSlice,
} from "../store/slices/jobSlice";
import { CiCircleInfo } from "react-icons/ci";

const JobPost = () => {
  const [title, setTitle] = useState("");
  const [jobType, setJobType] = useState("");
  const [location, setLocation] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [qualifications, setQualifications] = useState("");
  const [offers, setOffers] = useState("");
  const [jobNiche, setJobNiche] = useState("");
  const [salary, setSalary] = useState("");
  const [hiringMultipleCandidates, setHiringMultipleCandidates] = useState("");
  const [personalWebsiteTitle, setPersonalWebsiteTitle] = useState("");
  const [personalWebsiteUrl, setPersonalWebsiteUrl] = useState("");

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

  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { loading, error, message } = useSelector((state) => state.jobs);
  const dispatch = useDispatch();

  const handlePostJob = (e) => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("jobType", jobType);
    formData.append("location", location);
    formData.append("companyName", companyName);
    formData.append("introduction", introduction);
    formData.append("responsibilities", responsibilities);
    formData.append("qualifications", qualifications);
    offers && formData.append("offers", offers);
    formData.append("jobNiche", jobNiche);
    formData.append("salary", salary);
    hiringMultipleCandidates &&
      formData.append("hiringMultipleCandidates", hiringMultipleCandidates);
    personalWebsiteTitle &&
      formData.append("personalWebsiteTitle", personalWebsiteTitle);
    personalWebsiteUrl &&
      formData.append("personalWebsiteUrl", personalWebsiteUrl);

    dispatch(postJob(formData));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllJobErrors());
    }
    if (message) {
      toast.success(message);
      dispatch(resetJobSlice());
    }
  }, [dispatch, error, loading, message]);

  return (
    <div className="account_components">
      <h3 className="text-center mb-3">Post A Job</h3>
      <div className="form-outline mb-4 ">
        <input
          className="form-control "
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Job Title"
        />
      </div>
      <div className="row mb-4">
        <div className="col-6">
          <div>
            <select
              value={jobType}
              className="form-control "
              onChange={(e) => setJobType(e.target.value)}
            >
              <option value="">Select Job Type</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
            </select>
          </div>
        </div>
        <div className="col-6">
          <div>
            <select
              className="form-control "
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            >
              <option value="">Select Job Location</option>
              {cities.map((element) => {
                return <option value={element}>{element}</option>;
              })}
            </select>
          </div>
        </div>
      </div>

      <div className="form-outline mb-4 ">
        <input
          className="form-control"
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="Company Name"
        />
      </div>
      <div className="form-outline mb-4 ">
        <textarea
          value={introduction}
          className="form-control"
          onChange={(e) => setIntroduction(e.target.value)}
          placeholder="Company / Job Introduction"
          rows={7}
        />
      </div>
      <div className="form-outline mb-4 ">
        <textarea
          value={responsibilities}
          className="form-control"
          onChange={(e) => setResponsibilities(e.target.value)}
          placeholder="Job Responsibilities"
          rows={7}
        />
      </div>
      <div className="form-outline mb-4 ">
        <textarea
          className="form-control"
          value={qualifications}
          onChange={(e) => setQualifications(e.target.value)}
          placeholder="Required Qualifications For Job"
          rows={7}
        />
      </div>
      <div>
        <div className="form-outline mb-1 ">
          <label>What We Offer</label>
          <span>
            <CiCircleInfo /> Optional
          </span>
        </div>
        <textarea
          value={offers}
          className="form-control"
          onChange={(e) => setOffers(e.target.value)}
          placeholder="What are we offering in return!"
          rows={7}
        />
      </div>
      <div className="row mt-4">
        <div className="col-6">
          <div>
            <select
              className="form-control"
              value={jobNiche}
              onChange={(e) => setJobNiche(e.target.value)}
            >
              <option value="">Select Job Niche</option>
              {nichesArray.map((element) => {
                return <option value={element}>{element}</option>;
              })}
            </select>
          </div>
        </div>
        <div className="col-6">
          <div>
            <input
              className="form-control"
              type="text"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              placeholder="50000 - 800000"
            />
          </div>
        </div>
      </div>

      <div className="mt-3">
        <div className="label-infoTag-wrapper">
          <label>Hiring Multiple Candidates?</label>
          <span>
            <CiCircleInfo /> Optional
          </span>
        </div>
        <select
          className="form-control mt-2"
          value={hiringMultipleCandidates}
          onChange={(e) => setHiringMultipleCandidates(e.target.value)}
        >
          <option value="">Hiring Multiple Candidates?</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>
      <div>
        <div className="row">
          <div className="col-6">
            <div className="mt-3">
              <div className="">
                <label>Personal Website Name</label>
                <span>
                  <CiCircleInfo /> Optional
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                value={personalWebsiteTitle}
                onChange={(e) => setPersonalWebsiteTitle(e.target.value)}
                placeholder="Peronsal Website Name/Title"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="mt-3">
              <div className="label-infoTag-wrapper">
                <label>Personal Website (URL)</label>
                <span>
                  <CiCircleInfo /> Optional
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                value={personalWebsiteUrl}
                onChange={(e) => setPersonalWebsiteUrl(e.target.value)}
                placeholder="Peronsal Website Link (URL)"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex">
        <button
          style={{ margin: "0 auto" }}
          className="btn mx-auto text-back-color mt-4 w-25"
          onClick={handlePostJob}
          disabled={loading}
        >
          Post Job
        </button>
      </div>
    </div>
  );
};

export default JobPost;
