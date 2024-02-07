import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Select } from "antd";

const { Option } = Select;
const AdminUpdateOffersRight = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [regularPrice, setRegularPrice] = useState("");
  const [discountPrice, setDiscountPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productColor, setProductColor] = useState("");
  const [shipping, setShipping] = useState("");
  const [id, setId] = useState("");

  // update offers Prodcut
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      // this is browser default
      const productDate = new FormData();
      productDate.append("name", name);
      productDate.append("description", description);
      productDate.append("regularPrice", regularPrice);
      productDate.append("discountPrice", discountPrice);
      productDate.append("productQuantity", productQuantity);
      productDate.append("productColor", productColor);
      productDate.append("photo", photo);
      productDate.append("category", category);
      productDate.append("brand", brand);

      const { data } = await axios.put(
        `http://localhost:3030/api/v1/offers/product/update-offer-product/${id}`,
        productDate
      );
      if (data?.success) {
        alert(data?.message);
        navigate("/dashboard/admin/all-offers");
      } else {
        alert(`${data?.message}`);
      }
    } catch (error) {
      console.log(error);
      alert("Something Went Worng in Product Update");
    }
  };

  // get all offers products Category and Brand
  const getAllProduct = async () => {
    try {
      //  this is category routes
      const categoryResponse = await axios.get(
        "http://localhost:3030/api/v1/category/gets-category"
      );
      // this is brand routes
      const brandResponse = await axios.get(
        "http://localhost:3030/api/v1/brand/gets-brand"
      );
      // Check if both requests were successful
      if (categoryResponse.data?.success && brandResponse.data?.success) {
        // Assuming data.categroy is the correct property name for categories
        setCategories(categoryResponse.data?.categroy);

        // Assuming data.brand is the correct property name for brands
        setBrands(brandResponse.data?.brand);
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong in getting all products");
    }
  };
  useEffect(() => {
    getAllProduct();
  }, []);

  //   get single offer product
  const singleProduct = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:3030/api/v1/offers/product/get-single-offers-product/${params.slug}`
      );
      // setName(data.product.name);
      setId(data.offers._id);
      setName(data.offers.name);
      setDescription(data.offers.description);
      setCategory(data.offers.category._id);
      setBrand(data.offers.brand._id);
      setRegularPrice(data.offers.regularPrice);
      setDiscountPrice(data.offers.discountPrice);
      setProductQuantity(data.offers.productQuantity);
      setProductColor(data.offers.productColor);
      setShipping(data.offers.shipping);
    } catch (error) {
      console.log(error);
      alert("Something Wrong in Single Offers for backend");
    }
  };
  useEffect(() => {
    singleProduct();
    // eslint-disable-next-line
  }, []);
  return (
    <div>
      {" "}
      <div className="max-w-[1140px] flex mx-auto py-20 justify-center items-center">
        <div className="w-[800px] h-full border rounded-lg items-center shadow-2xl">
          <h1 className="text-center text-[green] underline underline-offset-8 cursor-pointer font-semibold text-[20px] py-4">
            Update Offers Product
          </h1>
          <div className="flex items-center justify-center">
            <label className=" w-[450px] text-center border ml-15 cursor-pointer rounded-xl py-2 my-4">
              {photo ? photo.name : "Upload Photo"}
              <input
                type="file"
                name="photo"
                accept="image/*"
                onChange={(e) => setPhoto(e.target.files[0])}
                hidden
              />
            </label>
          </div>
          <div>
            {photo && (
              <div className="text-center items-center">
                <img
                  src={URL.createObjectURL(photo)}
                  alt="product_photo"
                  height={"200px"}
                  className="h-[200px] w-[500px] border p-1 ml-[150px] rounded-xl  object-contain"
                />
              </div>
            )}
          </div>
          <Select
            bordered={true}
            placeholder="Select a Category"
            size="large"
            showSearch
            className="flex w-[450px] items-center mt-4 mb-2 ml-[22%]"
            onChange={(value) => {
              setCategory(value);
            }}
            value={category}
          >
            {categories.map((c) => (
              <Option key={c._id} value={c._id}>
                {c.name}
              </Option>
            ))}
          </Select>

          <Select
            bordered={true}
            placeholder="Select a Brand"
            size="large"
            showSearch
            className="flex w-[450px] items-center mt-4 mb-2 ml-[22%]"
            onChange={(value) => {
              setBrand(value);
            }}
            value={brand}
          >
            {brands.map((c) => (
              <Option key={c._id} value={c._id}>
                {c.name}
              </Option>
            ))}
          </Select>
          <div className="flex items-center justify-center py-4 gap-5">
            <span className="text-[20px] font-semibold cursor-pointer">
              Product Name :{" "}
            </span>
            <input
              type="text"
              placeholder="Enter Product Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input  w-[350px] rounded-xl p-2 h-full b border-none text-lg outline-none text-gray-700 font-light text-[13px] "
            />
          </div>
          <div className="flex items-center justify-center py-4 gap-5">
            <span className="text-[20px] font-semibold cursor-pointer">
              Regular Price :
            </span>
            <input
              type="number"
              value={regularPrice}
              onChange={(e) => setRegularPrice(e.target.value)}
              placeholder="Enter Regular Price "
              required
              className="input  w-[350px] rounded-xl p-2 h-full b border-none text-lg outline-none text-gray-700 font-light text-[13px] "
            />
          </div>
          <div className="flex items-center justify-center py-4 gap-5">
            <span className="text-[20px] font-semibold cursor-pointer">
              Product Price :
            </span>
            <input
              type="number"
              value={discountPrice}
              onChange={(e) => setDiscountPrice(e.target.value)}
              placeholder="Enter Product Price"
              required
              className="input  w-[350px] rounded-xl p-2 h-full b border-none text-lg outline-none text-gray-700 font-light text-[13px] "
            />
          </div>
          <div className="flex items-center justify-center py-4 gap-5">
            <span className="text-[20px] font-semibold cursor-pointer">
              Product Quantity :
            </span>
            <input
              type="number"
              placeholder="Enter Product Quantity"
              value={productQuantity}
              onChange={(e) => setProductQuantity(e.target.value)}
              required
              className="input  w-[350px] rounded-xl p-2 h-full b border-none text-lg outline-none text-gray-700 font-light text-[13px] "
            />
          </div>
          <div className="flex items-center justify-center py-4 gap-5">
            <span className="text-[20px] font-semibold cursor-pointer">
              Product Color :
            </span>
            <input
              type="text"
              placeholder="Enter Product Color"
              value={productColor}
              onChange={(e) => setProductColor(e.target.value)}
              required
              className="input  w-[350px] rounded-xl p-2 h-full b border-none text-lg outline-none text-gray-700 font-light text-[13px] "
            />
          </div>
          <div className="flex items-center justify-center py-4 gap-5">
            <span className="text-[20px] font-semibold cursor-pointer">
              Products Decription :
            </span>

            <textarea
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="write a description"
              className=" w-[400px] h-[300px] p-2 cursor-pointer outline-none rounded-xl"
            />
          </div>
          <div className="flex items-center justify-center py-4 gap-5">
            <span className="text-[20px] font-semibold cursor-pointer">
              Shipping :
            </span>
            <Select
              bordered={true}
              placeholder="Select Shipping "
              size="large"
              showSearch
              className="form-select mb-3"
              onChange={(value) => {
                setShipping(value);
              }}
              value={shipping ? "yes" : "No"}
            >
              <Option value="0">No</Option>
              <Option value="1">Yes</Option>
            </Select>
          </div>

          <div className="text-center my-4 cursor-pointer">
            <button
              onClick={handleUpdate}
              className=" text-white px-4 py-2 rounded-xl bg-[green] hover:bg-gray-500"
            >
              Update Offers Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminUpdateOffersRight;
