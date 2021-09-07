import React, { useState } from "react";
import DoctorImg from "../assets/Doctor.jpg";
import { ChevronLeft } from "react-feather";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const DetailApp = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="detail-app">
      <div className="header">
        <div className="back-icon">
          <ChevronLeft size={40} />
        </div>
        <p className="schedule">Schedule</p>
        <div className="white-space"></div>
      </div>
      <div className="doctor-profile">
        <div className="doctor-image">
          <img src={DoctorImg} alt="" />
        </div>
        <p className="doctor-name">Dr.jung</p>
        <p className="doctor-prof">physiotherapist</p>
      </div>
      <div className="calendar">
        <Calendar onChange={onChange} value={value} />
      </div>
      <div className="avail-slots">
        <div className="avail-header">
          <p className="avail">Available Slots</p>
          <div className="indicator">
            <p className="available">
              {" "}
              <span></span> Available
            </p>
            <p className="not-available">
              {" "}
              <span></span> Not Available
            </p>
          </div>
        </div>
        <div className="avail-timings">
          <p>10:00 AM</p>
          <p>10:00 AM</p>
          <p>10:00 AM</p>
          <p>10:00 AM</p>
          <p>10:00 AM</p>
          <p>10:00 AM</p>
          <p>10:00 AM</p>
          <p>10:00 AM</p>
          <p>10:00 AM</p>
        </div>
      </div>
      <div className="confirm">
        <button className="confirm-booking">Confirm Booking</button>
      </div>
    </div>
  );
};

export default DetailApp;
