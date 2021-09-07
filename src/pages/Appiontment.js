import React, { useState } from "react";
import BottomNav from "../components/bottomNavigation";
import AppiontmentStatus from "../components/appiontmentstatus";
const Appiontment = () => {
  const [current, setCurrent] = useState("current");
  return (
    <div className="appiontment">
      <div className="main-section">
        <p className="heading">Appointments</p>
        <div className="selector">
          <p
            className="current"
            onClick={() => setCurrent("current")}
            style={
              current === "current"
                ? { background: "#ff8888", color: "#fff" }
                : { background: "#fff", color: "#646464" }
            }
          >
            Current
          </p>
          <p
            className="existing"
            onClick={() => setCurrent("existing")}
            style={
              current === "existing"
                ? { background: "#ff8888", color: "#fff" }
                : { background: "#fff", color: "#646464" }
            }
          >
            Existing
          </p>
        </div>
        <div className="appiontment-details">
          {current === "current" ? (
            <div>
              <AppiontmentStatus name="Dr.Meera" />
              <AppiontmentStatus name="Dr.saara" />
            </div>
          ) : (
            <div>
              <AppiontmentStatus name="Dr.saara" />
              <AppiontmentStatus name="Dr.jaara" />
            </div>
          )}
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Appiontment;
