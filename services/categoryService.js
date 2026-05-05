async function getAllCategories() {
  return [
    { id: 1, name: "Kläder" },
    { id: 2, name: "Skor" },
    { id: 3, name: "Accessoarer" }
  ];
}

module.exports = { getAllCategories };