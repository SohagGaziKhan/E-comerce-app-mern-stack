import React from "react";
import AdminMenu from "./AdminMenu";
import Navbar from "../../components/Navbar";
import Profile from "../Profile";
import Footer from "../../components/Footer";
import AdminAllOfferRight from "./AdminAllOfferRight";

const AdminAllOffers = () => {
  return (
    <div>
      <Navbar />
      <Profile />

      <div className="max-w-[1140px] flex mx-auto py-8 justify-center ">
        <div>
          <AdminMenu />
        </div>
        <div>
          <AdminAllOfferRight />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminAllOffers;
