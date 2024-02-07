import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AdminMenu from "./AdminMenu";
import Profile from "../Profile";
import AllUserRight from "./AllUserRight";

const AllUser = () => {
  return (
    <div>
      <Navbar />
      <Profile />
      <div className="flex max-w-[1140px] mx-auto">
        <div>
          <AdminMenu />
        </div>
        <div>
          <AllUserRight />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllUser;
