USE Pixar;
SELECT * FROM Movies;
-- 1
INSERT INTO Movies (title, director, year, length_minutes)
VALUES('Mostros SA', 'Pete Docter', 2001, 92),
('Procurando Nemo', 'John Lasseter', 2003, 107),
('Os Incríveis', 'Brad Bird', 2004, 116),
('WALL-E', 'Pete Docter', 2008, 104);
-- 2
SELECT * FROM BoxOffice;
INSERT INTO BoxOffice (movie_id, rating, domestic_sales, international_sales)
VALUES (9, 6.8, 450000000, 370000000);
-- corrigindo duplicidade no nemo
DELETE FROM Movies
WHERE id = 13;
-- 3
UPDATE Movies
SET director = 'Andrew Staton'
WHERE id = 9;
-- 4
UPDATE Movies
SET title = 'Ratatouille', year = 2007
WHERE id = 3;
-- 5
INSERT INTO BoxOffice (movie_id, rating, domestic_sales, international_sales)
VALUES (8, 8.5, 300000000, 250000000),
(10, 7.4, 460000000, 510000000),
(11, 9.9, 290000000, 280000000);
-- 6
-- Chave estrangeira, deletando onde ela é importada primeiro
DELETE FROM BoxOffice
WHERE movie_id = 11;
-- Deletando na origem
SELECT * FROM Movies;
DELETE FROM Movies
WHERE id = 11;
-- 7
-- Chave estrangeira, deletando onde ela é importada primeiro
DELETE FROM BoxOffice
WHERE movie_id IN (2, 9);
-- safe mode desabilitado
DELETE FROM Movies
WHERE director = 'Andrew Staton';
-- safe mode habilitado
SELECT id FROM Movies
WHERE director = 'Andrew Staton';
DELETE FROM Movies
WHERE id IN (2, 9);