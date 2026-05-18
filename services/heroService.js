const db = require("../data/data.js");

function getHero() {
  return db.prepare("SELECT * FROM hero").all();
}

module.exports = { getHero };
