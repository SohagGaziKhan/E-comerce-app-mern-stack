import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AdminMenu from "./AdminMenu";
import BrandRight from "./BrandRight";
import Profile from "../Profile";

const Brand = () => {
  return (
    <div>
      <Navbar />
      <Profile />
      <div className="flex max-w-[1140px] mx-auto ">
        <div>
          <AdminMenu />
        </div>
        <div className=" ml-4 cursor-pointer">
          <BrandRight />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Brand;
