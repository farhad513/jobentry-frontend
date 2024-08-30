/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";

const MyProfile = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <div className="account_components">
      <h3 className="text-center mb-3">My Profile</h3>
      <div className="d-flex justify-content-between pb-2 form-outline">
        <label>Full Name</label>
        <input
          type="text"
          className="form-control w-50 text-center"
          disabled
          value={user && user.name}
          onChange={(e) => e.target.value}
        />
      </div>
      <div className="d-flex justify-content-between pb-2">
        <label>Email Address</label>
        <input
          type="email"
          className="form-control w-50 text-center"
          disabled
          value={user && user.email}
          onChange={(e) => e.target.value}
        />
      </div>

      <div className="d-flex justify-content-between pb-2">
        <label>Phone Number</label>
        <input
          className="form-control w-50 text-center"
          type="number"
          disabled
          value={user && user.phone}
          onChange={(e) => e.target.value}
        />
      </div>
      <div className="d-flex justify-content-between pb-2">
        <label>Address</label>
        <input
          type="text"
          className="form-control w-50 text-center"
          disabled
          value={user && user.address}
          onChange={(e) => e.target.value}
        />
      </div>
      <div className="d-flex justify-content-between pb-2">
        <label>Role</label>
        <input
          type="text"
          className="form-control w-50 text-center"
          disabled
          value={user && user.role}
          onChange={(e) => e.target.value}
        />
      </div>
      <div className="d-flex justify-content-between pb-2">
        <label>Joined On</label>
        <input
          type="text"
          className="form-control w-50 text-center"
          disabled
          value={user && new Date(user.createdAt).toDateString()}
          onChange={(e) => e.target.value}
        />
      </div>
      {user && user.role === "Job Seeker" && (
        <div className="  pb-3">
          <label className="pb-2">My Preferred Job Niches</label>
          <div
          className="d-flex gap-2"
            // style={{ display: "flex", flexDirection: "column", gap: "15px", justifyContent :"flex-end" }}
          >
            <input
              className="form-control w-75 text-center"
              type="text"
              disabled
              value={user && user.niches.firstNiche}
              onChange={(e) => e.target.value}
            />
            <input
              type="text"
              className="form-control w-75 text-center"
              disabled
              value={user && user.niches.secondNiche}
              onChange={(e) => e.target.value}
            />
            <input
              className="form-control w-75 text-center"
              type="text"
              disabled
              value={user && user.niches.thirdNiche}
              onChange={(e) => e.target.value}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MyProfile;
