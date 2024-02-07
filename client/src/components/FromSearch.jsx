import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useSearch } from "../context/search";
import { useNavigate } from "react-router-dom";
const SearchResults = () => {
  const navigate = useNavigate();
  const [values] = useSearch(); // Removed unused setValues

  return (
    <div>
      <Navbar />

      <div className="max-w-[1140px] mx-auto">
        <div className="Search">
          <h1 className="text-center py-4 font-bold text-[20px] ">
            Search Results
          </h1>
          <h6>{values?.results.length < 1 ? "No Products Found" : ""}</h6>

          <div className="grid grid-cols-3">
            {values?.results.map((p) => (
              <div key={p._id} className=" grid grid-cols-3 py-4 ">
                <div className="shadow-2xl border  justify-center items-center  rounded-xl w-[250px] h-[400px]">
                  <div className="w-[250px] h-[200px]">
                    <img
                      className="w-[100%] rounded-xl h-[100%] object-cover"
                      src={`http://localhost:3030/api/v1/product/product-photo/${p._id}`}
                      alt=""
                    />
                  </div>
                  <div className="mt-2 ml-3">
                    <h1 className="text-xl font-light mb-1 font-sans text-black-700">
                      {p.name}
                    </h1>
                    {/* <p className="text-[18px] font-semibold my-3">
                    Discount Price:{" "}
                    <span className="text-red-500">
                      $ {p.discountPrice}
                    </span>
                  </p> */}
                    {/* <del>$100</del> */}
                    {/* Uncomment the lines below if you want to display regular price */}
                    <p className="text-[15px] text-gray-700 my-3">
                      Price: $<span>{p.regularPrice}</span>
                    </p>
                    <div className="btn-All text-center justify-center">
                      <button
                        className="my-5 mx-2 bg-gray-300 px-3 py-2 hover:bg-gray-800 hover:text-white text-[14px] rounded-lg"
                        onClick={() => navigate(`/product/${p.slug}`)}
                      >
                        More Details
                      </button>
                      <button className="my-5 mx-2 px-3 py-2 bg-gray-300 hover:bg-gray-800 hover:text-white text-[14px] rounded-lg">
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

      <Footer />
    </div>
  );
};

export default SearchResults;
