const Database = require("better-sqlite3");
const path = require("path");
const db = new Database(path.join(__dirname, "../data/FreakyFashion.db"), {
  verbose: console.log,
});

db.pragma("foreign_keys = ON");

module.exports = db;
