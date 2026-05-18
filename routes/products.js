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
  // TODO: Remove getAllProducts()?
  const categories = categoryService.getAllCategories();
  const products = productService.getAllProducts();
  const productDetails = productService.getProductBySlug(req.params.slug);
  const similarProducts = productService
    .getProductsByCategory(productDetails.category_id)
    .filter((prod) => productDetails.id !== prod.id);
  console.log("Similar products after filter: ", similarProducts)
  res.render("product-details", {
    title: "Product details",
    categories,
    products,
    productDetails,
    similarProducts,
  });
});

module.exports = router;
