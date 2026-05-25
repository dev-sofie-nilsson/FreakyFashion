const express = require("express");
const router = express.Router();
const productService = require("../../services/productService");
const categoryService = require("../../services/categoryService");
const validateInput = require("../../middleware/validateInput");

router.get("/", (req, res) => {
  try {
    const categories = categoryService.getAllCategories();
    res.render("admin-categories", {
      title: "Administration",
      layout: "layouts/admin-layout",
      categories,
      activePage: "categories",
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

router.get("/new", (req, res) => {
  res.render("admin-categories-new", {
    title: "Administration",
    layout: "layouts/admin-layout",
    activePage: "categories",
  });
});

router.post("/new", validateInput, (req, res) => {
  if (req.nameError) {
    return res.status(400).render("admin-categories-new", {
      title: "Administration",
      layout: "layouts/admin-layout",
      activePage: "categories",
      nameError: req.nameError,
    });
  }

  const newCategory = req.body.name;
  categoryService.addNewCategory(newCategory);
  res.redirect("/admin/categories");
});

module.exports = router;
