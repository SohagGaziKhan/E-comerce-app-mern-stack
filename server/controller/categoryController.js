import { accessSync } from "fs";
import Categroy from "../model/categoryModel.js";
import slugify from "slugify";

// create category
export const createCategoyController = async (req, res) => {
  try {
    const { name } = req.body;
    // validation
    if (!name) {
      return res.status(401).send({ message: "Name is Required" });
    }
    // if this category is already database
    const existingCategory = await Categroy.findOne({ name });
    if (existingCategory) {
      return res.status(200).send({
        success: true,
        message: "Category Already Exisits",
      });
    }
    // or if this catrgory not database then
    const category = await new Categroy({ name, slug: slugify(name) }).save();
    res.status(201).send({
      success: true,
      message: "Category is Created Successfully",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Category",
      error,
    });
  }
};

// update category
export const updetaCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const updateCategory = await Categroy.findByIdAndUpdate(
      id,
      { name, slug: slugify(name) },
      { new: true }
    ); //if i not use {new,true} paremiter category is not update
    res.status(200).send({
      success: true,
      message: "Category Update Successfully",
      updateCategory,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Update Category",
      error,
    });
  }
};

// get all category
export const categoryController = async (req, res) => {
  try {
    const categroy = await Categroy.find({});
    res.status(200).send({
      success: true,
      message: "All Categories List",
      categroy,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Get All Categories",
      error,
    });
  }
};

// single category
export const singleCategoryController = async (req, res) => {
  try {
    const category = await Categroy.findOne({ slug: req.params.slug });
    res.status(200).send({
      success: true,
      message: "Get A Single Category",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Single Category",
      error,
    });
  }
};

// delete category
export const deleteCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    await Categroy.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Category Delete Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Delete Category",
      error,
    });
  }
};
