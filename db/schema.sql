-- This creates burgers database(code used in DBeaver)--
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers 
(
    id int NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(225) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id) 
)
