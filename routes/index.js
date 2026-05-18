const express = require('express');
const router = express.Router();
const categoryService = require("../services/categoryService");
const productService = require("../services/productService");

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const categories = await categoryService.getAllCategories();
    const products = await productService.getAllProducts();

const hero = {
  title: "Mode som slår hårt – precis som din stil!",
  description: "Vare sig du letar efter kläder som får folk att vända sig om, smycken som glittrar starkare än dina framtidsplaner eller skor som klarar både catwalk och vardagskaos – vi har det du behöver. Välkommen till mode på dina villkor!",
  image: "/images/hero.png"
};
    
    res.render('index', {
      title: 'Home',
      categories: categories,
      products: products,
      hero: hero
    });

  } catch (error) {
    console.error("ERROR:", error);
    res.status(500).send(error.message);
  }
});

module.exports = router;