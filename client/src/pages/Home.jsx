import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
// import BrandCategory from "../components/BrandCategory";
import Offer from "../components/Offer";
// import Products from "../components/Products";
// import Category from "../components/Category";
import Review from "../components/Review";
import SubBrands from "../components/SubBrands";
import axios from "axios";
import { Checkbox, Radio } from "antd";
import { Prices } from "../components/Prices";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/cart";
import SliderProduct from "../components/SliderProduct";

const Home = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const [brand, setBrand] = useState([]);
  const [cat, setCet] = useState([]);
  const [radio, setRadio] = useState([]);
  const [checked, setChecked] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useCart();
  // this all const is pagenation
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = product.slice(firstIndex, lastIndex);
  const numberOfPages = Math.ceil(product.length / recordsPerPage);
  const numbers = [...Array(numberOfPages).keys()].slice(1);

  // const [prices,setPrices]=useState(null)

  const filterByPrice = (price) => {
    setRadio(
      product?.filter((i) => {
        return i.price === price;
      })
    );
  };

  //load more
  // const loadMore = async () => {
  //   try {
  //     setLoading(true);
  //     const { data } = await axios.get(
  //       `http://localhost:3030/api/v1/product/product-list/${page}`
  //     );
  //     setLoading(false);
  //     setProduct((prevProducts) => [...prevProducts, ...data?.products]);
  //   } catch (error) {
  //     console.log(error);
  //     setLoading(false);
  //   }
  // };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);

  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `http://localhost:3030/api/v1/product/product-list/${page}`
      );
      setLoading(false);
      setProduct((prevProducts) => [...prevProducts, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // getTotal Count
  const getTotalCount = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3030/api/v1/product/product-count"
      );
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };
  // useEffect(() => {
  //   getTotalCount();
  // }, []);

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page, loadMore]);

  // get all brand
  const getAllBrand = async () => {
    const { data } = await axios.get(
      "http://localhost:3030/api/v1/brand/gets-brand"
    );
    setBrand(data?.brand);
  };
  useEffect(() => {
    getAllBrand();
  }, []);

  // get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3030/api/v1/category/gets-category"
      );
      if (data?.success) {
        setCet(data?.categroy);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllCategory();
    getTotalCount();
  }, []);

  // filter product by category
  const filterCategory = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };

  // get all prodcuts
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
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) getFilterProducts();
  }, [checked.length, radio.length]);

  // get product filter
  const getFilterProducts = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:3030/api/v1/product/product-filter",
        {
          checked,
          radio,
        }
      );
      setProduct(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  // Next page
  const nextPage = () => {
    if (currentPage !== numberOfPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Previous page
  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Change page
  const changePage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="">
      <Navbar />
      <Slider />
      <Offer />
      {/* <BrandCategory /> */}
      <SliderProduct />
      {/* <Category /> */}
      <div className="max-w-[1140px] mx-auto justify-center items-center px-3 py-8">
        <h1 className="text-center mb- underline underline-offset-8  text-[25px] font-bold  ">
          Find Your Fave Product{" "}
        </h1>

        <div className="flex gap-1  md:flex   md:gap-3  ">
          <div className="w-[120px] md:w-[300px] mt-3 md:flex md:flex-col gap-3 h-full py-4 border rounded-xl shadow-xl">
            {/* this is brand section */}
            {/* brand section  */}
            <div>
              <h1 className="text-center cursor-pointer py-3 text-[20px] font-bold">
                Find Your Brand{" "}
              </h1>
              <div className="flex flex-col ml-4 gap-4">
                {brand.map((bs) => (
                  <Checkbox
                    key={bs._id}
                    onChange={(e) => console.log(e.target.checked, bs._id)}
                    className="cursor-pointer "
                  >
                    {bs.name}
                  </Checkbox>
                ))}
              </div>
            </div>

            {/* this is category section  */}
            {/* category section  */}
            <div>
              <h1 className="text-center cursor-pointer text-[20px] py-3 font-bold">
                Find Your Category
              </h1>
              <div className="flex flex-col ml-4 gap-4">
                {cat.map((c) => (
                  <Checkbox
                    key={c._id}
                    onChange={(e) => filterCategory(e.target.checked, c._id)}
                  >
                    {c.name}
                  </Checkbox>
                ))}
              </div>
            </div>
            {/* this is price scetion  */}
            {/* prices section */}
            <div>
              <h1 className="text-center cursor-pointer text-[20px] font-bold py-3">
                Find By Pirce
              </h1>
              <Radio.Group onChange={(e) => setRadio(e.target.value)}>
                {Prices?.map((p) => (
                  <div key={p._id}>
                    <Radio
                      value={p.array}
                      className="ml-4 py-2"
                      onClick={filterByPrice}
                    >
                      {p.name}
                    </Radio>
                  </div>
                ))}
              </Radio.Group>
            </div>
            {/* this is reset button for reset all section */}
            {/* reset button section  */}
            <div className="text-center items-center ">
              <button
                className="py-2 px-4 coursor-pointer border hover:text-white hover:bg-[green] rounded-lg shadow-lg"
                onClick={() => window.location.reload()}
              >
                Reset Filter
              </button>
            </div>
          </div>
          {/* this product section  */}
          <div className=" w-[270px] md:w-[800px] md:grid md:grid-cols-3">
            {/* this is the product section */}
            {records &&
              records?.map((p) => (
                <div key={p._id} className="py-4 hover:scale-105 duration-300">
                  <div className="shadow-2xl border gap-2 justify-center items-center ml-2 rounded-xl w-[250px] h-[400px]">
                    <div className="w-[250px] h-[200px]">
                      <img
                        className="w-[100%] rounded-xl h-[100%] object-cover cursor-pointer"
                        src={`http://localhost:3030/api/v1/product/product-photo/${p._id}`}
                        onClick={() => navigate(`/product/${p.slug}`)}
                        alt=""
                      />
                    </div>
                    <div className="mt-2 ml-3">
                      <h1 className="text-xl  cursor-pointer font-light mb-1 font-sans text-black-700">
                        {p.name}
                      </h1>
                      <p className="text-md text-[gray] cursor-pointer font-light mb-1 font-sans text-black-700">
                        {p.description.substring(0, 20)}...
                      </p>
                      <p className="text-[15px] font-semibold cursor-pointer text-gray-700 my-3">
                        Price: $<span>{p.regularPrice}</span>
                      </p>
                      <div className="btn-All text-center cursor-pointer justify-center">
                        <button
                          className="my-5 mx-2 bg-green-600 px-3 py-2 hover:bg-gray-800 hover:text-white text-[14px] rounded-lg"
                          onClick={() => navigate(`/product/${p.slug}`)}
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
          {/*  this is pagenation section */}
        </div>
        <nav>
          <ul className="pagination flex py-20 items-center justify-center gap-5">
            <li className=" bg-[green] py-1.5 px-3 rounded-lg border text-white hover:text-black hover:bg-[white]">
              <button onClick={prevPage} disabled={currentPage === 1}>
                Prev
              </button>
            </li>
            {numbers.map((number) => (
              <li
                key={number}
                className={`${
                  currentPage === number
                    ? "text-[green] border py-1 px-2 rounded-lg"
                    : ""
                }`}
              >
                <button onClick={() => changePage(number)}>{number}</button>
              </li>
            ))}
            <li className=" bg-[green] py-1.5 px-3 rounded-lg border text-white hover:text-black hover:bg-[white]">
              <button
                onClick={nextPage}
                disabled={currentPage === numberOfPages}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>

        <div>
          {/* <div className="m-2 p-3">
            {product && product.length < total && (
              <button
                className="bg-[green]"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                {loading ? "Loading ..." : "Loadmore"}
              </button>
            )}
          </div> */}
        </div>
      </div>

      <SubBrands />
      <Review />
      <Footer />
    </div>
  );
};

export default Home;
