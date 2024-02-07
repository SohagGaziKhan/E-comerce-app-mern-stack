import express from "express";
import {
  deleteUserController,
  getAllUserController,
  updateUserController,
} from "../controller/userController.js";
import { isAdmin, requireSignIn } from "../helper/authHelper.js";
const router = express.Router();

// get all user
router.get("/get-all-users", getAllUserController);

// get single user
// router.get("/single-user/aid");

// update user for admin
// router.put("/update-user-admin", requireSignIn, isAdmin, updateUserController);

// delete user
router.delete("/delete-user/:id", requireSignIn, isAdmin, deleteUserController);

export default router;
