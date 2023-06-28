
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    email TEXT NOT NULL UNIQUE,
    username TEXT NOT NULL,
    password TEXT NOT NULL
);



CREATE TABLE IF NOT EXISTS orders (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  fecha DATE NOT NULL,
  total DECIMAL NOT NULL,
  created_by uuid REFERENCES users (id) ON UPDATE CASCADE ON DELETE CASCADE

);


CREATE TABLE IF NOT EXISTS products (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL UNIQUE,
    brand TEXT NOT NULL,
    description TEXT NOT NULL,
    price DECIMAL NOT NULL,
    quantity INT NOT NULL,
    category TEXT NOT NULL,
    created_by uuid REFERENCES orders (id) ON UPDATE CASCADE ON DELETE CASCADE
);