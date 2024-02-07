import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/auth";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [auth, setAuth] = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3030/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        alert(`${res.data.message}`);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        // localstorage save my data
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
        return res.data.message;
      } else {
        return res.data.message;
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="max-w-[1140px] mx-auto align-center justify-center">
        <div className="flex justify-center items-center py-24 rounded-md">
          <div className=" w-400 h-440  rounded-lg bg-[#f8ebeb] border-2 border-white border-opacity-50 rounded-20 backdrop-blur-20 shadow-lg flex justify-center items-center">
            <div className="w-[100%] p-[40px]">
              <h2 className="text-[2em] text-[#162938] text-center font-semibold">
                Login
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="relative w-[100%] h-[50px] border-b-2 border-solid border-blue-900 mt-8">
                  <span className="absolute right-8 text-xl text-blue-900 leading-16">
                    <MdEmail />
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="input w-full h-full bg-transparent border-none outline-none text-xl text-blue-900 font-semibold px-0 md:px-5"
                  />
                  <label className="absolute top-1/2 left-5 transform -translate-y-1/2 text-2xl text-blue-900 font-semibold pointer-events-none transition duration-500">
                    E-mail
                  </label>
                </div>
                <div className="relative w-[100%] h-[50px] border-b-2 border-solid border-blue-900 mt-8">
                  <span className="absolute right-8 text-xl text-blue-900 leading-16">
                    <FaLock />
                  </span>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="input w-full h-full bg-transparent border-none outline-none text-xl text-blue-900 font-semibold px-0 md:px-5"
                  />
                  <label className="absolute top-1/2 left-5 transform -translate-y-1/2 text-2xl text-blue-900 font-semibold pointer-events-none transition duration-500">
                    Password
                  </label>
                </div>
                {/* <div className="input-box">
                <span className="icon">
                  <AiFillClockCircle />
                </span>
                <input type="password" required />
                <label>Password</label>
              </div> */}

                <div className="flex justify-between text-2xl text-blue-900 font-semibold">
                  <label>
                    <input type="checkbox" className="text-blue-900 mr-[3px]" />
                    Remember Me
                  </label>
                  <div className="text-[#162928] cursor-pointer hover:underline underline-offset-8">
                    <Link to="/forgot-password">forget-Password</Link>
                  </div>
                </div>
                <button
                  className="w-full h-14 bg-blue-900 border-none outline-none rounded-md cursor-pointer text-lg font-semibold text-white mt-4 hover:bg-white hover:text-black"
                  type="submit"
                >
                  LogIn
                </button>
                <div className="flex justify-center font-semibold m-2">
                  <p className="text-blue-900 text-lg font-semibold">
                    Donot have an account?
                  </p>
                  <p className="border-none outline-none font-semibold hover:cursor-pointer hover:underline underline-offset-4">
                    <Link to="/register"> Register</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
