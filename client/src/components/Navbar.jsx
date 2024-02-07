import React from "react";
// import { IoLogoDesignernews } from "react-icons/io";
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth";
import InputSearch from "./InputSearch";
import { useCart } from "../context/cart";
import { Badge } from "antd";

const Navbar = () => {
  const [auth] = useAuth();
  const [cart] = useCart();
  return (
    <nav className="bg-[#cbeccb] shadow-lg">
      <div className="flex items-center font-medium justify-around ">
        <div>
          <Link to="/" className="text-2xl font-bold">
            E-Commerce{" "}
          </Link>
        </div>
        <ul className="md:flex hidden items-center uppercase gap-2 font-semibold">
          <li>
            <Link to="/" className="py-7  inline-block">
              home
            </Link>
          </li>
          {/* <li>
            <Link to="/category" className="py-1  inline-block">
              Category
            </Link>
          </li> */}
        </ul>
        <InputSearch />
        <div className="md:block hidden gap-6 items-center ">
          {/* <Badge count={cart?.length} showZero> */}
          <button className="mr-8">
            <Badge count={cart?.length} showZero>
              <Link to="/cart" className="px-[10px]">
                Cart
              </Link>
            </Badge>
          </button>
          {/* </Badge> */}

          {!auth.user ? (
            <>
              <button>
                <Link to={"/login"}>Login</Link>
              </button>
            </>
          ) : (
            <>
              <button>
                <Link to={"/profile"}>Profile</Link>
              </button>
            </>
          )}
        </div>
        {/* for moblile screen  */}
        <ul className="md:hidden ">
          <li>home</li>
          <li>cart</li>
          <li>login</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
