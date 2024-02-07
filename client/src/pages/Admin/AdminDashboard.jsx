import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AdminMenu from "./AdminMenu";
import AdminHome from "./AdminHome";
import Profile from "../Profile";

const AdminDashboard = () => {
  return (
    <div>
      <Navbar />
      <Profile />
      <div className="max-w-[1140px] mx-auto px-4 ">
        <div className="flex justify-around items-center gap-4 ">
          <div className="flex h-full w-[400px] ">
            <AdminMenu />
          </div>
          <div className="w-[700px] h-full ">
            <AdminHome />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
