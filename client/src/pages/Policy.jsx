import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Policy = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-[1140px] mx-auto justify-center items-center">
        <div className="flex justify-center items-center py-20">
          <div className="w-[900px] justify-center items-center shadow-lg rounded-xl py-4">
            <h1 className="text-center text-[35px] text-[green] underline underline-offset-8 py-8 font-bold">
              Privacy and Policy In Our E-commerce Apps
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="w-[420px] ">
                <img
                  className="w-[100%] object-cover cursor-pointer py-4 px-6 rounded-lg"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHizrAUsChOiYz_gxuiX71Ko_C3iCBjZAdHg&usqp=CAU"
                  alt=""
                />
              </div>

              <div className="cursor-pointer ">
                <h1 className="text-center text-[25px]  py-4 underline underline-offset-8 font-bold">
                  Privacy Fast{" "}
                </h1>
                <p className="text-light py-2 px-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  sunt, doloribus quae, voluptatum nemo at illum laudantium
                  quaerat dolore obcaecati fuga dicta sed aliquam! Excepturi
                  magnam, aperiam ipsam tempora accusantium, vel quia, porro
                  nesciunt totam earum pariatur quidem recusandae possimus
                  numquam? Fugit ullam cupiditate doloremque, iure nam
                  provident, aspernatur sunt delectus nulla laborum molestiae
                  iusto adipisci, possimus numquam non veritatis accusamus
                  voluptatem nemo atque accusantium perspiciatis excepturi quam?
                  Excepturi ipsam soluta dolores et, quod dignissimos officia
                  pariatur, ipsa, itaque voluptatum consectetur cupiditate modi.
                  Veniam libero iure perferendis corrupti enim nam? Facilis
                  eveniet tempora atque, optio incidunt iste minima provident
                  culpa.
                </p>
                <div className="text-center py-4 ">
                  <button className="px-3 py-2 bg-[green] rounded-xl text-white cursor-pointer  hover:bg-[#484948] hover:text-white">
                    For More Policy
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Policy;
