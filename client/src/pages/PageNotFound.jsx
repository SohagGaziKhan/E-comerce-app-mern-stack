import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-[1140px] mx-auto py-20  items-center justify-center">
        <div className="flex justify-center items-center rounded-2xl">
          <div className="w-[390px] h-[460px] bg-[#f8ebeb] shadow-2xl p-4 rounded-md">
            <h1 className="text-[40px] text-center font-bold">
              Whoops, <br /> <span className="text-[red]">that Page</span>
              <br /> is Gone
            </h1>
            <h1 className="text-center text-[55px] font-bold">
              4<span className="text-[red]">0</span>4
            </h1>
            <p className="text-[gray] text-center text-[14px]">
              This link you clicked may be broken or the page may <br /> have
              been removed. You can try the search box again <br /> or get back
              to the
            </p>
            <div className="text-center">
              <button className="mt-5 text-center underline underline-offset-8 items-center ">
                <Link to="/"> Home Page</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PageNotFound;
