import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { useCart } from "../context/cart";

const ProductDetailsOffers = () => {
  const [offer, setOffer] = useState({});

  const params = useParams();
  const [cart, setCart] = useCart();

  // get all offer product
  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:3030/api/v1/offers/product/get-single-offers-product/${params.slug}`
      );
      setOffer(data?.offers);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (params?.slug) getSingleProduct();
  }, [params?.slug]);

  return (
    <>
      <Navbar />
      <div className="max-w-[1140px] mx-auto items-center ">
        <h1 className="text-center font-light text-[22px] py-8 ">
          Product Details
        </h1>
        <div className="md:flex items-center justify-around w-[1100px]">
          <div className="w-[400px] h-[400px] items-center md:w-[400px] md:h-[500px] ">
            <img
              className="w-[100%] rounded-xl h-[100%] object-cover "
              src={`http://localhost:3030/api/v1/offers/product/offer-product-photo/${offer?._id}`}
              alt=""
            />
          </div>

          <div className="w-[350px] gap-2 md:flex md:flex-col md:w-[700px] rounded-lg ml-3 ">
            <h1 className="text-xl font-bold cursor-pointer ml-3 ">
              Product Name : {offer.name}
            </h1>
            <h3 className="text-md  font-light py-2 cursor-pointer ml-3">
              <span className="font-bold "> Product Decsription :</span>
              {offer.description}
            </h3>
            <h1 className="cursor-pointer ml-3 text-[red]">
              <span className="text-[red] font-bold">DisCount Price</span> : $
              {offer.regularPrice}
            </h1>
            <h1 className="cursor-pointer ml-3">
              <span className="text-[bleck] font-bold">Product Price</span> : ${" "}
              <del> {offer.discountPrice}</del>
            </h1>

            <h1 className="cursor-pointer ml-3">
              <span className="text-[black] font-bold">Category</span> :
              {offer?.category?.name}
            </h1>
            <h1 className="cursor-pointer ml-3">
              <span className="text-[black] font-bold">Brand</span> :
              {offer?.brand?.name}
            </h1>
            <h1 className="cursor-pointer ml-3 ">
              <span className="text-[black] font-bold">Quantity</span> :{" "}
              {offer.productQuantity}
            </h1>
            <h1 className="cursor-pointer ml-3">
              <span className="text-[black] font-bold">Product Color :</span> :{" "}
              {offer.productColor}
            </h1>
            <button
              className=" w-[380px] md:w-[300px] my-5 mx-2 px-3 py-2 bg-gray-300 hover:bg-gray-800 hover:text-white text-[14px] rounded-lg"
              onClick={() => {
                setCart([...cart, offer]);
                localStorage.setItem("cart", JSON.stringify([...cart, offer]));
                alert("Item Added to Cart");
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetailsOffers;
