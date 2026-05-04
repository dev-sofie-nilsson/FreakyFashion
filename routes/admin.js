const express = require("express");
const router = express.Router();

// TODO: Make route dynamic
router.get("/", (req, res) => {
  res.render("admin", { title: "admin" });
});

router.get("/categories", (req, res) => {
  res.render("admin-categories", {
    title: "Administration",
    layout: "layouts/admin-layout",
  });
});

router.get("/products", (req, res) => {
  res.render("admin-products", {
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

router.get("/categories/new", (req, res) => {
  res.render("admin-categories-new", {
    title: "Administration",
    layout: "layouts/admin-layout",
  });
});

module.exports = router;
