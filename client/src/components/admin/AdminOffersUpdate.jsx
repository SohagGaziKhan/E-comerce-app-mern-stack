import React from "react";
import Navbar from "../Navbar";
import Profile from "../../pages/Profile";
import AdminMenu from "../../pages/Admin/AdminMenu";
import Footer from "../Footer";
import AdminUpdateOffersRight from "./AdminUpdateOffersRight";

const AdminOffersUpdate = () => {
  return (
    <div>
      <Navbar />
      <Profile />
      <div className="max-w-[1140px] mx-auto flex gap-3">
        <div>
          <AdminMenu />
        </div>
        <div>
          <AdminUpdateOffersRight />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminOffersUpdate;
