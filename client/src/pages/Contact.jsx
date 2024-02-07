import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-[1140px] mx-auto px-4 py-10 justify-center items-center">
        <div className="flex justify-center items-center min-h-screen rounded-md">
          <div className="w-[800px] border  rounded-3xl shadow-2xl grid grid-cols-1 md:grid-cols-2">
            <div className="items-center py-20 justify-center ">
              <h1 className="text-[green] font-bold py-4 text-[35px] text-center underline underline-offset-8 cursor-pointer">
                Get in touch
              </h1>
              <div className="text-center">
                <IoLocation size={30} className="ml-[42%] " />
                <div className="flex gap-4 justify-center items-center text-center">
                  <h1 className="text-center text-[22px] font-bold ">
                    Address :
                  </h1>
                  <span className="text-center text-light ">
                    Mripur 10 Dhaka
                  </span>
                </div>
              </div>
              <div className="text-center">
                <FaPhoneAlt size={30} className="ml-[42%] " />

                <div className="flex gap-4 justify-center items-center text-center">
                  <h1 className="text-center text-[22px] font-bold ">
                    Phone :
                  </h1>
                  <span className="text-center text-light ">01234567890</span>
                </div>
              </div>
              <div className="text-center">
                <MdEmail size={30} className="ml-[42%] " />

                <div className="flex gap-4 justify-center items-center text-center">
                  <h1 className="text-center text-[22px] font-bold ">
                    E-mail :
                  </h1>
                  <span className="text-center text-light ">
                    admin@admin.gmail.com
                  </span>
                </div>
              </div>
              <div className="text-center">
                <TbWorldWww size={30} className="ml-[42%] " />

                <div className="flex gap-4 justify-center items-center text-center">
                  <h1 className="text-center text-[22px] font-bold ">
                    WebSite :
                  </h1>
                  <span className="text-center text-light ">
                    www.e-commerce_app.com
                  </span>
                </div>
              </div>
            </div>

            <div className="cursor-pointer py-20">
              <h1 className="text-[35px] py-4 font-bold underline underline-offset-8 text-center cursor-pointer">
                Contact Us{" "}
              </h1>
              <form>
                <label className="text-[22px] mt-1 font-bold py-2 cursor-pointer">
                  First name:
                </label>
                <br />
                <input
                  type="text"
                  className=" outline-none mt-1 border px-2 py-1 rounded-lg shadow-md"
                  placeholder="Enter Your fast name"
                />
                <br />
                <label className="text-[22px] mt-1 font-bold py-2 cursor-pointer">
                  Last name:
                </label>
                <br />
                <input
                  type="email"
                  className=" outline-none border mt-1 px-2 py-1 rounded-lg shadow-md"
                  placeholder="Enter Your last name"
                />
                <br />
                <label className="text-[22px] mt-1 font-bold py-2 cursor-pointer">
                  Subject:
                </label>
                <br />
                <input
                  type="text"
                  className=" mt-1 outline-none border px-2 py-1 rounded-lg shadow-md"
                  placeholder="Enter Your Topic Name "
                />
                <br />
                <label className="text-[22px] mt-1 font-bold py-2 cursor-pointer">
                  Enter Your Message :
                </label>
                <textarea className=" mt-1 contactText w-[350px] rounded-md p-1 outline-none border"></textarea>
                <br />

                <button className=" bg-[green] text-white px-3 py-2 text-center rounded-xl mt-4 cursor-pointer hover:bg-[#686968] hover:text-white">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
