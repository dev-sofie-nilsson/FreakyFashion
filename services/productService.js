const db = require("../data/data.js");

function getAllProducts() {
  return db.prepare("SELECT * FROM products").all();
}

function getProductsSearch() {
  return db
    .prepare(
      `
    SELECT products.*, categories.name AS category_name
    FROM products
    JOIN categories ON products.category_id = categories.id
  `,
    )
    .all();
}

function getProductsByCategory(id) {
  return db.prepare("SELECT * FROM products WHERE category_id = ?").all(id);
}

module.exports = {
  getAllProducts,
  getProductsSearch,
  getProductsByCategory,
};
