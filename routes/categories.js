const express = require("express");
const router = express.Router();
const productService = require("../services/productService");
const categoryService = require("../services/categoryService");

// e.g. /categories/jackets — "jackets" is the slug
router.get("/:slug", (req, res) => {
  const categorySlug = req.params.slug;
  const categories = categoryService.getAllCategories();
  const products = productService.getProductsByCategorySlug(categorySlug);

  res.render("categories", {
    title: "Categories",
    products,
    categories,
    categorySlug,
  });
});

module.exports = router;
