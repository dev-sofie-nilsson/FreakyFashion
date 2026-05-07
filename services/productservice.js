const database = require("better-sqlite3");

const db = new database('./data/freakyfashion.db', { verbose: console.log });

function getAllProducts() {
  const sql = "SELECT * FROM products";
  return db.prepare(sql).all();
}

module.exports = { getAllProducts };