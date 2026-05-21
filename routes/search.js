const express = require("express");
const router = express.Router();
const categoryService = require("../services/categoryService");
const productService = require("../services/productService");

router.get("/", (req, res) => {
  const searchQuery = req.query.q;  // e.g. /search?q=jacket
  const categories = categoryService.getAllCategories();

  const allProducts = productService.getProductsSearch();

  // Returns an empty array if no search query is provided
  const products = searchQuery
    ? allProducts.filter( (p) => (p.title && p.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (p.category_name && p.category_name.toLowerCase().includes(searchQuery.toLowerCase())),
      )
    : [];

  res.render("search", {
    title: "Sökresultat",
    searchQuery,
    categories,
    products,
  });
});

module.exports = router;
