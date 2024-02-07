import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AdminMenu from "./AdminMenu";
import Profile from "../Profile";
import AdminOrders from "../../components/admin/AdminOrders";

const Orders = () => {
  return (
    <div>
      <Navbar />
      <Profile />
      <div className="flex max-w-[1140px] mx-auto ">
        <div>
          <AdminMenu />
        </div>
        <div>
          <AdminOrders />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Orders;
