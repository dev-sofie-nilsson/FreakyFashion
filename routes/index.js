const express = require('express');
const router = express.Router();
const categoryService = require("../services/categoryService");
const productService = require("../services/productService");

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const categories = await categoryService.getAllCategories();
    const products = productService.getAllProducts();

    res.render('index', {
      title: 'Home',
      categories: categories,
      products: products
    });

  } catch (error) {
    console.error("ERROR:", error);
    res.status(500).send(error.message);
  }
});

module.exports = router;