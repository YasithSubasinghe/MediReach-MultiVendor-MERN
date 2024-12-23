const express = require("express");
const router = express.Router();
const { isAuthenticated, isAdmin, isSeller } = require("../middleware/auth");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const AdminProduct = require("../model/adminProduct");

// Add new product
router.post(
  "/add-product",
  isAuthenticated,
  isAdmin("Admin"),
  catchAsyncErrors(async (req, res, next) => {
    try {
      const { productName, unit } = req.body;

      if (!productName || !unit) {
        return res.status(400).json({ message: "All fields are required." });
      }

      const newProduct = await AdminProduct.create({
        productName,
        unit,
        productId: `P${Math.random().toString(36).substr(2, 9)}`,
      });

      res.status(201).json({ success: true, product: newProduct });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })
);

// // Get all products
// router.get(
//   "/get-products",
//   isAuthenticated,
//   isSeller,
//   catchAsyncErrors(async (req, res, next) => {
//     const products = await AdminProduct.find();
//     res.status(200).json({ success: true, products });
//   })
// );

module.exports = router;
