import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MdComputer } from "react-icons/md";

const Services = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-[1140px] mx-auto items-center justify-center   py-4">
        <div className="flex justify-center items-center py-20 ">
          <div className="w-[900px] py-8 justify-center  shadow-2xl rounded-xl items-center">
            <h1 className="text-center text-[35px] underline underline-offset-8 cursor-pointer">
              Our <span className="text-[green]">Services</span>
            </h1>
            <p className="text-center text-light cursor-pointer py-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              magnam!
            </p>
            <div className="grid grid-cols-3 gap-4 items-center ml-2 mt-4 m-2">
              <div className="w-[280px] py-2 h-[300px] shadow-lg rounded-xl border cursor-pointer  ">
                <div className="w-full h-[50px] items-center ">
                  <p className="items-center justify-center ">
                    <MdComputer
                      size={40}
                      className="items-center ml-[42%] mt-2 "
                    />
                  </p>
                </div>
                <h1 className="text-[green] font-bold text-[25px] text-center py-2 underline underline-offset-8 cursor-pointer">
                  Web Design
                </h1>
                <p className="text-center text-light py-2">
                  Lorem ipsum dolor sit amet <br /> consectetur adipisicing
                  elit. <br /> Reprehenderit autem et tempora <br /> ullam
                  dolore beatae corporis <br /> delectus laboriosam numquam.
                </p>
              </div>
              <div className="w-[280px] py-2 h-[300px] shadow-lg rounded-xl border cursor-pointer  ">
                <div className="w-full h-[50px] items-center ">
                  <p className="items-center justify-center ">
                    <MdComputer
                      size={40}
                      className="items-center ml-[42%] mt-2 "
                    />
                  </p>
                </div>
                <h1 className="text-[green] font-bold text-[25px] text-center py-2 underline underline-offset-8 cursor-pointer">
                  Web Design
                </h1>
                <p className="text-center text-light py-2">
                  Lorem ipsum dolor sit amet <br /> consectetur adipisicing
                  elit. <br /> Reprehenderit autem et tempora <br /> ullam
                  dolore beatae corporis <br /> delectus laboriosam numquam.
                </p>
              </div>
              <div className="w-[280px] py-2 h-[300px] shadow-lg rounded-xl border cursor-pointer  ">
                <div className="w-full h-[50px] items-center ">
                  <p className="items-center justify-center ">
                    <MdComputer
                      size={40}
                      className="items-center ml-[42%] mt-2 "
                    />
                  </p>
                </div>
                <h1 className="text-[green] font-bold text-[25px] text-center py-2 underline underline-offset-8 cursor-pointer">
                  Web Design
                </h1>
                <p className="text-center text-light py-2">
                  Lorem ipsum dolor sit amet <br /> consectetur adipisicing
                  elit. <br /> Reprehenderit autem et tempora <br /> ullam
                  dolore beatae corporis <br /> delectus laboriosam numquam.
                </p>
              </div>
              <div className="w-[280px] py-2 h-[300px] shadow-lg rounded-xl border cursor-pointer  ">
                <div className="w-full h-[50px] items-center ">
                  <p className="items-center justify-center ">
                    <MdComputer
                      size={40}
                      className="items-center ml-[42%] mt-2 "
                    />
                  </p>
                </div>
                <h1 className="text-[green] font-bold text-[25px] text-center py-2 underline underline-offset-8 cursor-pointer">
                  Web Design
                </h1>
                <p className="text-center text-light py-2">
                  Lorem ipsum dolor sit amet <br /> consectetur adipisicing
                  elit. <br /> Reprehenderit autem et tempora <br /> ullam
                  dolore beatae corporis <br /> delectus laboriosam numquam.
                </p>
              </div>
              <div className="w-[280px] py-2 h-[300px] shadow-lg rounded-xl border cursor-pointer  ">
                <div className="w-full h-[50px] items-center ">
                  <p className="items-center justify-center ">
                    <MdComputer
                      size={40}
                      className="items-center ml-[42%] mt-2 "
                    />
                  </p>
                </div>
                <h1 className="text-[green] font-bold text-[25px] text-center py-2 underline underline-offset-8 cursor-pointer">
                  Web Design
                </h1>
                <p className="text-center text-light py-2">
                  Lorem ipsum dolor sit amet <br /> consectetur adipisicing
                  elit. <br /> Reprehenderit autem et tempora <br /> ullam
                  dolore beatae corporis <br /> delectus laboriosam numquam.
                </p>
              </div>
              <div className="w-[280px] py-2 h-[300px] shadow-lg rounded-xl border cursor-pointer  ">
                <div className="w-full h-[50px] items-center ">
                  <p className="items-center justify-center ">
                    <MdComputer
                      size={40}
                      className="items-center ml-[42%] mt-2 "
                    />
                  </p>
                </div>
                <h1 className="text-[green] font-bold text-[25px] text-center py-2 underline underline-offset-8 cursor-pointer">
                  Web Design
                </h1>
                <p className="text-center text-light py-2">
                  Lorem ipsum dolor sit amet <br /> consectetur adipisicing
                  elit. <br /> Reprehenderit autem et tempora <br /> ullam
                  dolore beatae corporis <br /> delectus laboriosam numquam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
