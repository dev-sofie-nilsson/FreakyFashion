const express = require("express");
const router = express.Router();
const productService = require("../../services/productService");
const categoryService = require("../../services/categoryService");
const upload = require("../../middleware/upload");
const validateInput = require("../../middleware/validateInput");

router.get("/", (req, res) => {
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

router.get("/new", (req, res) => {
  const categories = categoryService.getAllCategories();
  res.render("admin-products-new", {
    title: "Administration",
    layout: "layouts/admin-layout",
    categories,
    activePage: "products",
  });
});

// upload.single("image") processes the uploaded image file before the route runs
router.post("/new", upload.single("image"), validateInput, (req, res) => {
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
});

module.exports = router;
