import React from "react";

const AdminBrandFrom = ({ handleSubmits, values, setValues }) => {
  return (
    <div>
      <div>
        <div>
          <form onSubmit={handleSubmits}>
            <input
              type="text"
              value={values}
              onChange={(e) => setValues(e.target.value)}
              placeholder="Enter New Brand "
              required
              className="input  w-[350px] rounded-xl border p-2 h-full b border-none text-lg outline-none text-gray-700 font-light text-[13px] "
            />
            <div className="text-center my-4  cursor-pointer">
              <button className=" text-white px-4 py-2 mt-2 rounded-xl bg-[green] hover:bg-gray-500">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminBrandFrom;
