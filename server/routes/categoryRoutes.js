import express from "express";
import { isAdmin, requireSignIn } from "../helper/authHelper.js";
import {
  categoryController,
  createCategoyController,
  deleteCategoryController,
  singleCategoryController,
  updetaCategoryController,
} from "../controller/categoryController.js";
import { resourceUsage } from "process";
const router = express.Router();

// create category post methods
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoyController
);

// update category by post mothods
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updetaCategoryController
);

// get all category by get methods
router.get("/gets-category", categoryController);

// get single category by get methods
router.get("/single-category/:slug", singleCategoryController);

// delete category by delete mothods
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryController
);
export default router;
