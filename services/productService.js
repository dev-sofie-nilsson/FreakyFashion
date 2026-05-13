const db = require("../data/data.js");

function getAllProducts() {
  return db.prepare(`
    SELECT products.*, categories.name AS category_name
    FROM products
    JOIN categories ON products.category_id = categories.id
  `).all();
}

function getProductsByCategory(id) {
  return db.prepare("SELECT * FROM products WHERE category_id = ?").all(id);
}

function getProductBySlug(slug) {
  return db.prepare("SELECT products.*, categories.name AS category_name FROM products JOIN categories ON products.category_id = categories.id WHERE products.slug = ?").get(slug);
}
module.exports = {
  getAllProducts,
  getProductsByCategory,
  getProductBySlug,
};