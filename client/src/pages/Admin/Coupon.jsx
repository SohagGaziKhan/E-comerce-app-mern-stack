import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AdminMenu from "./AdminMenu";
import CouponRight from "./CouponRight";
import Profile from "../Profile";

const Coupon = () => {
  return (
    <div>
      <Navbar />
      <Profile />
      <div className="flex max-w-[1140px] mx-auto ">
        <div>
          <AdminMenu />
        </div>
        <div className=" ml-4 cursor-pointer">
          <CouponRight />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Coupon;
