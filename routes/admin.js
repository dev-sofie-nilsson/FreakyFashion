const express = require("express");
const router = express.Router();

// TODO: Make route dynamic
router.get("/", (req, res) => {
  res.render("admin", { title: "admin" });
});

module.exports = router;
