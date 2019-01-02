CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
	id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(55) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name) VALUES ("Hickory Burger");
INSERT INTO burgers (burger_name) VALUES ("The Original Burger");
INSERT INTO burgers (burger_name) VALUES ("Cheesy Cheese Burger");
