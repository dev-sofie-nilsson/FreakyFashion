CREATE TABLE if NOT EXISTS products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  sku TEXT NOT NULL UNIQUE,
  price INTEGER NOT NULL CHECK (price >= 0)
);


INSERT INTO products (name, SKU, price) VALUES ('Svart T-Shirt', 'SVA123', 199);
INSERT INTO products (name, SKU, price) VALUES ('Vit T-Shirt', 'VIT123', 199);

