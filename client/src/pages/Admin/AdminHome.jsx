import React from "react";

const AdminHome = () => {
  return (
    <>
      <div className="w-[700px] border shadow-xl rounded-xl my-4">
        <div className="w-[700px] h-[200px] mb-2 items-center bg-orange-400">
          <p className="text-center items-center">Admin Image</p>
        </div>
        <div className="gap-4 grid grid-cols-2 items-center">
          <div className="w-[350px] items-center h-[200px] bg-orange-400">
            <h1 className="text-center items-center ">Product Number</h1>
          </div>

          <div className="w-[350px] h-[200px] bg-orange-400">
            <h1>Earring</h1>
          </div>

          <div className="w-[350px] h-[200px] bg-orange-400">
            <h1>Products</h1>
          </div>
        </div>
        <div className="w-[700px] h-[200px] mt-2 items-center bg-orange-400">
          <p className="text-center items-center">chat box </p>
        </div>
      </div>
    </>
  );
};

export default AdminHome;
