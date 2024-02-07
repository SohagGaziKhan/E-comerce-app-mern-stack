import axios from "axios";
import React, { useEffect, useState } from "react";

const Cart = () => {
  const [products, setProducts] = useState([]);

  // get all products
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
    getAllProducts();
  }, []);
  return (
    <>
      <div className="max-w-[1140px] py-4 mx-auto items-center">
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
    </>
  );
};

export default Cart;
