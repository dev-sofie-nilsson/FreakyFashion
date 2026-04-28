const express = require("express");
const router = express.Router();

// TODO: Make route dynamic
router.get("/", (req, res) => {
  res.render("product-details", { title: "Product details" });
});

module.exports = router;
