-- SELECT t1.coluna, t2.coluna
-- FROM tabela1 AS t1
-- INNER JOIN tabela2 AS t2
-- ON t1.coluna_em_comum = t2.coluna_em_comum;

USE sakila;

SELECT a.first_name, a.actor_id, f.actor_id
FROM sakila.actor AS a
INNER JOIN sakila.film_actor AS f
ON a.actor_id = f.actor_id;

-- EXERCICIOS

-- Monte uma query que exiba o id do ator , nome do ator e id do filme em que ele já atuou usando 
-- as tabelas actor e film_actor .
SELECT * FROM sakila.actor;
SELECT * FROM sakila.film_actor;

SELECT act.actor_id, act.first_name, fil.film_id
FROM sakila.actor AS act
INNER JOIN sakila.film_actor AS fil
ON act.actor_id = fil.film_id;

-- Use o JOIN para exibir o nome , sobrenome e endereço de cada um dos funcionários do banco. 
-- Use as tabelas staff e address .
SELECT * FROM sakila.staff;
SELECT * FROM sakila.address;
SELECT sta.first_name, sta.last_name, sta.address_id, addr.address
FROM sakila.staff AS sta
INNER JOIN sakila.address AS addr
ON sta.address_id = addr.address_id;

-- Exiba o id do cliente , nome e email dos primeiros 100 clientes, ordenados pelo nome em ordem decrescente,
-- juntamente com o id do endereço e o nome da rua onde o cliente mora.
-- Essas informações podem ser encontradas nas tabelas customer e address .
SELECT * FROM sakila.customer;
SELECT * FROM sakila.address;
SELECT cus.customer_id, cus.first_name, cus.email, addr.address_id, addr.address
FROM sakila.customer AS cus
INNER JOIN sakila.address AS addr
ON cus.address_id = addr.address_id
ORDER BY addr.address DESC
LIMIT 100;

-- Exiba o nome , email , id do endereço , endereço e distrito dos clientes que moram
-- no distrito da California e que contêm "rene" em seus nomes.
-- As informações podem ser encontradas nas tabelas address e customer .
SELECT cus.first_name, cus.email, cus.address_id, addr.address, addr.district
FROM sakila.customer AS cus
INNER JOIN sakila.address AS addr
ON cus.address_id = addr.address_id
WHERE addr.district = 'California'
AND (first_name LIKE '%rene%' 
OR first_name LIKE '%rene'
OR first_name LIKE 'rene%');

-- Exiba o nome e a quantidade de endereços dos clientes cadastrados.
-- Ordene seus resultados por nomes de forma decrescente.
-- Exiba somente os clientes ativos. As informações podem ser encontradas na tabela address e customer
SELECT cus.first_name, COUNT(addr.address)
FROM sakila.customer cus
INNER JOIN sakila.address AS addr
ON addr.address_id = cus.address_id
WHERE cus.active = 1
GROUP BY cus.first_name
ORDER BY cus.first_name DESC;

-- Monte uma query que exiba o nome , sobrenome e a média de valor ( amount )
-- paga aos funcionários no ano de 2006. Use as tabelas payment e staff . 
-- Os resultados devem estar agrupados pelo nome e sobrenome do funcionário.
SELECT * FROM sakila.staff;
SELECT * FROM sakila.payment;
SELECT sta.first_name, sta.last_name, AVG(pay.amount)
FROM sakila.staff AS sta
INNER JOIN sakila.payment AS pay
ON sta.staff_id = pay.staff_id
WHERE YEAR(pay.payment_date) = '2006'
GROUP BY sta.first_name, sta.last_name;

-- Monte uma query que exiba o id do ator , nome , id do filme e título do filme ,
-- usando as tabelas actor , film_actor e film .
-- Dica: você precisará fazer mais de um JOIN na mesma query .
SELECT * FROM sakila.actor;
SELECT * FROM sakila.film_actor;
SELECT * FROM sakila.film;

SELECT act.actor_id, act.first_name, fil.film_id, fil.title
FROM sakila.actor AS act
INNER JOIN sakila.film_actor AS fil_act
ON act.actor_id =  fil_act.actor_id
INNER JOIN sakila.film AS fil
ON fil.film_id = fil_act.film_id;
