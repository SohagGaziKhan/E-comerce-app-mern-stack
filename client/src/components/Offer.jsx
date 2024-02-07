import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cart";

const Offer = () => {
  const [offers, setOffers] = useState([]);
  const navigate = useNavigate();
  const [cart, setCart] = useCart();

  // get all offers
  const getAllOffers = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3030/api/v1/offers/product/get-offers-products"
      );
      setOffers(data?.offers);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllOffers();
  }, []);

  return (
    <>
      <div className="max-w-[1140px] mx-auto py-20 p-2">
        <h1 className="text-center text-[red] underline underline-offset-8  text-[25px] font-bold  ">
          All Offers Products
        </h1>
        <div className=" items-center justify-center  grid md:grid-cols-2 lg:grid-cols-4 ">
          {/* this is the product section */}
          {offers &&
            offers?.map((p) => (
              <div key={p._id} className="py-4">
                <div className="shadow-2xl border hover:scale-105 duration-300 gap-4 justify-center items-center ml-5 rounded-xl w-[250px] h-[400px]">
                  <div className="w-[250px] h-[200px]">
                    <img
                      className="w-[100%] rounded-xl h-[100%] object-cover"
                      onClick={() => navigate(`/product/offer/${p?.slug}`)}
                      src={`http://localhost:3030/api/v1/offers/product/offer-product-photo/${p?._id}`}
                      alt=""
                      onError={(e) => {
                        e.target.src = "path/to/fallback-image.jpg"; // Provide a fallback image path
                      }}
                    />
                  </div>
                  <div className="mt-2 ml-3">
                    <h1 className="text-xl font-light mb-1 font-sans text-black-700">
                      {p.name}
                    </h1>
                    <p className="text-[18px] font-semibold my-3">
                      Discount Price:{" "}
                      <span className="text-red-500">$ {p.regularPrice}</span>
                    </p>
                    {/* <del>$100</del> */}
                    {/* Uncomment the lines below if you want to display regular price */}
                    <p className="text-[15px] text-gray-700 my-3">
                      Regulary Price: $<del>{p.discountPrice}</del>
                    </p>
                    <div className="btn-All text-center justify-center">
                      <button
                        className="my-5 mx-2 bg-green-600 px-3 py-2 hover:bg-gray-800 hover:text-white text-[14px] rounded-lg"
                        onClick={() => navigate(`/product/offer/${p.slug}`)}
                      >
                        More Details
                      </button>
                      <button
                        className="my-5 mx-2 px-3 py-2 bg-gray-300 hover:bg-gray-800 hover:text-white text-[14px] rounded-lg"
                        onClick={() => {
                          setCart([...cart, p]);
                          localStorage.setItem(
                            "cart",
                            JSON.stringify([...cart, p])
                          );
                          alert("Item Added to Cart");
                        }}
                      >
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

export default Offer;
