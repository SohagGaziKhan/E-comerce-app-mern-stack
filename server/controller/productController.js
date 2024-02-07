import slugify from "slugify";
import Product from "../model/productModel.js";
import fs from "fs";
import braintree from "braintree";
import Order from "../model/orderModel.js";
import dotenv from "dotenv";
dotenv.config();

//payment gateway
var gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox,
  merchantId: process.env.BRAINTREE_MERCHANT_ID,
  publicKey: process.env.BRAINTREE_PUBLIC_KEY,
  privateKey: process.env.BRAINTREE_PRIVATE_KEY,
});

// create Product
export const createProductController = async (req, res) => {
  try {
    const {
      name,
      description,
      regularPrice,
      category,
      brand,
      productQuantity,
      productColor,
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
    const product = new Product({ ...req.fields, slug: slugify(name) });
    if (photo) {
      product.photo.data = fs.readFileSync(photo.path);
      product.photo.contentType = photo.type;
    }
    await product.save();
    res.status(201).send({
      success: true,
      message: "Product Created Successfully",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Create Product",
      error,
    });
  }
};

// update product
export const updateProductController = async (req, res) => {
  try {
    const {
      name,
      description,
      regularPrice,

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
    const product = await Product.findByIdAndUpdate(
      req.params.pid,
      {
        ...req.fields,
        slug: slugify(name),
      },
      { new: true }
    );
    if (photo) {
      product.photo.data = fs.readFileSync(photo.path);
      product.photo.contentType = photo.type;
    }
    await product.save();
    res.status(201).send({
      success: true,
      message: "Product Update Successfully",
      product,
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
export const getAllProdcutController = async (req, res) => {
  try {
    const product = await Product.find({})
      .select("-photo")
      .populate("category")
      .populate("brand")
      .limit(12)
      .sort({ createdAt: -1 });
    res.status(200).send({
      success: true,
      totalProducts: product.length,
      message: "All Products",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Get All Prodcut",
      error,
    });
  }
};

// get single product
export const getSingleProductController = async (req, res) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug })
      .select("-photo")
      .populate("category")
      .populate("brand");
    res.status(200).send({
      success: true,
      message: "Single Product Find Successfully",
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Single Product",
      error,
    });
  }
};

// delete product
export const deleteProdcutController = async (req, res) => {
  try {
    // await Product.findByIdAndDelete(req.params.pid).select("-photo");
    // res.status(200).send({
    //   success: true,
    //   message: "Product Deleted successfully",
    // });

    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Product Delete Successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting product",
      error,
    });
  }
};

// product photo
// export const productPhotoController = async (req, res) => {
//   try {
//     const product = await Product.findById(req.params.pid).select("photo");
//     if (product.photo.data) {
//       res.set("Content-type", product.photo.contentType);
//       return res.status(200).send(product.photo.data);
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(409).send({
//       success: false,
//       message: "Error in  Prodcut Photo",
//       error,
//     });
//   }
// };
export const productPhotoController = async (req, res) => {
  try {
    const product = await Product.findById(req.params.pid).select("photo");

    if (product && product.photo && product.photo.data) {
      res.set("Content-type", product.photo.contentType);
      return res.status(200).send(product.photo.data);
    } else {
      return res.status(404).send({
        success: false,
        message: "Product photo not found",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({
      success: false,
      message: "Error in Product Photo",
      error,
    });
  }
};

// product filter
export const productFilterController = async (req, res) => {
  try {
    const { checked, radio } = req.body;
    let args = {};
    if (checked.length > 0) args.category = checked;
    if (radio.length) args.price = { $gte: radio[0], $lte: radio[1] };
    const products = await Product.find(args);
    res.status(200).send({
      success: true,
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error WHile Filtering Products",
      error,
    });
  }
};

//product count controller
export const productCountController = async (req, res) => {
  try {
    const total = await Product.find({}).estimatedDocumentCount();
    res.status(200).send({
      success: true,
      message: "Product Count Successfully",
      total,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error in Product Count Pages",
      error,
    });
  }
};

// per pages product list
export const productPerPageController = async (req, res) => {
  try {
    const perPage = 6;
    const page = req.params.page ? req.params.page : 1;
    const products = await Product.find({})
      .select("-photo")
      .skip((page - 1) * perPage)
      .limit(perPage)
      .sort({ createdAt: -1 });
    res.status(200).send({
      success: true,
      products,
    });
  } catch (error) {
    console.log(error);
    res.status(401).send({
      success: false,
      message: "Error in Product per pages",
      error,
    });
  }
};

// search products controller
export const searchProductController = async (req, res) => {
  try {
    const { keyword } = req.params;
    const resutls = await Product.find({
      $or: [
        { name: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
      ],
    }).select("-photo");
    res.status(200).json(resutls);
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      message: "Error in Search Products Controller",
      error,
    });
  }
};

// similar product
export const similarProductController = async (req, res) => {
  try {
    const { pid, cid, bid } = req.params;
    const product = await Product.find({
      category: cid,
      brand: bid,
      _id: { $ne: pid }, //$ne that means Product id if same hole ta nibe na (not encluding) ta similar product add korba na
    })
      .select("-photo")
      .limit(12)
      .populate("category", "brand");

    res.status(200).send({
      success: true,
      product,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: true,
      message: "Error in Similar Product",
      error,
    });
  }
};

// payments with braintree and braintree token
// token
export const braintreeTokenController = async (req, res) => {
  try {
    gateway.clientToken.generate({}, function (err, response) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(response);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

// payment with braintree
// payment
// export const braintreePaymentController = async (req, res) => {
//   try {
//     const { nonce, cart } = req.body;
//     let total = 0;
//     cart.map((i) => {
//       total += i.price;
//     });
//     let newTransaction = gateway.transaction.sale(
//       {
//         amount: total,
//         paymentMethodNonce: nonce,
//         options: {
//           submitForSettlement: true,
//         },
//       },
//       function (error, result) {
//         if (result) {
//           const orders = new Order({
//             products: cart,
//             payment: result,
//             buyer: req.user?._id,
//           }).save();
//           res.status(200).send({
//             success: true,
//             orders,
//           });
//         } else {
//           res.status(500).send(error);
//         }
//       }
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };

export const braintreePaymentController = async (req, res) => {
  try {
    const { nonce, cart } = req.body;
    let total = 0;

    // Calculate total amount
    cart.forEach((item) => {
      total += item.price;
    });

    // Create a new transaction using Braintree
    gateway.transaction.sale(
      {
        amount: total,
        paymentMethodNonce: nonce,
        options: {
          submitForSettlement: true,
        },
      },
      async function (error, result) {
        if (result) {
          try {
            // Transaction successful, create a new order
            const order = new Order({
              products: cart,
              payment: result,
              buyer: req.user?._id,
              status: "Not Process", // Set default status
            });

            // Save the order to the database
            await order.save();

            res.status(200).json({
              success: true,
              order,
            });
          } catch (error) {
            console.error("Error saving order:", error);
            res.status(500).json({
              success: false,
              message: "Error saving order",
              error: error.message,
            });
          }
        } else {
          // Transaction failed, send error response
          res.status(500).json({
            success: false,
            message: "Transaction failed",
            error: error || "Unknown error",
          });
        }
      }
    );
  } catch (error) {
    console.error("Error in braintreePaymentController:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};
