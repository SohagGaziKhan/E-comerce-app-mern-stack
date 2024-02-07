import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAuth } from "../context/auth";
import { useCart } from "../context/cart";
import { useNavigate } from "react-router-dom";
import DropIn from "braintree-web-drop-in-react";
import axios from "axios";

const Cart = () => {
  const [auth] = useAuth();
  const [cart, setCart] = useCart();
  const navigate = useNavigate();
  const [clientToken, setClientToken] = useState("");
  const [instance, setInstance] = useState("");
  const [loading, setLoading] = useState(false);

  const totalPrice = () => {
    try {
      let total = 0;
      cart.map((item) => {
        total = total + item?.regularPrice;
      });
      return total.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      });
    } catch (error) {
      console.log(error);
    }
  };

  //   delete items
  const removeCartItem = async (pid) => {
    try {
      const myCart = [...cart];
      let index = myCart.findIndex((Item) => Item._id === pid);
      myCart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(myCart));
      setCart(myCart);
    } catch (error) {
      console.log(error);
    }
  };

  // payment token
  const getToken = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3030/api/v1/product/braintree/token"
      );
      setClientToken(data?.clientToken);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getToken();
  }, [auth?.token]);

  //handle payments
  const handlePayment = async () => {
    try {
      setLoading(true);
      const { nonce } = await instance.requestPaymentMethod();
      const { data } = await axios.post(
        "http://localhost:3030/api/v1/product/braintree/payment",
        {
          nonce,
          cart,
        }
      );
      setLoading(false);
      localStorage.removeItem("cart");
      setCart([]);
      navigate("/dashboard/user/all-order");
      alert("Payment Completed Successfully ");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="max-w-[1140px] mx-auto px-2 py-4">
        <div>
          <div>
            <div className=" py-8">
              <h1 className="text-center font-semibold text-[25px] py-2">{`Hello ${
                auth?.token && auth?.user?.name
              }`}</h1>{" "}
              {/* <h3>{cart?.lenght >1 ?}</h3> */}
              <h3 className="text-center">
                {cart?.length
                  ? `You Have ${cart.length} items in your cart ${
                      auth?.token ? "" : "please login to checkout"
                    }`
                  : " Your Cart Is Empty"}
              </h3>
            </div>
            <div className="md:flex justify-around md:w-[1000px] gap-4">
              <div className="w-[500px] ">
                {cart?.map((p) => (
                  <div
                    key={p._id}
                    className=" h-[200px]  w-[420px] flex border md:h-[160px]  md:w-[500px]  gap-3 px-2 mb-2 rounded-md "
                  >
                    <div className="w-[180px]  h-[200px] md:w-[250px] md:h-[160px] ">
                      <img
                        className="w-[100%]  rounded-xl h-[100%] object-cover cursor-pointer"
                        src={
                          p._id
                            ? `http://localhost:3030/api/v1/product/product-photo/${p._id}`
                            : `http://localhost:3030/api/v1offers/product/offer-product-photo/${p?._id}`
                        }
                        // onClick={() => navigate(`/product/${p.slug}`)}
                        alt=""
                      />
                    </div>
                    <div className="w-[200px] h-[200px] md:w-[250px]">
                      <p className=" py-1 cursor-pointer">
                        <span className="underline text-black underline-offset-8">
                          Name
                        </span>{" "}
                        : {p.name.substring(0, 20)}
                      </p>

                      <p className=" py-1 cursor-pointer">
                        {p.description.substring(0, 30)}
                      </p>
                      <p className="text-[red]  py-1 cursor-pointer">
                        <span className="underline text-black underline-offset-8">
                          Price
                        </span>{" "}
                        : {p.regularPrice}
                      </p>
                      <div className="text-center">
                        <button
                          className="bg-[red] hover:bg-[green] hover:text-[black] text-white border px-3 py-2 mt-1.5 rounded-lg"
                          onClick={() => removeCartItem(p._id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className=" w-[390px] md:w-[500px] border  rounded-xl shadow-xl py-4">
                <h3 className="text-center font-light text-3xl py-2">
                  Cart Summary
                </h3>
                <h3 className="text-center font-semibold text-xl py-2 px-5">
                  Total Price
                </h3>

                <h2 className="text-center mb-4">{totalPrice()}</h2>
                {auth?.user?.address ? (
                  <>
                    <div className="text-center  ">
                      <div className="flex text-center justify-around">
                        {" "}
                        <h4 className="text-xl font-bold">Current Address :</h4>
                        <h5 className="text-xl font-light">
                          {auth?.user?.address}
                        </h5>
                      </div>
                      <button
                        className="bg-[red] mt-8 px-3 py-1 text-white rounded-md hover:bg-[green]  "
                        onClick={() => navigate("/dashboard/user")}
                      >
                        Update Address
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="">
                    {auth?.token ? (
                      <button
                        className="btn btn-outline-warning"
                        onClick={() => navigate("/dashboard/user")}
                      >
                        Update Address
                      </button>
                    ) : (
                      <div className="text-center">
                        <button
                          className="bg-[red]  px-3 py-1 text-white rounded-md hover:bg-[green]  "
                          onClick={() =>
                            navigate("/login", {
                              state: "/cart",
                            })
                          }
                        >
                          Plase Login to checkout
                        </button>
                      </div>
                    )}
                  </div>
                )}
                <div className="">
                  {!clientToken || !cart?.length ? (
                    ""
                  ) : (
                    <>
                      <DropIn
                        options={{
                          authorization: clientToken,
                          paypal: {
                            flow: "vault",
                          },
                        }}
                        onInstance={(instance) => setInstance(instance)}
                      />

                      <div className="text-center ">
                        <button
                          className="bg-[green] px-3 py-1.5 text-white rounded-lg"
                          onClick={handlePayment}
                          disabled={
                            loading || !instance || !auth?.user?.address
                          }
                        >
                          {loading ? "Processing ...." : "Make Payment"}
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
