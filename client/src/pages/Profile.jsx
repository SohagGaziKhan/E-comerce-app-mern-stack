// import React from 'react'
import { Link } from "react-router-dom";
import { useAuth } from "../context/auth";

const Profile = () => {
  const [auth, setAuth] = useAuth();
  const handleClickLOgOut = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    alert("LogOut successfully..");
  };
  return (
    <div className=" max-w-[1140px] mx-auto items-center h-[50px] py-3   justify-center">
      <div className="flex gap-8  items-center justify-center h-[50px] rounded-xl bg-[green]">
        <button className="text-white cursor-pointer font-semibold hover:underline underline-offset-8">
          <Link to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}>
            Dashboard
          </Link>
        </button>
        <br />
        <button className="text-white cursor-pointer font-semibold hover:underline underline-offset-8">
          <Link
            to={`/dashboard/${
              auth?.user?.role === 1 ? "admin" : "user"
            }/my-account`}
          >
            My Account
          </Link>
        </button>
        <br />
        <button className="text-white font-semibold cursor-pointer hover:underline underline-offset-8">
          <Link
            to={`/dashboard/${
              auth?.user?.role === 1 ? "admin" : "user"
            }/all-order`}
          >
            Orders
          </Link>
        </button>
        <br />
        <button
          onClick={handleClickLOgOut}
          className="text-white font-semibold cursor-pointer hover:underline underline-offset-8"
        >
          <Link to="/login">LogOut</Link>
        </button>
      </div>
    </div>
  );
};

export default Profile;
