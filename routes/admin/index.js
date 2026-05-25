const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("admin", {
    title: "Administration",
    layout: "layouts/admin-layout",
    activePage: null,
  });
});

module.exports = router;
