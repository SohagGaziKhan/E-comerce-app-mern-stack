import axios from "axios";
import React, { useEffect, useState } from "react";
import { Checkbox } from "antd";
const BrandsFront = () => {
  const [categories, setCategories] = useState([]);
  const [check, setCheck] = useState([]);
  // get all category fuction
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3030/api/v1/brand/gets-brand"
      );
      if (data?.success) {
        setCategories(data?.brand);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // filter by brand
  const handleFilter = (value, id) => {
    let all = [...check];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setCheck(all);
  };
  useEffect(() => {
    getAllCategory();
  }, []);
  return (
    <div className="max-w-[1140px] mx-auto items-center ">
      <div className="">
        <h1 className="text-center cursor-pointer text-[20px] font-bold">
          Find Products By Brand{" "}
        </h1>
        <div className="cursor-pointer ml-2 py-2 flex flex-col">
          {categories.map((b) => (
            <Checkbox
              key={b._id}
              onChange={(e) => handleFilter(e.target.checked, b._id)}
              className="py-2 hover:font-bold hover:text-[green]"
            >
              {b.name}
            </Checkbox>
          ))}
          {JSON.stringify(check, null, 4)}
        </div>
      </div>
    </div>
  );
};

export default BrandsFront;
