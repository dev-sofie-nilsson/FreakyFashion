const db = require("../data/data.js");

function getAllCategories() {
  const stmt = db.prepare("SELECT * FROM categories");
  return stmt.all();
}

module.exports = { getAllCategories };
