-- Lembre-se de usar o SELF JOIN em situações em que as informações que estiver buscando
-- estejam armazenadas em apenas uma tabela.

SELECT t1.title, t1.replacement_cost, t1.length, t2.title, t2.replacement_cost, t2.length
FROM sakila.film AS t1, sakila.film AS t2
WHERE t1.length = t2.length;

-- Queremos saber os ids e custos de substituição dos filmes que possuem o mesmo custo de substituição.
SELECT * FROM sakila.film;

SELECT t1.film_id, t1.replacement_cost, t2.film_id, t2.replacement_cost
FROM sakila.film AS t1, sakila.film as t2
WHERE t1.replacement_cost = t2.replacement_cost;

-- Exiba o título e a duração de empréstimo dos filmes que possuem a mesma duração.
-- Exiba apenas os filmes com a duração de empréstimo entre 2 e 4 dias.
SELECT t1.title, t1.rental_duration, t2.title, t2.rental_duration
FROM sakila.film AS t1, sakila.film as t2
WHERE t1.length = t2.length;
