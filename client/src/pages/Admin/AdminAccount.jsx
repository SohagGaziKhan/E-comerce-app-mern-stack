import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Profile from "../Profile";
import { Link } from "react-router-dom";
import axios from "axios";
const AdminAccount = () => {
  const [auth, setAuth] = useAuth();
  //state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  //get user data
  useEffect(() => {
    const { email, name, phone, address } = auth?.user;
    setName(name);
    setPhone(phone);
    setEmail(email);
    setAddress(address);
  }, [auth?.user]);

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(
        "http://localhost:3030/api/v1/auth/update-admin-profile",
        {
          name,
          email,
          password,
          phone,
          address,
        }
      );
      if (data?.error) {
        alert(data?.error);
      } else {
        setAuth({ ...auth, user: data?.updatedUser });
        let ls = localStorage.getItem("auth");
        ls = JSON.parse(ls);
        ls.user = data.updatedUser;
        localStorage.setItem("auth", JSON.stringify(ls));
        alert("Profile Updated Successfully");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };
  return (
    <>
      <Navbar />

      <Profile />
      <div className="max-w-[1140px] mx-auto py-8">
        <div className="border w-[800px] mx-auto py-8 mb-8 shadow-xl rounded-lg items-center mt-5">
          <div>
            <h1 className="text-center py-4 text-[20px] font-bold underline underline-offset-8">
              USER PROFILE
            </h1>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="text-center py-3 px-4 rounded-md w-[450px] mx-auto flex ">
              <label
                htmlFor=""
                className="text-center py-1 font-semibold w-[90px] "
              >
                Name :
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="px-4 py-1 rounded-md outline-none border w-[340px]"
                id="exampleInputEmail1"
                autoFocus
              />
            </div>
            <div className="text-center py-3 px-4  rounded-md w-[450px] mx-auto flex ">
              <label
                htmlFor=""
                className="text-center  py-1 font-semibold w-[90px] "
              >
                E-mail :
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 rounded-md  py-1 outline-none border w-[340px]"
                id="exampleInputEmail1"
                placeholder="Enter Your Email "
                disabled
              />
            </div>
            <div className="text-center py-3 px-4 rounded-md w-[450px] mx-auto flex ">
              <label
                htmlFor=""
                className="text-center  py-1 font-semibold w-[90px] "
              >
                Password :
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="px-4 rounded-md  py-1 outline-none border w-[340px]"
                id="exampleInputPassword1"
                placeholder="Enter Your Password"
              />
            </div>
            <div className="text-center py-3 px-4 rounded-md w-[450px] mx-auto flex ">
              <label
                htmlFor=""
                className="text-center  py-1 font-semibold w-[90px] "
              >
                Phone :
              </label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="px-4 rounded-md  py-1 outline-none border w-[340px]"
                id="exampleInputEmail1"
                placeholder="Enter Your Phone"
              />
            </div>
            <div className="text-center py-3 px-4 rounded-md w-[450px] mx-auto flex ">
              <label
                htmlFor=""
                className="text-center  py-1 font-semibold w-[90px] "
              >
                Address :
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="px-4 rounded-md  py-1 outline-none border w-[340px]"
                id="exampleInputEmail1"
                placeholder="Enter Your Address"
              />
            </div>

            <div className="text-center mt-4">
              <button
                type="submit"
                className="bg-[#64f064] text-black px-4 rounded-md py-1.5 hover:bg-[#217221] hover:text-white"
              >
                UPDATE
              </button>
            </div>
          </form>
          <p className="text-center mt-4 text-[red] font-bold py-2 ">
            {auth?.user?.name} can not update your e-mail
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminAccount;
