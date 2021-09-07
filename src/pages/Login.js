import React, { useState } from "react";
import stethoscope from "../assets/icons/Stethoscope.svg";
import HeroImg from "../assets/relationship.svg";
import { Eye, EyeOff } from "react-feather";
const Login = () => {
  const [viewPass, setViewPass] = useState(false);
  return (
    <div className="login">
      <div className="login-header">
        <img src={stethoscope} alt="" />
        <p>Signup</p>
      </div>
      <div className="login-hero-text">
        <p>find the best doctors nearest to you</p>
      </div>
      <div className="login-hero-img">
        <img src={HeroImg} alt="" />
      </div>
      <div className="login-form">
        <h2>Welcome Back</h2>
        <label htmlFor="mobile">Enter Mobile Number</label>
        <div className="mobile-number-section">
          <p>+91 | </p>
          <input type="number" name="mobile" />
        </div>
        <label htmlFor="pass">Enter Password</label>
        <div className="password-section">
          <input type={viewPass ? "text" : "password"} name="pass" />
          {viewPass ? (
            <Eye
              style={{ marginRight: "10px", cursor: "pointer" }}
              onClick={() => setViewPass(!viewPass)}
            />
          ) : (
            <EyeOff
              style={{ marginRight: "10px", cursor: "pointer" }}
              onClick={() => setViewPass(!viewPass)}
            />
          )}
        </div>
        <button className="signin-button">Login</button>
      </div>
    </div>
  );
};

export default Login;
