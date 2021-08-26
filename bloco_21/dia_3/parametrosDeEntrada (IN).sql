-- Foi criada uma procedure que recebe como parâmetro uma sílaba (syllable) e
-- busca na tabela actor todos atores quem contêm aquela sílaba no nome.
USE sakila;
DELIMITER $$

CREATE PROCEDURE ShowActorsWithSyllable(IN syllable VARCHAR(100))
BEGIN
    SELECT *
    FROM sakila.actor
    WHERE first_name LIKE CONCAT('%', syllable, '%');
END $$

DELIMITER ;

-- Como usar

CALL ShowActorsWithSyllable('lope');