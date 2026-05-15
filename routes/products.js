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

router.get("/:slug", (req, res) => {
  const categories = categoryService.getAllCategories();
  const product = productService.getProductBySlug(req.params.slug);
  const similarProducts = productService.getProductsByCategory(product.category_id);
  res.render("product-details", {
    title: product.title,
    categories,
    product,
    products: similarProducts
  });
});

module.exports = router;
