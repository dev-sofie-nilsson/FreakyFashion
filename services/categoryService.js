const Database = require('better-sqlite3');
const path = require('path');
const db = new Database(path.join(__dirname, '../data/FreakyFashion.db'));

function getAllCategories() {
  const stmt = db.prepare('SELECT * FROM categories');
  return stmt.all();
}

module.exports = { getAllCategories };