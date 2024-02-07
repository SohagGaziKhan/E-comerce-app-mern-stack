import React from "react";

const BrandCategory = () => {
  return (
    <>
      <div className="max-w-[1140px] mx-auto py-16 md:grid items-center grid-cols-3 justify-center gap-5">
        <div className="cursor-pointer   shadow-2xl rounded-xl max-w-[350px] h-[250px] bg-white">
          <div className=" w-[320px] mt-2 ml-3 h-[200px]">
            <img
              className="w-full rounded-md h-[100%]  object-contain"
              src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
              alt=""
            />
          </div>
          <div className="mt-2 ml-3 items-center gap-2">
            <h1 className="text-2xl text-center font-bold mb-1font-sans text-black-700">
              Name
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandCategory;
