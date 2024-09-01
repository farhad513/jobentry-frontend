/* eslint-disable no-unused-vars */
import React from "react";
import { RiseLoader } from "react-spinners";
import "../App.css";
const Spinner = () => {
  return (
    <>
      <section
        style={{
          minHeight: "525px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <RiseLoader size={15} color="#00B074" />
      </section>
    </>
  );
};

export default Spinner;
