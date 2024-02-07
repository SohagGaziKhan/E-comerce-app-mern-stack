// controllers/couponController.js
// const Coupon = require("../models/CouponModel");
import Coupon from "../model/couponModel";

exports.validateCoupon = async (req, res) => {
  const { couponCode } = req.body;

  try {
    const coupon = await Coupon.findOne({ code: couponCode });

    if (!coupon) {
      return res.status(404).json({ error: "Invalid coupon code" });
    }

    if (new Date() > coupon.expiryDate) {
      return res.status(400).json({ error: "Coupon has expired" });
    }

    return res.json({ success: true, discount: coupon.discount });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
