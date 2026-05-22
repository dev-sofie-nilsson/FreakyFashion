const Database = require("better-sqlite3");
const path = require("path");
// verbose: console.log logs all SQL queries to the console (useful for debugging)
const db = new Database(path.join(__dirname, "../data/FreakyFashion.db"), {
  verbose: console.log,
});

// Enables foreign key constraint enforcement (disabled by default in SQLite)
db.pragma("foreign_keys = ON");

module.exports = db;
