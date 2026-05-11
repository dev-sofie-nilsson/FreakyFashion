const db = require("../data/data.js");

function getAllProducts() {
  return db.prepare("SELECT * FROM products").all();
}

function getProductsByCategory(id) {
  return db.prepare("SELECT * FROM products WHERE category_id = ?").all(id);
}

module.exports = {
  getAllProducts,
  getProductsByCategory,
};
