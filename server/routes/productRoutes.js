import express from "express";
import { isAdmin, requireSignIn } from "../helper/authHelper.js";
import {
  braintreePaymentController,
  braintreeTokenController,
  createProductController,
  deleteProdcutController,
  getAllProdcutController,
  getSingleProductController,
  productCountController,
  productFilterController,
  productPerPageController,
  productPhotoController,
  searchProductController,
  similarProductController,
  updateProductController,
} from "../controller/productController.js";
import formidable from "express-formidable";
const router = express.Router();

// product create in post methods
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

// get all product in get methods
router.get("/get-all-product", getAllProdcutController);

// get single prodcut in get methods
router.get("/get-single-product/:slug", getSingleProductController);

// update product in put methods
router.put(
  "/update-product/:id",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

// delete product in delete methods
router.delete(
  "/delete-product/:id",
  requireSignIn,
  isAdmin,
  deleteProdcutController
);

// product photo
router.get("/product-photo/:pid", productPhotoController);

// filter prodcut
router.post("/product-filter", productFilterController);

// product count
router.get("/product-count", productCountController);

// product per pages
router.get("/product-per-pages/:page", productPerPageController);

// search product
router.get("/search/:keyword", searchProductController);

// smilar product by category and brand
router.get("/related-product/:pid/:cid/:bid", similarProductController);

// payments routes with braintree token
router.get("/braintree/token", braintreeTokenController);

// payments
router.post("/braintree/payment", braintreePaymentController);
export default router;
