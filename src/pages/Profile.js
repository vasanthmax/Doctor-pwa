import React from "react";
import BottomNav from "../components/bottomNavigation";
import DoctorImg from "../assets/Doctor.jpg";
import {
  Camera,
  Edit,
  User,
  ChevronRight,
  Headphones,
  Users,
  FileText,
  Settings,
} from "react-feather";
const Profile = () => {
  return (
    <div className="profile">
      <div className="main-section">
        <p className="heading">Profile</p>
        <div className="photo-sec">
          <img src={DoctorImg} alt="" />
          <div className="cam">
            <Camera size={20} />
          </div>
        </div>
        <div className="profile-name-sec">
          <p className="username">Hema desosa</p>
          <Edit />
        </div>
        <div className="user-options">
          <div className="user-option-icon">
            <User size={30} />
            <p>General Data</p>
          </div>
          <ChevronRight size={30} />
        </div>
        <div className="user-options">
          <div className="user-option-icon">
            <Headphones size={30} />
            <p>Customer Service</p>
          </div>
          <ChevronRight size={30} />
        </div>
        <div className="user-options">
          <div className="user-option-icon">
            <FileText size={30} />
            <p>App Feedback</p>
          </div>
          <ChevronRight size={30} />
        </div>
        <div className="user-options">
          <div className="user-option-icon">
            <Users size={30} />
            <p>Refferal Program</p>
          </div>
          <ChevronRight size={30} />
        </div>
        <div className="user-options">
          <div className="user-option-icon">
            <Settings size={30} />
            <p>Settings</p>
          </div>
          <ChevronRight size={30} />
        </div>
      </div>
      <BottomNav />
    </div>
  );
};

export default Profile;
