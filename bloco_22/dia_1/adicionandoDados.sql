CREATE DATABASE IF NOT EXISTS albuns;

     -- Apagar a versão antiga da tabela
     DROP TABLE cidades; 
     CREATE TABLE cidades(
       id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
       cidade VARCHAR(100) NOT NULL,
       estado VARCHAR(10) NOT NULL,
       populacao INTEGER
    );

    INSERT INTO cidades(cidade, estado, populacao)
    VALUES('Rio Claro','SP',185421),
          ('Rio Claro','RJ',17216);
          