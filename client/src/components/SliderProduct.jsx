import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SliderProduct = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === product.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to handle the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? product.length - 1 : prevIndex - 1
    );
  };

  // Fetch all products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3030/api/v1/product/get-all-product"
      );
      setProduct(data?.product);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [product]);

  return (
    <div>
      <div className="bg">
        <div className="max-w-[1140px] h-[500px] w-full mx-auto relative mt-4">
          {product.map((slide, index) => (
            <div
              key={index}
              className={
                index === currentIndex
                  ? "slide active bg-[#adf7ad] rounded-lg "
                  : "slide inactive"
              }
            >
              {index === currentIndex && (
                <img
                  src={`http://localhost:3030/api/v1/product/product-photo/${slide._id}`}
                  onClick={() => navigate(`/product/${slide.slug}`)}
                  className="w-full h-[500px] object-contain rounded-2xl bg-center bg-cover duration-500"
                  alt={slide.name}
                />
              )}
            </div>
          ))}
          {/* Left Arrow */}
          <div
            className="absolute top-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
            onClick={prevSlide}
          >
            <FaArrowAltCircleLeft size={30} />
          </div>
          {/* Right Arrow */}
          <div
            className="absolute top-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
            onClick={nextSlide}
          >
            <FaArrowAltCircleRight size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderProduct;
