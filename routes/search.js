const express = require("express");
const router = express.Router();
const categoryService = require("../services/categoryService");

router.get("/", (req, res) => {
  const searchQuery = req.query.q;
  const categories = categoryService.getAllCategories();

  res.render("search", { title: "Search", searchQuery, categories });
});

module.exports = router;