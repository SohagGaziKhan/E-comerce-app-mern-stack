import axios from "axios";
import React, { useEffect, useState } from "react";
import { Checkbox, Radio } from "antd";
import { Prices } from "./Prices";
const Main = () => {
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [check, setCheck] = useState([]);
  const [products, setProducts] = useState([]);

  // get all brand fuction
  const handleBrand = async () => {
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
  const handleFilterBrand = (value, id) => {
    let all = [...check];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setCheck(all);
  };
  useEffect(() => {
    handleBrand();
  }, []);

  // get all category fuction
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3030/api/v1/category/gets-category"
      );
      if (data?.success) {
        setCategories(data?.categroy);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // filter category
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };
  useEffect(() => {
    if (!checked.length) getAllCategory();
  }, [checked.length]);

  useEffect(() => {
    // if (checked.length) filterProduct();
    if (!checked.length || !radio.length || check.length) getAllProducts();
  }, [checked.length, radio.length, check.length]);

  // get all product
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3030/api/v1/product/get-all-product"
      );
      setProducts(data?.product);
    } catch (error) {
      console.log(error);
      alert("Something Went Wrong All Products");
    }
  };
  useEffect(() => {
    if (checked.length || radio.length || check.length) filterProduct();
  }, [checked, radio, check]);

  //get filterd product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:3030/api/v1/product/product-filters",
        {
          checked,
          radio,
          check,
        }
      );
      setProducts(data?.product);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="max-w-[1140px] h-[70px] mx-auto items-center py-20 justify-center">
      <div>
        {/* this is category brand and price scetion  */}
        <div>
          {/* this is category */}
          <div>
            <h1 className="text-center cursor-pointer text-[20px] font-bold">
              Find Products By Category
            </h1>
            <div className="   flex flex-col gap-5  text-white">
              {categories.map((c) => (
                <Checkbox
                  key={c._id}
                  onChange={(e) => handleFilter(e.target.checked, c._id)}
                  className="cursor-pointer hover:text-[20px] hover:text-bold hover:underline underline-offset-8"
                >
                  {c.name}
                </Checkbox>
              ))}
              {/* {JSON.stringify(checked, null, 4)} */}
            </div>
          </div>
          {/* this is brand */}
          <div className="">
            <h1 className="text-center cursor-pointer text-[20px] font-bold">
              Find Products By Brand{" "}
            </h1>
            <div className="cursor-pointer ml-2 py-2 flex flex-col">
              {categories.map((b) => (
                <Checkbox
                  key={b._id}
                  onChange={(e) => handleFilterBrand(e.target.checked, b._id)}
                  className="py-2 hover:font-bold hover:text-[green]"
                >
                  {b.name}
                </Checkbox>
              ))}
              {/* {JSON.stringify(check, null, 4)} */}
            </div>
          </div>
          {/* this is price  */}

          <div className="">
            {/* {JSON.stringify(radio, null, 4)} */}
            <h1 className="text-center cursor-pointer text-[20px] font-bold">
              Find Your Products By Price{" "}
            </h1>
            <div className="cursor-pointer ml-2 py-2">
              <Radio.Group onChange={(e) => setRadio(e.target.value)}>
                {Prices?.map((p) => (
                  <div key={p._id}>
                    <Radio value={p.array}>{p.name}</Radio>
                  </div>
                ))}
              </Radio.Group>
            </div>
          </div>
        </div>
        {/* this is card section  */}
        <div>
          <div className="grid grid-cols-3 gap-4">
            {products.map((p) => (
              <div key={p._id} className=" ">
                <div className=" shadow-2xl border  rounded-xl w-[280px]  h-[400px]">
                  <div className=" w-[280px] h-[200px]">
                    <img
                      className="w-[100%] rounded-xl h-[100%] object-cover"
                      src={`http://localhost:3030/api/v1/product/product-photo/${p._id}`}
                      alt=""
                    />
                  </div>
                  <div className=" mt-2 ml-3 ">
                    <h1 className="text-xl font-light mb-1font-sans text-black-700">
                      {p.name}
                    </h1>
                    <p className="text-[18px]  font-semibold my-3">
                      DisCount Price:{" "}
                      <span className="text-[red]">$ {p.discountPrice}</span>
                    </p>
                    <p className="text-[15px]  text-gray-700  my-3">
                      Regulary Price:{" "}
                      <span className="under">$ {p.regularPrice}</span>
                    </p>
                    <div className="btn-All text-center justify-center ">
                      <button className="my-5 mx-2 bg-gray-300 px-3 py-2 hover:bg-gray-800 hover:text-white  text-[14px] rounded-lg">
                        Read More
                      </button>
                      <button className="my-5 mx-2 px-3 py-2 bg-gray-300 hover:bg-gray-800 hover:text-white  text-[14px] rounded-lg">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
