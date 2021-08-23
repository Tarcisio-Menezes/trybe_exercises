USE sakila;
SELECT * FROM staff;
-- 1
INSERT INTO staff (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES('Tarcísio', 'Menezes', '6', 'cisao_tarcisio@hotmail.com', 1, true,' Cisão', 'delphi77');
-- 2
INSERT INTO staff (first_name, last_name, address_id, email, store_id, active, username, password)
VALUES('Teresinha', 'Menezes', '6', 'tejesus@hotmail.com', 1, true,'Terê', 'berilio'),
('Priscila', 'Gomes', '5', 'contatopriscilabernardo@gmail.com', 1, true,'Pri', 'amorzinho');
-- 3 
 INSERT INTO actor (first_name, last_name)
 SELECT customer.first_name, customer.last_name
 FROM customer
 LIMIT 5;
 -- 4
 SELECT * FROM category;
 INSERT INTO category (name)
 VALUES('HORROR'),
 ('FUNY'),
 ('DRAMA');
 