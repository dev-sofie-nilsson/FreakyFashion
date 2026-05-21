const db = require("../data/data.js");

// Fetches a single hero banner entry from the database
function getHero() {
  return db.prepare("SELECT * FROM hero").get();
}

module.exports = { getHero };
