    CREATE TABLE filme_ator(
        AtorId INTEGER,
        FilmeId INTEGER,
        CONSTRAINT PRIMARY KEY(AtorId, FilmeId),
        FOREIGN KEY (AtorId) REFERENCES Actor (Atorid),
        FOREIGN KEY (FilmeId) REFERENCES Actor (Filmeid)
    );
    
-- De qualquer forma, a aplicação de chaves compostas pode ser vantajosa em outras situações, 
-- como na criação de tabelas N:N, também conhecidas como tabelas de junção , pois os campos que 
-- contêm as chaves estrangeiras para as outras tabelas são utilizados para formar a chave primária 
-- composta , garantindo o bloqueio de registros com associações iguais. 
-- Veja no exemplo abaixo, a tabela de junção filme_ator .