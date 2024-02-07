// import React, { useEffect, useState } from "react";
// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";
// import Profile from "../Profile";
// import axios from "axios";
// import { useAuth } from "../../context/auth";
// // import moment from "moment";

// const UserOrder = () => {
//   const [order, setOrder] = useState([]);
//   const [auth] = useAuth();

//   // get all order in user
//   const getOrders = async () => {
//     try {
//       const { data } = await axios.get(
//         "http://localhost:3030/api/v1/order/user/orders"
//       );
//       setOrder(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     if (auth?.token) getOrders();
//   }, [auth?.token]);

//   return (
//     <div>
//       <div>
//         <Navbar />
//         <div>
//           <div>
//             <Profile />
//           </div>
//           <div className="max-w-[1140px] mx-auto ">
//             <div>
//               <h1 className="text-center py-4 text-2xl font-light">
//                 All Order{" "}
//               </h1>
//               <p>{JSON.stringify(order, null, 4)}</p>

//               {/* {order?.map((o, i) => {
//                 return (
//                   <div className="border shadow">
//                     <table className="table">
//                       <thead>
//                         <tr>
//                           <th scope="col">#</th>
//                           <th scope="col">Status</th>
//                           <th scope="col">Buyer</th>
//                           <th scope="col"> date</th>
//                           <th scope="col">Payment</th>
//                           <th scope="col">Quantity</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         <tr>
//                           <td>{i + 1}</td>
//                           <td>{o?.status}</td>
//                           <td>{o?.buyer?.name}</td>
//                           <td>{moment(o?.createAt).fromNow()}</td>
//                           <td>{o?.payment.success ? "Success" : "Failed"}</td>
//                           <td>{o?.products?.length}</td>
//                         </tr>
//                       </tbody>
//                     </table>
//                     <div className="container">
//                       {o?.products?.map((p, i) => (
//                         <div className="row mb-2 p-3 card flex-row" key={p._id}>
//                           <div className="col-md-4">
//                             <img
//                               src={`/api/v1/product/product-photo/${p._id}`}
//                               className="card-img-top"
//                               alt={p.name}
//                               width="100px"
//                               height={"100px"}
//                             />
//                           </div>
//                           <div className="col-md-8">
//                             <p>{p.name}</p>
//                             <p>{p.description.substring(0, 30)}</p>
//                             <p>Price : {p.price}</p>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 );
//               })} */}
//             </div>
//           </div>
//         </div>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// // const UserOrder = () => {
// //   const [orders, setOrders] = useState([]); // Changed variable name for clarity
// //   const [auth] = useAuth();

// //   // get all orders for the user
// //   const getOrders = async () => {
// //     try {
// //       const response = await axios.get(
// //         "http://localhost:3030/api/v1/order/user/orders"
// //       );
// //       setOrders(response.data?.orders || []); // Ensure that data exists and provide a default value
// //     } catch (error) {
// //       console.error("Error fetching orders:", error);
// //     }
// //   };

// //   useEffect(() => {
// //     if (auth?.token) {
// //       getOrders();
// //     }
// //   }, [auth?.token]);

// //   console.log(orders);

// //   return (
// //     <div>
// //       <Navbar />
// //       <div className="max-w-[1140px] mx-auto">
// //         <Profile />
// //         <div>
// //           <h1 className="text-center py-4 text-2xl font-light">All Orders</h1>
// //           {orders?.length === 0 ? (
// //             <p>No orders found.</p>
// //           ) : (
// //             <table>
// //               <thead>
// //                 <tr>
// //                   <th>S/N</th>
// //                   <th>Status</th>
// //                   <th>Buyer</th>
// //                   <th>Orders</th>
// //                   <th>Payment</th>
// //                   <th>Quantity</th>
// //                 </tr>
// //               </thead>
// //               <tbody>
// //                 {orders.map((o, i) => (
// //                   <tr key={i}>
// //                     <td>{i + 1}</td>
// //                     <td>{o?.status}</td>
// //                     <td>{o?.buyer?.name}</td>
// //                     <td>{/* Display order details here */}</td>
// //                     <td>{o?.payment.success ? "Success" : "Failed"}</td>
// //                     <td>{o?.products?.length}</td>{" "}
// //                     {/* Corrected property name */}
// //                   </tr>
// //                 ))}
// //               </tbody>
// //             </table>
// //           )}
// //         </div>
// //       </div>
// //       <Footer />
// //     </div>
// //   );
// // };

// export default UserOrder;

// import React, { useEffect, useState } from "react";
// import Navbar from "../../components/Navbar";
// import Footer from "../../components/Footer";
// import Profile from "../Profile";
// import axios from "axios";
// import { useAuth } from "../../context/auth";
// import moment from "moment";

// const UserOrder = () => {
//   const [orders, setOrders] = useState([]);
//   const [auth] = useAuth();

//   // get all orders for the user
//   const getOrders = async () => {
//     try {
//       const { data } = await axios.get(
//         "http://localhost:3030/api/v1/auth/user-orders"
//       );
//       setOrders(data?.order);
//       console.log(data);
//     } catch (error) {
//       console.error("Error fetching orders:", error);
//     }
//   };

//   useEffect(() => {
//     if (auth?.token) {
//       getOrders();
//     }
//   }, [auth?.token]);

//   return (
//     <div>
//       <Navbar />
//       <div className="max-w-[1140px] mx-auto">
//         <Profile />
//         <div>
//           <h1 className="text-center py-4 text-2xl font-light">All Orders</h1>
//           <p> {JSON.stringify(orders, null, 4)}</p>
//           {/* {orders?.length === 0 ? (
//             <p>No orders found.</p>
//           ) : (
//             <div>
//               {orders.map((order, index) => (
//                 <div key={index} className="my-4 border p-4">
//                   <h2>Order #{index + 1}</h2>
//                   <p>Status: {order.status}</p>
//                   <p>Buyer: {order.buyer.name}</p>
//                   <p>
//                     Date:{" "}
//                     {moment(order.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
//                   </p>
//                   <p>Payment: {order.payment.success ? "Success" : "Failed"}</p>
//                   <p>Quantity: {order.products.length}</p>
//                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//                     {order.products.map((product, i) => (
//                       <div key={i} className="border p-2">
//                         <img
//                           src={`http://localhost:3030/api/v1/product/product-photo/${product._id}`}
//                           alt={product.name}
//                           className="w-full h-32 object-cover"
//                         />
//                         <p>Name: {product.name}</p>
//                         <p>Description: {product.description}</p>
//                         <p>Price: {product.price}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )} */}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default UserOrder;

import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Profile from "../Profile";
import axios from "axios";
import { useAuth } from "../../context/auth";
import moment from "moment";

const UserOrder = () => {
  const [orders, setOrders] = useState([]);
  const [auth] = useAuth();

  // get all orders for the user
  const getOrders = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3030/api/v1/auth/user-orders"
      );
      setOrders(data?.order); // Update to correctly access the order data
      console.log(data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  useEffect(() => {
    if (auth?.token) {
      getOrders();
    }
  }, [auth?.token]);

  return (
    <div>
      <Navbar />
      <div className="max-w-[1140px] mx-auto">
        <Profile />
        <div>
          <h1 className="text-center py-4 text-2xl font-light">All Orders</h1>
          {orders?.length === 0 ? (
            <p>No orders found.</p>
          ) : (
            <div>
              {orders?.map((order, index) => (
                <div key={index} className="my-4 border p-4">
                  <h2>Order #{index + 1}</h2>
                  <p>Status: {order.status}</p>
                  <p>Buyer: {order.buyer.name}</p>
                  <p>
                    Date:{" "}
                    {moment(order.createdAt).format("MMMM Do YYYY, h:mm:ss a")}
                  </p>
                  <p>Payment: {order.payment.success ? "Success" : "Failed"}</p>
                  <p>Quantity: {order.products.length}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {order?.products?.map((product, i) => (
                      <div key={i} className="border p-2">
                        <img
                          src={`http://localhost:3030/api/v1/product/product-photo/${product._id}`}
                          alt={product.name}
                          className="w-full h-32 object-cover"
                        />
                        <p>Name: {product.name}</p>
                        <p>Description: {product.description}</p>
                        <p>Price: {product.price}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserOrder;
