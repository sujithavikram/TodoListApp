CREATE DATABASE task;

USE task;

CREATE TABLE lists (
    id INT NOT NULL AUTO_INCREMENT,
    task varchar(250) NOT NULL,
    status boolean NOT NULL,
    PRIMARY KEY (id)
);