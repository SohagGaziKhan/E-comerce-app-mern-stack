import express from "express";
import { isAdmin, requireSignIn } from "../helper/authHelper.js";
import {
  createBrandController,
  deleteBrandController,
  getAllBrandController,
  getSingleBrandController,
  updataBrandController,
} from "../controller/brandController.js";

const router = express.Router();

// create brand in post mothods
router.post("/create-brand", requireSignIn, isAdmin, createBrandController);

// update brand in put methods
router.put("/update-brand/:id", requireSignIn, isAdmin, updataBrandController);

// delete brand in delete methods
router.delete(
  "/delete-brand/:id",
  requireSignIn,
  isAdmin,
  deleteBrandController
);

// get all brand
router.get("/gets-brand", getAllBrandController);

// get single brand
router.get("/getSingle-brand/:slug", getSingleBrandController);
export default router;
