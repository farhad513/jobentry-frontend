/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import {
  clearAllApplicationErrors,
  resetApplicationSlice,
  deleteApplication,
  fetchJobSeekerApplications,
} from "../store/slices/applicationSlice";
import Spinner from "../components/Spinner";

const MyApplications = () => {
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const { loading, error, applications, message } = useSelector(
    (state) => state.applications
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchJobSeekerApplications());
  }, []);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllApplicationErrors());
    }
    if (message) {
      toast.success(message);
      dispatch(resetApplicationSlice());
      dispatch(fetchJobSeekerApplications());
    }
  }, [dispatch, error, message]);

  const handleDeleteApplication = (id) => {
    dispatch(deleteApplication(id));
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : applications && applications.length <= 0 ? (
        <h1 style={{ fontSize: "1.4rem", fontWeight: "600" }}>
          You have not applied for any job.
        </h1>
      ) : (
        <>
          <div className="">
            <h3 className="text-center">My Application For Jobs</h3>
            <div className="container">
              {applications.map((element) => {
                return (
                  <div className="card p-3" key={element._id}>
                    <p className="fs-4 fw-bold mb-0">
                      <span className="">Job Title: </span>{" "}
                      {element.jobInfo.jobTitle}
                    </p>
                    <p className="fs-5  mb-0">
                      <span>Name</span> : {element.jobSeekerInfo.name}
                    </p>
                    <p className="fs-5  mb-0">
                      <span>Email</span> {element.jobSeekerInfo.email}
                    </p>
                    <p className="fs-5  mb-0">
                      <span>Phone: </span> {element.jobSeekerInfo.phone}
                    </p>
                    <p className="fs-5  mb-0">
                      <span>Address: </span> {element.jobSeekerInfo.address}
                    </p>
                    <p className="fs-5  mb-0">
                      <textarea
                        className="form-control my-3"
                        value={element.jobSeekerInfo.coverLetter}
                        rows={5}
                        disabled
                      ></textarea>
                    </p>
                    <div className="btn-wrapper">
                      <button
                        className="bg-danger text-white fw-medium border-0 py-2 px-3 rounded-1"
                        onClick={() => handleDeleteApplication(element._id)}
                      >
                        Delete Application
                      </button>
                      <Link
                        to={
                          element.jobSeekerInfo &&
                          element.jobSeekerInfo.resume.url
                        }
                        className="text-back-color px-3 py-2 text-decoration-none ms-3 text-white fw-medium rounded-1 border-0"
                        target="_blank"
                      >
                        View Resume
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MyApplications;
