const express = require("express");
const router = express.Router();
const productService = require("../services/productService");

/* GET home page. */
router.get("/", function (req, res, next) {
  const products = productService.getAllProducts();
  res.render("index", { title: "Express", products: products });
});

module.exports = router;
