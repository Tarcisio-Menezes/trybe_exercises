USE zoo;
CREATE TABLE animais(
	animal_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    especie VARCHAR(50) NOT NULL,
    sexo VARCHAR(10) NOT NULL,
    idade SMALLINT NOT NULL,
    localizacao VARCHAR(50) NOT NULL    
) ENGINE=InnoDB;

USE zoo;
CREATE TABLE setor(
	setor_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(30) NOT NULL
) ENGINE=InnoDB;

USE zoo;
CREATE TABLE gerentes(
	gerente_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    sobrenome VARCHAR(50) NOT NULL,
    data_inicio DATE NOT NULL,
    salario INT,
    setor_id INT NOT NULL,
    FOREIGN KEY (setor_id) REFERENCES setor(setor_id)
) ENGINE=InnoDB;

USE zoo;
CREATE TABLE cuidadores(
	cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    sobrenome VARCHAR(50) NOT NULL,
    data_admissao DATE NOT NULL,
    horarios VARCHAR(50),
    salario INT,
    gerente_id INT NOT NULL,
    setor_id INT NOT NULL,
    FOREIGN KEY (gerente_id) REFERENCES gerentes(gerente_id),
    FOREIGN KEY (setor_id) REFERENCES setor(setor_id)
) ENGINE=InnoDB;

USE zoo;
CREATE TABLE cuidadores_animal(
	animal_id INT NOT NULL,
    cuidador_id INT NOT NULL,
    CONSTRAINT PRIMARY KEY(animal_id, cuidador_id),
    FOREIGN KEY (animal_id) REFERENCES animais(animal_id),
    FOREIGN KEY (cuidador_id) REFERENCES cuidadores(cuidador_id)
) ENGINE=InnoDB;
