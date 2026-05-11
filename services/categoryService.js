const db = require("../data/data.js");

function getAllCategories() {
  const stmt = db.prepare("SELECT * FROM categories");
  return stmt.all();
}

function addNewCategory(name) {
  // Create slug out of inputed category name
  const replaceChar = {
    å: "a",
    ä: "a",
    ö: "o",
    " ": "-",
  };

  let slug = "";

  const characters = name.toLowerCase().split("");
  characters.forEach((char) => {
    if (replaceChar[char]) {
      slug += replaceChar[char];
    } else {
      slug += char;
    }
  });

  // Add category name + the created slug to the database
  return db
    .prepare("INSERT INTO categories (name, slug) VALUES (?, ?)")
    .run(name, slug);
}

module.exports = { getAllCategories, addNewCategory };
