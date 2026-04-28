const express = require("express");
const router = express.Router();

// TODO: Make route dynamic
router.get("/", (req, res) => {
  res.render("categories", { title: "categories" });
});

module.exports = router;
