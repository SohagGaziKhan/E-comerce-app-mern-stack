import React from "react";

const CategoryFrom = ({ handleSubmit, value, setValue }) => {
  return (
    <div>
      <div>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Enter New Category "
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
      {/* <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter new category"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form> */}
    </div>
  );
};

export default CategoryFrom;
