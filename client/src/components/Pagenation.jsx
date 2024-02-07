import React from "react";

const Pagenation = () => {
  return (
    <div className="max-w-[1140px] mx-auto items-center">
      <div className="items-center h-[70px] mt-4">
        <div className="items-center text-center gap-5">
          <button className="bg-[green] text-white px-3 rounded-xl py-1 text-center hover:bg-white border hover:text-[green] ml-3 ">
            Prev
          </button>
          <button className="bg-[green] text-white px-3 rounded-xl py-1 text-center hover:bg-white border hover:text-[green] ml-3">
            1
          </button>
          <button className="bg-[green] text-white px-3 rounded-xl py-1 text-center hover:bg-white border hover:text-[green] ml-3">
            2
          </button>
          <button className="bg-[green] text-white px-3 rounded-xl py-1 text-center hover:bg-white border hover:text-[green] ml-3">
            3
          </button>
          <button className="bg-[green] text-white px-3 rounded-xl py-1 text-center hover:bg-white border hover:text-[green] ml-3">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagenation;
