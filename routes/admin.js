const express = require("express");
const router = express.Router();

// TODO: Make route dynamic
router.get("/", (req, res) => {
  res.render("admin", { title: "admin" });
});

router.get("/categories", (req, res) => {
  res.render("admin-categories", { title: "Administration"})
});

router.get("/products/new", (req, res) => {
  res.render("new-products", { title: "Administration"})
});

module.exports = router;
