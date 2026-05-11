const express = require("express");
const router = express.Router();
const productService = require("../services/productService");
const { addNewCategory } = require("../services/categoryService");

router.get("/", (req, res) => {
  res.render("admin", { title: "admin" });
});

router.get("/categories", (req, res) => {
  res.render("admin-categories", {
    title: "Administration",
    layout: "layouts/admin-layout",
  });
});

router.get("/products/new", (req, res) => {
  res.render("admin-products-new", {
    title: "Administration",
    layout: "layouts/admin-layout",
  });
});

router.get("/products", (req, res) => {
  try {
    const products = productService.getAllProducts();
    res.render("admin-products", {
      title: "Administration",
      layout: "layouts/admin-layout",
      products,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

router.get("/categories/new", (req, res) => {
  res.render("admin-categories-new", {
    title: "Administration",
    layout: "layouts/admin-layout",
  });
});

router.post("/categories/new", (req, res) => {
  const newCategory = req.body.namn;
  addNewCategory(newCategory);
  res.redirect("/admin/categories");
});

module.exports = router;
