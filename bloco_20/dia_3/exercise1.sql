USE sakila;
SHOW TABLES;
SELECT * FROM customer;
SELECT first_name, last_name FROM customer
WHERE email='LEONARD.SCHOFIELD@sakilacustomer.org';
SELECT first_name, last_name FROM customer
WHERE active IS FALSE AND store_id=2
AND first_name <> 'KENNETH';
SELECT * FROM film;
SELECT title, description, release_year, replacement_cost FROM film
WHERE rating = 'G' AND replacement_cost>=18.00
ORDER BY replacement_cost DESC LIMIT 100;

