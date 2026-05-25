const express = require("express");
const router = express.Router();
const productService = require("../services/productService");
const categoryService = require("../services/categoryService");
const upload = require("../middleware/upload");
const validateInput = require("../middleware/validateInput");

router.get("/", (req, res) => {
  res.render("admin", { title: "admin" });
});

router.get("/products", (req, res) => {
  try {
    const products = productService.getAllProducts();
    res.render("admin-products", {
      title: "Administration",
      layout: "layouts/admin-layout",
      products,
      activePage: "products",
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
    activePage: "products",
  });
});

// upload.single("image") processes the uploaded image file before the route runs
router.post(
  "/products/new",
  upload.single("image"),
  validateInput,
  (req, res) => {
    const categories = categoryService.getAllCategories();
    const nameError = req.nameError;
    const fileError = !req.file ? "Måste välja en fil." : null;

    if (nameError || fileError) {
      return res.status(400).render("admin-products-new", {
        title: "Administration",
        layout: "layouts/admin-layout",
        categories,
        activePage: "products",
        nameError,
        fileError,
      });
    }

    const imagePath = `/images/${req.file.originalname}`;

    productService.addNewProduct(
      req.body.name,
      req.body.description,
      imagePath,
      req.body.brand,
      req.body.sku,
      parseInt(req.body.price), // Converts price from string to integer
      parseInt(req.body.category), // Converts category ID from string to integer
    );
    res.redirect("/admin/products");
  },
);

router.get("/categories", (req, res) => {
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

router.get("/categories/new", (req, res) => {
  res.render("admin-categories-new", {
    title: "Administration",
    layout: "layouts/admin-layout",
    activePage: "categories",
  });
});

router.post("/categories/new", validateInput, (req, res) => {
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
