DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NULL,
  department_name VARCHAR(100) NULL,
  price DECIMAL (10,4) NULL,
  stock_quantity INT NULL,
  
  PRIMARY KEY (id)
);


INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ( 1,"10 piece Knife set", "Kitchen", 39.50, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ( 2,"Red Bra", "Womens Clothing", 49.10, 120);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ( 3,"Soccer Ball", "Toys", 20.45, 230);


INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ( 4,"Walkman", "Electronics", 55.50, 147);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ( 5,"Hand Towel", "Bathroom", 12.10, 65);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity)
VALUES ( 6,"Big bird Shorts", "Kids", 15.25, 75);