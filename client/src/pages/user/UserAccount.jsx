import React from "react";
import { useAuth } from "../../context/auth";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Profile from "../Profile";
// import { Link } from "react-router-dom";
const UserAccount = () => {
  const [auth] = useAuth();
  return (
    <>
      <Navbar />
      <div className=" ">
        <div>
          <Profile />
        </div>
        <div className="border w-[800px] mx-auto py-8 mb-8 shadow-xl rounded-lg items-center mt-5">
          <div>
            <h1 className="text-center py-2 text-[25px] underline underline-offset-8 font-bold">
              Your Account Information
            </h1>
          </div>
          <div className="flex items-center justify-center py-4 gap-5">
            <span className="text-[20px] font-semibold cursor-pointer">
              Name :
            </span>
            <h2 className="text-[18px] font-light">{auth?.user?.name}</h2>
          </div>
          <div className="flex items-center justify-center py-4 gap-5">
            <span className="text-[20px] font-semibold cursor-pointer">
              E-mail :
            </span>
            <h2 className="text-[18px] font-light">{auth?.user?.email}</h2>
          </div>
          <div className="flex items-center justify-center py-4 gap-5">
            <span className="text-[20px] font-semibold cursor-pointer">
              Phone Number :
            </span>
            <h2 className="text-[18px] font-light">{auth?.user?.phone}</h2>
          </div>
          <div className="flex items-center justify-center py-4 gap-5">
            <span className="text-[20px] font-semibold cursor-pointer">
              Address :
            </span>
            <h2 className="text-[18px] font-light">{auth?.user?.address}</h2>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default UserAccount;
