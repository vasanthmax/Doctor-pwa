import React from "react";
import DoctorImg from "../assets/Doctor.jpg";

const AppiontmentStatus = (props) => {
  return (
    <div className="app-status">
      <div className="doc-img">
        <img src={DoctorImg} alt="" />
      </div>
      <div className="doc-details">
        <p className="doc-name">{props.name}</p>
        <p className="doc-prof">Cardiologist</p>
        <p className="status">Booked</p>
      </div>
      <button className="full-details">view</button>
    </div>
  );
};

export default AppiontmentStatus;
