import express from "express";
import {
  forgotPasswordController,
  loginController,
  registerController,
  updateAdminProfileController,
  updateProfileController,
} from "../controller/authController.js";
import { isAdmin, requireSignIn } from "../helper/authHelper.js";
import { allOrderController } from "../controller/orderController.js";

const router = express.Router();
// register in post method
router.post("/register", registerController);
// login in post method
router.post("/login", loginController);

// forgot-password post methods
router.post("/forgot-password", forgotPasswordController);

// protected routes for user
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

// protected routes for admin
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

// updata user profile
// router.put("/update-profile", requireSignIn, updateProfileController);

// updata Admin profile
router.put(
  "/update-admin-profile",
  requireSignIn,
  isAdmin,
  updateAdminProfileController
);

export default router;
