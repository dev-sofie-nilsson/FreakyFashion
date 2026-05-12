const express = require("express");
const router = express.Router();
const categoryService = require("../services/categoryService");
const productService = require("../services/productService");

router.get("/", (req, res) => {
  const categories = categoryService.getAllCategories();
  const products = productService.getAllProducts();
  res.render("product-details", {
    title: "Product details",
    categories,
    products,
  });
});

module.exports = router;
