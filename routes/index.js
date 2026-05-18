const express = require('express');
const router = express.Router();
const categoryService = require("../services/categoryService");
const productService = require("../services/productService");
const heroService = require("../services/heroService");
/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const categories = await categoryService.getAllCategories();
    const products = await productService.getAllProducts();
    const hero = await heroService.getHero();

    console.log("Hero returns: ", hero)
    
    res.render('index', {
      title: 'Home',
      categories: categories,
      products: products,
      hero: hero,
    });

  } catch (error) {
    console.error("ERROR:", error);
    res.status(500).send(error.message);
  }
});

module.exports = router;