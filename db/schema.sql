-- Drops the burgers_db if it exists currently --
DROP DATABASE IF EXISTS burgers_db;
-- Create the "burgers_db" database --
CREATE DATABASE burgers_db;
-- Makes it so all of the following code will affect burgers_db --
USE burgers_db;

-- Creates the table "burgers" within burgers_db --
CREATE TABLE burgers (
    id INT AUTO_INCREMENT,
    burger_name VARCHAR(30),
    devoured BOOLEAN,
    PRIMARY KEY(id)
);
