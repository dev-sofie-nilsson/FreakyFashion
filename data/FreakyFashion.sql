CREATE TABLE IF NOT EXISTS categories (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  details TEXT NOT NULL,
  image_path TEXT NOT NULL,
  brand TEXT NOT NULL,
  sku TEXT NOT NULL UNIQUE,
  price INTEGER NOT NULL CHECK (price >= 0),
  category_id INTEGER NOT NULL,
  FOREIGN KEY (category_id) REFERENCES categories (id) ON DELETE RESTRICT
);

-- TEST DATA
-- INSERT INTO
--   categories (name)
-- VALUES
--   ("Kläder");
-- 
-- INSERT INTO
--   categories (name)
-- VALUES
--   ("Skor");
-- 
-- INSERT INTO
--   categories (name)
-- VALUES
--   ("Accessoarer");
-- 
-- INSERT INTO
--   products (
--     title,
--     details,
--     image_path,
--     brand,
--     sku,
--     price,
--     category_id
--   )
-- VALUES
--   (
--     "Orange t-shirt",
--     "Detta är en orange tröja",
--     "/images/orange-t-shirt.png",
--     "Microslop",
--     "ABC1234",
--     199,
--     1
--   ),
--   (
--     "Vit t-shirt",
--     "Detta är inte en orange tröja",
--     "/images/white-t-shirt.png",
--     "Microslop",
--     "ABC1234",
--     199,
--     1
--   ),
--   (
--     "Svart t-shirt",
--     "Detta är en svart tröja",
--     "/images/ChatGPT_Image_22_apr._2026_09_28_38.png",
--     "Chattis",
--     "ABC34",
--     300,
--     1
--   ),
--   (
--     "Rostiga dojjor",
--     "Riktigt fula skor",
--     "/images/ugly-shoes.png",
--     "Rusty",
--     "CBA34",
--     310,
--     2
--   ),
--   (
--     "Gigantisk ring",
--     "Detta är en otroligt stor ring",
--     "/images/massive-ring.png",
--     "Ringy",
--     "RNG001",
--     299,
--     3
--   ),
--   (
--     "Rostiga stövlar",
--     "Dessa gummistövlar verkar ha rostat",
--     "/images/ugly-boots.png",
--     "Rusty",
--     "RST001",
--     349,
--     2
--   ),
--   (
--     "Silver armband",
--     "Vanligt armband gjort utav falskt silver",
--     "/images/bracelet.png",
--     "Bracy",
--     "BRC001",
--     199,
--     3
--   ),
--   (
--     "Guld halsband",
--     "Halsband i konstig form",
--     "/images/necklace.png",
--     "Necky",
--     "NCK001",
--     249,
--     3
--   );
--
