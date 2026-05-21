const db = require("../data/data.js");

function getHero() {
  return db.prepare("SELECT * FROM hero").get();
}

module.exports = { getHero };
