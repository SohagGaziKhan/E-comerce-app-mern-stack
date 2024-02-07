import React from "react";
import { Link } from "react-router-dom";
const AdminMenu = () => {
  return (
    <div className="max-w-[1140px] mx-auto py-20 justify-center items-center">
      <div className="w-[350px] h-[650px] border rounded-lg items-center shadow-2xl">
        <ul className="cursor-pointer ml-8 items-center py-2">
          <li className="py-6 cursor-pointer items-center ">
            <Link
              className="hover:underline hover:text-[20px] text-[green] hover:underline-offset-8 hover:font-bold"
              to="/dashboard/admin/create-categories"
            >
              Create Categories
            </Link>
          </li>
          <li className="py-2 cursor-pointer items-center ">
            <Link
              className="hover:underline hover:text-[20px] text-[green] hover:underline-offset-8 hover:font-bold"
              to="/dashboard/admin/create-brand"
            >
              Create Brands
            </Link>
          </li>
          <li className="py-6 cursor-pointer items-center ">
            <Link
              className="hover:underline hover:text-[20px] text-[green] hover:underline-offset-8 hover:font-bold"
              to="/dashboard/admin/create-coupon"
            >
              Create Coupon
            </Link>
          </li>

          <li className="py-6 cursor-pointer items-center ">
            <Link
              className="hover:underline hover:text-[20px] text-[green] hover:underline-offset-8 hover:font-bold"
              to="/dashboard/admin/create-product"
            >
              Add Product
            </Link>
          </li>
          <li className="py-6 cursor-pointer items-center ">
            <Link
              className="hover:underline hover:text-[20px] text-[green] hover:underline-offset-8 hover:font-bold"
              to="/dashboard/admin/create-offer"
            >
              Create Offer
            </Link>
          </li>
          <li className="py-6 cursor-pointer items-center ">
            <Link
              className="hover:underline hover:text-[20px] text-[green] hover:underline-offset-8 hover:font-bold"
              to="/dashboard/admin/all-offers"
            >
              All Offers
            </Link>
          </li>
          <li className="py-6 cursor-pointer items-center ">
            <Link
              className="hover:underline hover:text-[20px] text-[green] hover:underline-offset-8 hover:font-bold"
              to="/dashboard/admin/all-products"
            >
              All Products
            </Link>
          </li>
          <li className="py-6 cursor-pointer items-center ">
            <Link
              className="hover:underline hover:text-[20px] text-[green] hover:underline-offset-8 hover:font-bold"
              to="/dashboard/admin/all-user"
            >
              All User
            </Link>
          </li>

          <li className="py-6 cursor-pointer items-center ">
            <Link
              className="hover:underline hover:text-[20px] text-[green] hover:underline-offset-8 hover:font-bold"
              to="/dashboard/admin/all-order"
            >
              Orders
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AdminMenu;
