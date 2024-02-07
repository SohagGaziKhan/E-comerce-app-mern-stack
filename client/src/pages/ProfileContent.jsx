import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Profile from "./Profile";
import ProfileContentRight from "../components/ProfileContentRight";

const ProfileContent = () => {
  return (
    <div>
      <Navbar />
      <div className="py-20">
        <Profile />
        <ProfileContentRight />
      </div>
      <Footer />
    </div>
  );
};

export default ProfileContent;
