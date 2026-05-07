const db = require("better-sqlite3")("freakyfashion.db");
function getAll() {
  return db.prepare("SELECT * FROM products").all();
}
module.exports = { getAll };