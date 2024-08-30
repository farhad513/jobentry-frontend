/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearAllUserErrors, register } from "../store/slices/userSlice";
import { toast } from "react-toastify";
import { FaAddressBook, FaPencilAlt, FaRegUser } from "react-icons/fa";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdCategory, MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";

const Register = () => {
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [firstNiche, setFirstNiche] = useState("");
  const [secondNiche, setSecondNiche] = useState("");
  const [thirdNiche, setThirdNiche] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [resume, setResume] = useState("");

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

  const resumeHandler = (e) => {
    const file = e.target.files[0];
    setResume(file);
  };

  const { loading, isAuthenticated, error, message } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const handleRegsiter = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("role", role);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);
    formData.append("password", password);
    if (role === "Job Seeker") {
      formData.append("firstNiche", firstNiche);
      formData.append("secondNiche", secondNiche);
      formData.append("thirdNiche", thirdNiche);
      formData.append("coverLetter", coverLetter);
      formData.append("resume", resume);
    }
    dispatch(register(formData));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllUserErrors());
    }
    if (isAuthenticated) {
      navigateTo("/");
    }
  }, [dispatch, error, loading, isAuthenticated, message]);

  return (
    <>
      <section className="vh-80 mt-4">
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: 15 }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-0">
                      Create an account
                    </h2>
                  </div>
                  <form className="px-4" onSubmit={handleRegsiter}>
                    <div className="row">
                      <div className="col-6">
                        <div className="form-outline mb-4">
                          <div>
                            <select
                              value={role}
                              className="form-control "
                              onChange={(e) => setRole(e.target.value)}
                            >
                              <option value="">Select Role</option>
                              <option value="Employer">
                                Login as an Employer
                              </option>
                              <option value="Job Seeker">
                                Login as a Job Seeker
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-outline mb-4">
                          <div>
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Your Name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-6">
                        <div className="form-outline mb-4">
                          <div>
                            <input
                              className="form-control"
                              type="email"
                              placeholder="youremail@gmail.com"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-outline mb-4">
                          <div>
                            <input
                              className="form-control"
                              type="number"
                              placeholder="0180000000"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <div className="form-outline mb-4">
                          <div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Your Address"
                              value={address}
                              onChange={(e) => setAddress(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-outline mb-4">
                          <div>
                            <input
                              className="form-control"
                              type="password"
                              placeholder="Your Password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {role === "Job Seeker" && (
                      <>
                        <div className="row">
                          <div className="col-6">
                            <div className="form-outline mb-4">
                              <div>
                                <select
                                  className="form-control"
                                  value={firstNiche}
                                  onChange={(e) =>
                                    setFirstNiche(e.target.value)
                                  }
                                >
                                  <option value="">Your First Niche</option>
                                  {nichesArray.map((niche, index) => {
                                    return (
                                      <option key={index} value={niche}>
                                        {niche}
                                      </option>
                                    );
                                  })}
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="form-outline mb-4">
                              <div>
                                <select
                                  className="form-control mr-0 pr-0 mx-0"
                                  value={secondNiche}
                                  onChange={(e) =>
                                    setSecondNiche(e.target.value)
                                  }
                                >
                                  <option value="">Your Second Niche</option>
                                  {nichesArray.map((niche, index) => {
                                    return (
                                      <option key={index} value={niche}>
                                        {niche}
                                      </option>
                                    );
                                  })}
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="form-outline mb-4">
                          <div>
                            <select
                              className="form-control"
                              value={thirdNiche}
                              onChange={(e) => setThirdNiche(e.target.value)}
                            >
                              <option value="">Your Third Niche</option>
                              {nichesArray.map((niche, index) => {
                                return (
                                  <option key={index} value={niche}>
                                    {niche}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                        </div>

                        <div className="form-outline mb-4">
                          <div>
                            <textarea
                              className="form-control"
                              placeholder="Please Enter your cover letter"
                              value={coverLetter}
                              onChange={(e) => setCoverLetter(e.target.value)}
                              rows={10}
                            />
                          </div>
                        </div>

                        <div className="wrapper">
                          <div className="form-outline mb-4">
                            <div>
                              <input
                                className="form-control"
                                type="file"
                                onChange={resumeHandler}
                                style={{ border: "none" }}
                              />
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                    <div className="d-flex mx-auto">
                      <button
                        type="submit"
                        disabled={loading}
                        data-mdb-button-init
                        data-mdb-ripple-init
                        className="btn btn-primary text-back-color border-0 mx-auto btn-block mb-2 w-25"
                      >
                        Register
                      </button>
                    </div>
                  </form>
                  <p className="text-center text-muted  mb-2">
                    Have already an account?
                    <Link to="/login" className="fw-bold text-body">
                      <u>Login here</u>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
