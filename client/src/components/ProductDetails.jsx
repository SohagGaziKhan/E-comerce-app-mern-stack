import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/cart";
const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  const navigate = useNavigate();
  const [raeltedProduct, setRaeltedProduct] = useState([]);
  const [cart, setCart] = useCart();

  // get similarProduct
  const getSimilarProduct = async (pid, cid, bid) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3030/api/v1/product/related-product/${pid}/${cid}/${bid}`
      );
      setRaeltedProduct(data?.product);
    } catch (error) {
      console.log(error);
    }
  };

  // inital product details
  useEffect(() => {
    if (params?.slug) getSingleProduct();
  }, [params?.slug]);

  // get single product
  const getSingleProduct = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:3030/api/v1/product/get-single-product/${params.slug}`
      );

      if (data && data.product) {
        setProduct(data.product);
        getSimilarProduct(
          data.product._id,
          data.product.category._id,
          data.product.brand._id
        );
      } else {
        // Handle the case where data or data.product is undefined
        console.error("Error fetching product data:", data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-[1140px] mx-auto items-center ">
        <h1 className="text-center font-light text-[22px] py-8 ">
          Product Details
        </h1>

        <div className="md:flex items-center justify-around w-[1100px]">
          <div className="w-[400px] h-[400px] items-center md:w-[400px] md:h-[500px] ">
            <img
              className="w-[100%] rounded-xl h-[100%] object-cover "
              src={`http://localhost:3030/api/v1/product/product-photo/${product._id}`}
              alt=""
            />
          </div>
          <div className="w-[350px] gap-2 md:flex md:flex-col md:w-[700px] rounded-lg ml-3 ">
            <h1 className="text-xl font-bold cursor-pointer ml-3 ">
              Product Name : {product.name}
            </h1>
            <h3 className="text-md  font-light py-2 cursor-pointer ml-3">
              <span className="font-bold "> Product Decsription :</span>
              {product.description}
            </h3>
            <h1 className="cursor-pointer ml-3">
              <span className="text-[red] font-bold">Price</span> :{" "}
              {product.regularPrice}
            </h1>

            <h1 className="cursor-pointer ml-3">
              <span className="text-[black] font-bold">Category</span> :
              {product?.category?.name}
            </h1>
            <h1 className="cursor-pointer ml-3">
              <span className="text-[black] font-bold">Brand</span> :
              {product?.brand?.name}
            </h1>
            <h1 className="cursor-pointer ml-3 ">
              <span className="text-[black] font-bold">Quantity</span> :{" "}
              {product.productQuantity}
            </h1>
            <h1 className="cursor-pointer ml-3">
              <span className="text-[black] font-bold">Product Color :</span> :{" "}
              {product.productColor}
            </h1>

            <button
              className=" w-[380px] md:w-[300px] my-5 mx-2 px-3 py-2 bg-gray-300 hover:bg-gray-800 hover:text-white text-[14px] rounded-lg"
              onClick={() => {
                setCart([...cart, product]);
                localStorage.setItem(
                  "cart",
                  JSON.stringify([...cart, product])
                );
                alert("Item Added to Cart");
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
        <hr className="text-black bg-black" />
        <div>
          <h1 className="text-center font-semibold text-xl py-8 ">
            More Product
          </h1>
          <div className="juctify-center items-center md:grid md:grid-cols-3">
            {raeltedProduct &&
              raeltedProduct?.map((p) => (
                <div key={p._id} className="py-4">
                  <div className="shadow-2xl border gap-2 justify-center items-center ml-2 rounded-xl w-[250px] h-[400px]">
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
                      <h1 className="text-md text-[gray] font-light mb-1 font-sans text-black-700">
                        {p.description.substring(0, 20)}...
                      </h1>

                      <p className="text-[15px] font-semibold text-gray-700 my-3">
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

export default ProductDetails;
