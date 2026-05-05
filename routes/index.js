var express = require('express');
var router = express.Router();
const categoryService = require("../services/categoryService");

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const categories = await categoryService.getAllCategories();

    res.render('index', {
      title: 'Home',
      categories: categories
    });

  } catch (error) {
    console.error("ERROR:", error);
    res.status(500).send(error.message);
  }
});

module.exports = router;