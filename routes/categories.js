const express = require("express");
const router = express.Router();
const productService = require("../services/productService");
const categoryService = require("../services/categoryService");

router.get("/:name", (req, res) => {
  const name = req.params.name;
  const categories = categoryService.getAllCategories();
  const products = productService.getAllProducts();

  res.render("categories", {
    title: "Categories",
    products,
    categories,
  });
});

module.exports = router;
