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
  return db
    .prepare(
      `
    SELECT *
    FROM products
    INNER JOIN categories ON products.category_id = categories.id
    WHERE categories.id = ?
    `,
    )
    .all(id);
}

function getProductsByCategorySlug(slug) {
  return db
    .prepare(
      `
    SELECT products.*, categories.name AS category_name
    FROM products
    INNER JOIN categories ON products.category_id = categories.id
    WHERE categories.slug = ?
    `,
    )
    .all(slug);
}

function addNewProduct(
  title,
  details,
  image_path,
  brand,
  sku,
  price,
  category_id,
) {
  // Create slug from title
  const replaceChar = {
    å: "a",
    ä: "a",
    ö: "o",
    " ": "-",
    "-": "",
  };

  let slug = "";

  const characters = title.toLowerCase().split("");
  characters.forEach((char) => {
    if (char in replaceChar) {
      slug += replaceChar[char];
    } else {
      slug += char;
    }
  });

  // Add new product
  return db
    .prepare(
      `
    INSERT INTO products (title, slug, details, image_path, brand, sku, price, category_id)
    VALUES (?, ?, ?, ?, ?, ?, ?, ? ) `,
    )
    .run(title, slug, details, image_path, brand, sku, price, category_id);
}

function getProductBySlug(slug) {
  return db.prepare(`
    SELECT products.*, categories.name AS category_name, categories.slug AS category_slug
    FROM products
    JOIN categories ON products.category_id = categories.id
    WHERE products.slug = ?
  `).get(slug);
}

module.exports = {
  getAllProducts,
  getProductsSearch,
  getProductsByCategory,
  getProductsByCategorySlug,
  getProductBySlug,
  addNewProduct,
};
