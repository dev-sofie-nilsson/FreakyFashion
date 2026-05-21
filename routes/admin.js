const express = require("express");
const router = express.Router();
const productService = require("../services/productService");
const categoryService = require("../services/categoryService");
const upload = require("../middleware/upload");

router.get("/", (req, res) => {
  res.render("admin", { title: "admin" });
});

router.get("/categories", (req, res) => {
  try {
    const categories = categoryService.getAllCategories();
    res.render("admin-categories", {
      title: "Administration",
      layout: "layouts/admin-layout",
      categories,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server error");
  }
});

router.get("/products/new", (req, res) => {
  const categories = categoryService.getAllCategories();
  res.render("admin-products-new", {
    title: "Administration",
    layout: "layouts/admin-layout",
    categories,
  });
});

router.post("/products/new", upload.single("image"), (req, res) => {
  const imagePath = `/images/${req.file.originalname}`;

  productService.addNewProduct(
    req.body.title,
    req.body.description,
    imagePath,
    req.body.brand,
    req.body.sku,
    parseInt(req.body.price),
    parseInt(req.body.category),
  );
  res.redirect("/admin/products")
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
  if (!newCategory || newCategory.trim().length === 0) {
    return res.status(400).render("admin-categories-new", {
      title: "Administration",
      layout: "layouts/admin-layout",
      error: "Namnet får inte vara tomt.",
    });
  }

  if (newCategory.length > 25) {
    return res.status(400).render("admin-categories-new", {
      title: "Administration",
      layout: "layouts/admin-layout",
      error: "Namnet får max vara 25 tecken.",
    });
  }

  categoryService.addNewCategory(newCategory);
  res.redirect("/admin/categories");
});

module.exports = router;
