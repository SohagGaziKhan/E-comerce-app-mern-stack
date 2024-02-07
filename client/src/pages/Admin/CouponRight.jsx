import React from "react";
import CreateCouponRight from "../../components/admin/CreateCouponRight";

const CouponRight = () => {
  return (
    <>
      <div className="max-w-[1140px] mx-auto py-20 justify-center items-center">
        <div className="w-[800px] h-full rounded-lg border items-center shadow-2xl">
          <h1 className="text-center cursor-pointer text-[green] underline underline-offset-8 font-semibold text-[20px] py-4">
            Create Coupon
          </h1>
          <p className="text-center cursor-pointer text-[15px]  pb-2">
            Use the form to create a Coupon
          </p>
          <div className="flex items-center justify-center py-4 gap-5">
            <span className="text-[20px] font-semibold cursor-pointer">
              Create Coupon :
            </span>
            <input
              type="text"
              placeholder="Enter Coupon Name"
              required
              className="input  w-[350px] border rounded-xl p-2 h-full b border-none text-lg outline-none text-gray-700 font-light text-[13px] "
            />
          </div>
          <div className="flex items-center justify-center py-4 gap-5">
            <span className="text-[20px] font-semibold cursor-pointer">
              Discount % :
            </span>
            <input
              type="number"
              placeholder="Enter Product Name"
              required
              className="input border  w-[350px] rounded-xl p-2 h-full b border-none text-lg outline-none text-gray-700 font-light text-[13px] "
            />
          </div>
          <div className="flex items-center justify-center py-4 gap-5">
            <span className="text-[20px] font-semibold cursor-pointer">
              Expiny Date :
            </span>
            <input
              type="date"
              placeholder="Enter Product Name"
              required
              className="input border  w-[350px] rounded-xl p-2 h-full b border-none text-lg outline-none text-gray-700 font-light text-[13px] "
            />
          </div>
          <div className="text-center my-4  cursor-pointer">
            <button className=" text-white  px-4 py-2 mt-2 rounded-xl bg-[green] hover:bg-gray-500">
              Create Coupon
            </button>
          </div>
          <h1 className="text-center text-[green]  cursor-pointer underline underline-offset-8 py-8 font-semibold text-[20px] ">
            All Coupon
          </h1>
          <div>
            <CreateCouponRight />
          </div>
        </div>
      </div>
    </>
  );
};

export default CouponRight;
