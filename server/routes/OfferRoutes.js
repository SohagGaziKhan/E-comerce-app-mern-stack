import express from "express";

import formidable from "express-formidable";
import { isAdmin, requireSignIn } from "../helper/authHelper.js";
import {
  createOffersProductController,
  deleteOffersProdcutController,
  getAllOffersProdcutController,
  getSingleOffersProductController,
  offersProductPhotoController,
  updateOffersProductController,
} from "../controller/offerController.js";

const router = express.Router();

//offers  create in post methods
router.post(
  "/create-offer-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createOffersProductController
);

//offers get all offers in get methods
router.get("/get-offers-products", getAllOffersProdcutController);

//offers get single offers in get methods
router.get(
  "/get-single-offers-product/:slug",
  getSingleOffersProductController
);

//offers update offers in put methods
router.put(
  "/update-offer-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateOffersProductController
);

//offers delete offers in delete methods
router.delete(
  "/delete-offers-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  deleteOffersProdcutController
);

//offers product photo
router.get("/offer-product-photo/:pid", offersProductPhotoController);

export default router;
