SELECT
    c.customer_id,
    c.first_name,
    c.last_name,
    a.actor_id,
    a.first_name,
    a.last_name
FROM customer AS c
RIGHT JOIN actor AS a
ON c.last_name = a.last_name
ORDER BY c.last_name;

-- diferença principal com inner join, além de adotar uma coluna como referência é a a inserção de NULL caso
-- não tenha valores correspondentes entre as duas colunas selecionadas

