import BrandName from "../model/brandModel.js";
import slugify from "slugify";
// create brand
export const createBrandController = async (req, res) => {
  try {
    const { name } = req.body;
    // validation
    if (!name) {
      return res.status(401).send({
        message: "B-Name is Required",
      });
    }
    //existing category in database
    const existingCategory = await BrandName.findOne({ name });
    if (existingCategory) {
      return res.status(200).send({
        success: false,
        message: "Brand Already Exisiting",
      });
    }

    const brand = await BrandName({ name, slug: slugify(name) }).save();
    res.status(201).send({
      success: true,
      message: "Brand Create Successfully",
      brand,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Create Brand Controller",
      error,
    });
  }
};

// update Brand
export const updataBrandController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const updateBrand = await BrandName.findByIdAndUpdate(
      id,
      { name, slug: slugify(name) },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Brand Update Successfully",
      updateBrand,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: true,
      message: "Error in Update Brand ",
      error,
    });
  }
};

// delete brand
export const deleteBrandController = async (req, res) => {
  try {
    const { id } = req.params;
    await BrandName.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Brand Delete Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: true,
      message: "Error in Delete Brand",
      error,
    });
  }
};

// get all brand
export const getAllBrandController = async (req, res) => {
  try {
    const brand = await BrandName.find({});
    res.status(200).send({
      success: true,
      message: "All Brands List",
      brand,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Get All Brand",
      error,
    });
  }
};

// get single brand
export const getSingleBrandController = async (req, res) => {
  try {
    const brand = await BrandName.findOne({ slug: req.params.slug });
    res.status(200).send({
      success: true,
      message: "Get A Single Category",
      brand,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Get Single Brand",
      error,
    });
  }
};
