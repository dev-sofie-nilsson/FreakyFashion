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
// upload.single("image") processes the uploaded image file before the route runs
router.post("/products/new", upload.single("image"), (req, res) => {
  const imagePath = `/images/${req.file.originalname}`;

  productService.addNewProduct(
    req.body.title,
    req.body.description,
    imagePath,
    req.body.brand,
    req.body.sku,
    parseInt(req.body.price),  // Converts price from string to integer
    parseInt(req.body.category),  // Converts category ID from string to integer
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
  categoryService.addNewCategory(newCategory);
  res.redirect("/admin/categories");
});

module.exports = router;
