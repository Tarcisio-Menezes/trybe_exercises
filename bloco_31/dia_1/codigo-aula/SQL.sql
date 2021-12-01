CREATE DATABASE IF NOT EXISTS live_lecture_31_1;

USE live_lecture_31_1;

CREATE TABLE cats (
    id INT unsigned NOT NULL auto_increment,
    name VARCHAR(20) NOT NULL,
    age INT NOT NULL,
    CONSTRAINT pk_cats PRIMARY KEY (id)
);
