-- Criando um índice em uma coluna
CREATE [INDEX | FULLTEXT INDEX | UNIQUE INDEX] nome_indice
ON tabela (coluna);

-- Criando um índice composto, em duas ou mais colunas
CREATE [INDEX | FULLTEXT INDEX | UNIQUE INDEX] nome_indice
ON tabela (coluna1, coluna2);

-- Excluindo índices
DROP INDEX nome_do_indice ON tabela;

-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
USE sakila;
CREATE INDEX index_first_name ON sakila.actor(first_name);

SELECT * FROM sakila.actor;

-- verificando custos de execução
SELECT *
FROM sakila.actor
WHERE first_name = 'RITA';

-- excluindo indice
DROP INDEX index_first_name ON sakila.actor;

-- verificando custos de execução
SELECT *
FROM sakila.actor
WHERE first_name = 'RITA';

-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

CREATE FULLTEXT INDEX index_address ON sakila.address(address);

-- verificando custos de execução
SELECT *
FROM sakila.address
WHERE MATCH(address) AGAINST('drive');

-- excluindo FULLTEXT INDEX 
DROP INDEX index_address ON sakila.address;

-- verificando custos de execução
SELECT *
FROM sakila.address
WHERE address LIKE '%drive%';

-- xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

CREATE UNIQUE INDEX nome_do_indice ON nome_tabela(nome_coluna);

CREATE UNIQUE INDEX unique_name_index ON sakila.language(name);

SELECT *
FROM sakila.language
WHERE name = 'Mandarin';

DROP INDEX unique_name_index ON sakila.language;

SELECT * FROM sakila.language
WHERE name = 'Mandarin';

-- Quando não utilizar índices
-- Em tabelas pequenas, pois a diferença de performance será mínima, se houver;
-- Em colunas que retornarão uma grande quantidade dados quando filtradas. Por exemplo, você não adicionaria os artigos "o" e "a" ao índice de um livro;
-- Em tabelas que frequentemente têm atualizações em grande escala, uma vez que a performance dessas atualizações será afetada;
-- Em colunas que são frequentemente manipuladas, haja vista que a manutenção do índice dessa coluna pode demandar muito tempo quando feita em excesso;
-- Em colunas que possuem muitos valores nulos.
