import React from "react";
import AdminMenu from "./AdminMenu";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Profile from "../Profile";
import AddOfferProduct from "./AddOfferProduct";

const AdminOfferPages = () => {
  return (
    <>
      <Navbar />
      <Profile />
      <div className="max-w-[1140px] mx-auto px-4 ">
        <div></div>
        <div className="flex gap-3">
          <div>
            <AdminMenu />
          </div>
          <div>
            <AddOfferProduct />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminOfferPages;
