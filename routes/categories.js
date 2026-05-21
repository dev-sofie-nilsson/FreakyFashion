const express = require("express");
const router = express.Router();
const productService = require("../services/productService");
const categoryService = require("../services/categoryService");

//category name "Kläder" becomes "klader" as a slug. /categories/klader
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
