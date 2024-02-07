import Order from "../model/orderModel.js";
//  user all orders
export const allOrderController = async (req, res) => {
  try {
    const orders = await Order.find({ buyer: req.user?._id })
      .populate("products", "-photo")
      .populate("buyer", "name");
    res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error WHile Geting Orders",
      error,
    });
  }
};

//   admin all orders
// export const allAdminOrderController = async (req, res) => {
//   try {
//     const orders = await Order.find({})
//       .populate("products", "-photo")
//       .populate("buyer", "name")
//       .sort({ createdAt: "-1" });
//     res.json(orders);
//   } catch (error) {
//     console.log(error);
//     res.status(500).send({
//       success: false,
//       message: "Error in Admin Orders",
//       error,
//     });
//   }
// };
export const allAdminOrderController = async (req, res) => {
  try {
    const orders = await Order.find({})
      .populate("products", "-photo")
      .populate("buyer", "name")
      .sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error in Admin Orders",
      error: error.message,
    });
  }
};
