import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AdminMenu from "./AdminMenu";
import AddProductRight from "./AddProductRight";
import Profile from "../Profile";

const AddProduct = () => {
  return (
    <>
      <Navbar />
      <Profile />
      <div className="flex max-w-[1140px] mx-auto  ">
        <div>
          <AdminMenu />
        </div>
        <div className=" ml-4 cursor-pointer">
          <AddProductRight />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddProduct;
