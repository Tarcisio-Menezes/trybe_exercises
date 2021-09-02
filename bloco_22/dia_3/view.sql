-- Defina em qual banco a view será criada
USE nome_do_banco_de_dados;
-- Comando para criar a view
CREATE VIEW nome_da_view AS query;


CREATE VIEW top_10_customers AS
    SELECT c.customer_id, c.first_name, SUM(p.amount) AS total_amount_spent
    FROM sakila.payment p
    INNER JOIN sakila.customer c ON p.customer_id = c.customer_id
    GROUP BY customer_id
    ORDER BY total_amount_spent DESC
    LIMIT 10;
    
-- caso alguém precise ter acesso a essa informação
SELECT * FROM top_10_customers;


-- Para excluir uma VIEW , use o seguinte comando:
DROP VIEW nome_da_view;
