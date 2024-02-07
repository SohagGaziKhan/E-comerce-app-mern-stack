import express from "express";
import { isAdmin, requireSignIn } from "../helper/authHelper.js";
import {
  allAdminOrderController,
  allOrderController,
} from "../controller/orderController.js";
const router = express.Router();
// user all order
router.get("/user-orders", requireSignIn, allOrderController);
// admin all order
router.get("/admin-orders", requireSignIn, isAdmin, allAdminOrderController);

export default router;
