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

function getProductsByCategory(slug) {
  return db
    .prepare(
      `
    SELECT *
    FROM products
    INNER JOIN categories ON products.category_id = categories.id
    WHERE categories.slug = ?
    `,
    )
    .all(slug);
}

module.exports = {
  getAllProducts,
  getProductsSearch,
  getProductsByCategory,
};
