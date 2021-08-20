USE PecasFornecedores;
SELECT * FROM Pecas;
-- 1
SELECT * FROM Pecas
WHERE name LIKE 'GR%';
-- 2
SELECT * FROM Fornecimentos;
SELECT * FROM Fornecimentos
WHERE code=2
ORDER BY Fornecedor;
-- 3
SELECT peca, Preco, Fornecedor FROM Fornecimentos
WHERE Fornecedor LIKE '%N%'
OR Fornecedor LIKE 'N%'
OR Fornecedor LIKE '%N';
-- 4
SELECT * FROM Fornecedores;
SELECT * FROM Fornecedores
WHERE name LIKE '%LTDA';
-- 5
SELECT COUNT(name LIKE '%F%') 
AND COUNT(name LIKE '%F')
AND COUNT(name LIKE 'F%')
FROM Fornecedores;
-- 6
SELECT * FROM Fornecimentos
WHERE Preco>15
AND Preco<40
ORDER BY Preco DESC;
-- 7
SELECT * FROM Vendas
WHERE order_date BETWEEN '2018/15/04 00:00:00' AND '2018/07/30 23:59:59';
-- 7 
SELECT * FROM Vendas
WHERE order_date BETWEEN '2018/15/04' AND '2018/07/30';