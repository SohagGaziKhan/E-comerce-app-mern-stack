import slugify from "slugify";

import fs from "fs";
import Offer from "../model/offerModel.js";

// create Product
export const createOffersProductController = async (req, res) => {
  try {
    const {
      name,
      description,
      regularPrice,
      discountPrice,
      category,
      brand,
      productQuantity,
      productColor,
      shipping,
    } = req.fields;
    const { photo } = req.files;
    // validation
    if (!name) {
      return res.status(500).send({ message: "Name is Required" });
    }

    if (!description) {
      return res.status(500).send({ message: "Description is Required" });
    }
    if (!regularPrice) {
      return res.status(500).send({ message: "Regular Price is Required" });
    }
    if (!discountPrice) {
      return res.status(500).send({ message: "Discount Price is Required" });
    }
    if (!category) {
      return res.status(500).send({ message: "Category is Required" });
    }
    if (!brand) {
      return res.status(500).send({ message: "Brand is Required" });
    }
    if (!productQuantity) {
      return res.status(500).send({ message: "Product Quantity is Required" });
    }
    if (!productColor) {
      return res.status(500).send({ message: "Product Color is Required" });
    }
    if (photo && photo.size > 1000000) {
      return res
        .status(500)
        .send({ message: "Photo is Required and Should be less then 1 MB" });
    }
    const offers = new Offer({ ...req.fields, slug: slugify(name) });
    if (photo) {
      offers.photo.data = fs.readFileSync(photo.path);
      offers.photo.contentType = photo.type;
    }
    await offers.save();
    res.status(201).send({
      success: true,
      message: "Offers Created Successfully",
      offers,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Create Offers Product",
      error,
    });
  }
};

// update product
export const updateOffersProductController = async (req, res) => {
  try {
    const {
      name,
      description,
      regularPrice,
      discountPrice,
      category,
      brand,
      productQuantity,
      productColor,
      shipping,
    } = req.fields;
    const { photo } = req.files;
    // validation
    if (!name) {
      return res.status(500).send({ message: "Name is Required" });
    }

    if (!description) {
      return res.status(500).send({ message: "Description is Required" });
    }
    if (!regularPrice) {
      return res.status(500).send({ message: "Regular Price is Required" });
    }
    if (!discountPrice) {
      return res.status(500).send({ message: "Discount Price is Required" });
    }
    if (!category) {
      return res.status(500).send({ message: "Category is Required" });
    }
    if (!brand) {
      return res.status(500).send({ message: "Brand is Required" });
    }
    if (!productQuantity) {
      return res.status(500).send({ message: "Product Quantity is Required" });
    }
    if (!productColor) {
      return res.status(500).send({ message: "Product Color is Required" });
    }
    if (photo && photo.size > 1000000) {
      return res
        .status(500)
        .send({ message: "Photo is Required and Should be less then 1 MB" });
    }
    const offers = await Offer.findByIdAndUpdate(
      req.params.pid,
      {
        ...req.fields,
        slug: slugify(name),
      },
      { new: true }
    );
    if (photo) {
      offers.photo.data = fs.readFileSync(photo.path);
      offers.photo.contentType = photo.type;
    }
    await offers.save();
    res.status(201).send({
      success: true,
      message: "Offers Update Successfully",
      offers,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Update Product",
      error,
    });
  }
};

// get all product
export const getAllOffersProdcutController = async (req, res) => {
  try {
    const offers = await Offer.find({})
      .select("-photo")
      .populate("category")
      .populate("brand")
      .limit(12)
      .sort({ createdAt: -1 });
    res.status(200).send({
      success: true,
      totalProducts: offers.length,
      message: "All Offers get Successfylly",
      offers,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Get All Offers",
      error,
    });
  }
};

// get single product
export const getSingleOffersProductController = async (req, res) => {
  try {
    const offers = await Offer.findOne({ slug: req.params.slug })
      .select("-photo")
      .populate("category")
      .populate("brand");
    res.status(200).send({
      success: true,
      message: "Single Offers Find Successfully",
      offers,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Single Offers",
      error,
    });
  }
};

// delete product
export const deleteOffersProdcutController = async (req, res) => {
  try {
    await Offer.findByIdAndDelete(req.params.pid).select("-photo");
    res.status(200).send({
      success: true,
      message: "Offers Delete Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Delete Offers",
      error,
    });
  }
};

// product photo
export const offersProductPhotoController = async (req, res) => {
  try {
    const offers = await Offer.findById(req.params.pid).select("photo");
    if (offers?.photo.data) {
      res.set("Content-type", offers?.photo.contentType);
      return res.status(200).send(offers?.photo.data);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in  Offers Photo",
      error,
    });
  }
};
