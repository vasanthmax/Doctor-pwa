import React from "react";
import BottomNav from "../components/bottomNavigation";
import Notification from "../assets/icons/Notification.svg";
import Search from "../assets/icons/searchIcon.svg";
import DoctorImg from "../assets/Doctor.jpg";
import SpecialList from "../components/specialist";
const Home = () => {
  return (
    <div className="home">
      <div className="main-section">
        <div className="home-header">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="home-profile">
            <p>Hi Vasanth !</p>
            <img src={Notification} alt="" />
          </div>
          <div className="search-section">
            <input type="text" placeholder="Search" />
            <img src={Search} alt="" />
          </div>
        </div>
        <div className="home-recommend">
          <div className="recommend-header">
            <p className="recommend">Recommended</p>
            <p className="see-more">See more</p>
          </div>
          <div className="recommend-body">
            <div className="doctor-profile">
              <div className="doctor-image">
                <img src={DoctorImg} alt="" />
              </div>
              <p className="doctor-name">Dr.jung</p>
              <p className="doctor-prof">physiotherapist</p>
            </div>
            <div className="doctor-profile">
              <div className="doctor-image">
                <img src={DoctorImg} alt="" />
              </div>
              <p className="doctor-name">Dr.jung</p>
              <p className="doctor-prof">physiotherapist</p>
            </div>
            <div className="doctor-profile">
              <div className="doctor-image">
                <img src={DoctorImg} alt="" />
              </div>
              <p className="doctor-name">Dr.jung</p>
              <p className="doctor-prof">physiotherapist</p>
            </div>
          </div>
        </div>
        <div className="home-special">
          <div className="special-header">
            <p className="special">Specialist</p>
            <p className="see-more">See more</p>
          </div>
          <div className="special-body">
            <SpecialList />
            <SpecialList />
            <SpecialList />
            <SpecialList />
            <SpecialList />
            <SpecialList />
          </div>
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Home;
