const express = require("express");
const router = express.Router();
const productService = require("../services/productService");
const categoryService = require("../services/categoryService");

router.get("/:categoryName", (req, res) => {
  const categoryName = req.params.categoryName;
  const categories = categoryService.getAllCategories();
  const currentCategory = categories.find(
    (category) => category.slug === categoryName,
  );

  const categoryId = currentCategory.id;

  const products = productService.getProductsByCategory(categoryId);

  res.render("categories", {
    title: "Categories",
    products,
    categories,
    categoryName,
  });
});

module.exports = router;
