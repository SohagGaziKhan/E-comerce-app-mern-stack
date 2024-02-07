import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-[1140px] mx-auto px-4 py-10 justify-center items-center">
        <div className="flex justify-center items-center min-h-screen rounded-md">
          <div className="w-[900px]  rounded-3xl shadow-2xl grid grid-cols-1 md:grid-cols-2">
            <div className="py-12">
              <h1 className="text-[green] text-[35px] text-center cursor-pointer font-bold py-2">
                About Us
              </h1>
              <p className="text-[green] text-[25px] text-center cursor-pointer font-bold py-2">
                This is E-commerce Apps &<br /> Find Your Best Products
              </p>
              <p className="text-center text-light py-8 px-2 cursor-pointer">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
                modi dolore magnam magni vitae, cumque, doloribus qui,
                repellendus expedita ab ex fuga voluptatem perferendis
                doloremque enim minus voluptas nihil! Exercitationem doloribus
                facilis aliquid. Fugiat et ducimus, nemo, est quos hic nesciunt
                magni quas labore animi cum illum nam illo itaque?
              </p>{" "}
              <div className="text-center ">
                <button className="text-light bg-[green] px-4 cursor-pointer py-2 rounded-xl hover:text-white hover:bg-[#646664]">
                  Read More
                </button>
              </div>
            </div>
            <div className=" my-4 mx-3">
              <div className="w-[400px] h-[300px] ">
                <img
                  className="w-[100%] h-[100%] object-cover rounded-lg cursor-pointer "
                  src="https://st.depositphotos.com/2325841/2529/i/450/depositphotos_25293855-stock-photo-multi-ethnic-group-thumbs-up.jpg"
                  alt=""
                />
              </div>
              <h1 className="text-center py-1 cursor-pointer text-[20px] font-bold text-[green] underline underline-offset-8">
                Also Our E-commerce
              </h1>
              <div className="grid grid-cols-2 justify-around items-center py-4 px-3 gap-4">
                <div className=" shadow-2xl rounded-xl w-[200px] h-[120px] items-center justify-center ">
                  <h1 className="text-center cursor-pointer justify-center text-[green] font-bold text-[20px] mt-[40px]">
                    3000000
                  </h1>
                  <p className="text-center cursor-pointer items-center justify-center text-[green] text-light ">
                    Users{" "}
                  </p>
                </div>
                <div className=" shadow-2xl rounded-xl w-[200px] h-[120px] items-center justify-center ">
                  <h1 className="text-center cursor-pointer justify-center text-[green] font-bold text-[20px] mt-[40px]">
                    20000+
                  </h1>
                  <p className="text-center cursor-pointer items-center justify-center text-[green] text-light ">
                    Products{" "}
                  </p>
                </div>
                <div className=" shadow-2xl rounded-xl w-[200px] h-[120px] items-center justify-center ">
                  <h1 className="text-center cursor-pointer justify-center text-[green] font-bold text-[20px] mt-[40px]">
                    2000+
                  </h1>
                  <p className="text-center cursor-pointer items-center justify-center text-[green] text-light ">
                    Shop{" "}
                  </p>
                </div>
                <div className=" shadow-2xl rounded-xl w-[200px] h-[120px] items-center justify-center ">
                  <h1 className="text-center cursor-pointer justify-center text-[green] font-bold text-[20px] mt-[40px]">
                    24/7 Days
                  </h1>
                  <p className="text-center cursor-pointer items-center justify-center text-[green] text-light ">
                    Fast Services{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mb-14">
        <button>
          <Link
            to={"/"}
            className=" underline underline-offset-8 hover:underline hover:underline-offset-8 hover:text-[green]"
          >
            go to home page
          </Link>
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default About;
