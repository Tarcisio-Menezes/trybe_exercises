--  safe updates mode só vai te permitir executá-los caso eles incluam quais IDs devem ser modificados.
-- Para evitar essa restrição, rode o seguinte comando em uma janela de query dentro do MySQL Workbench 
-- sempre que abri-lo para desabilitar essa funcionalidade, antes de executar seus comandos de UPDATE ou DELETE :
SET SQL_SAFE_UPDATES = 0;

-- Agora sim:
UPDATE sakila.staff
SET first_name = 'Rannveig'
WHERE first_name = 'Ravein';

-- Mais de uma coluna ao mesmo tempo
UPDATE sakila.staff
SET first_name = 'Rannveig', last_name = 'Jordan'
WHERE staff_id = 4;

-- Por questões de performance, para que apenas uma solicitação de query seja enviada ao servidor,
-- podemos fazer uma atualização em massa.

-- Opção 1 - Incluindo a lista de condições fixas
UPDATE sakila.actor
SET first_name = 'JOE'
WHERE actor_id IN (1,2,3);

-- Opção 2 - Especificando como cada entrada será alterada individualmente
UPDATE sakila.actor
SET first_name = (
CASE actor_id WHEN 1 THEN 'JOE' -- se actor_id = 1, alterar first_name para 'JOE'
              WHEN 2 THEN 'DAVIS' -- se actor_id = 2, alterar first_name para 'DAVIS'
              WHEN 3 THEN 'CAROLINE' -- se actor_id = 3, alterar first_name para 'CAROLINE'
          ELSE first_name -- em todos os outros casos, mantém-se o first_name
END);

-- padrão de safe update
-- SET sql_safe_updates=1, sql_select_limit=1000, max_join_size=1000000;
-- pode ser personalizável como:
-- SET sql_safe_updates=1, sql_select_limit=500, max_join_size=10000;



