-- database: c:\Workspace\Grupparbete-backend\data\FreakyFashion.db

CREATE TABLE IF NOT EXISTS categories (
    id INTEGER PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

INSERT OR IGNORE INTO categories (id, name) VALUES
(1, 'Kläder'),
(2, 'Accessoarer'),
(3, 'Skor');

CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    category_id INT,
    FOREIGN KEY (category_id) REFERENCES categories(id)
);
