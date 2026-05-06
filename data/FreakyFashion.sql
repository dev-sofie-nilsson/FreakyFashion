CREATE TABLE categories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL
);

INSERT INTO
  categories (name)
VALUES
  ("Kläder");

INSERT INTO
  categories (name)
VALUES
  ("Skor");

INSERT INTO
  categories (name)
VALUES
  ("Accessoarer");

CREATE TABLE products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  details TEXT NOT NULL,
  image_path TEXT NOT NULL,
  brand TEXT NOT NULL,
  sku TEXT NOT NULL,
  price INTEGER NOT NULL CHECK (price >= 0),
  category_id INTEGER NOT NULL,
  FOREIGN KEY (category_id) REFERENCES categories (id) ON DELETE RESTRICT
);

INSERT INTO
  products (
    title,
    details,
    image_path,
    brand,
    sku,
    price,
    category_id
  )
VALUES
  (
    "t-shirt",
    "Detaljer om tröjan...",
    "/images/orange-t-shirt",
    "Microslop",
    "ABC1234",
    199,
    1
  );
