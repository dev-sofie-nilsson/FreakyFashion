const db = require("../data/data.js");

function getAllSpots() {
  return db.prepare("SELECT * FROM spots").all();
}

module.exports = { getAllSpots };
