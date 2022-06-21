### Exercicio 1

a)  Uma chave estrangeira é como buscar um dado de outra tabela, buscando esse dado de fora como referencia para um valor da tabela que se esta operando.

b)
```SQL
INSERT INTO Rating (id, comment, rate, movie_id) 
VALUES (
	"001",
    "Muito bom!",
    7,
	"004"
);
```

c)  Código do erro: 1452. Não foi posssivel adicionar ou atualizar a linha filha: falha na restrição de chave estrangeira (`shaw-21814883-souza`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
    Este erro diz que não foi possivel criar a linha com os dados solicitados pois id de referencia não pode ser encontrado.

d)  Código do erro: 1451. Não é possivel deletar ou atualizar uma linha parente: falha na restrição de chave estrangeira (`shaw-21814883-souza`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
    Esta linha esta associada a outra tabela, onde dados dependem dela, então não é possivel altera-la dessa forma.

### Exercicio 2

a)  Esta tabela esta usando outras duas tabelas como referencia para seus dados, criando a relação N:M

b)  

```SQL
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"004",
    "001"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"004",
    "002"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"004",
    "003"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"003",
    "001"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"004",
    "002"
);
INSERT INTO MovieCast(movie_id, actor_id)
VALUES(
	"004",
    "003"
);
```

c)  Código do erro: 1452. Não foi possivel adicionar ou atualizar a linha filha: falha na restrição de chave estrangeira (`shaw-21814883-souza`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
    A referencia para a informação não foi encontrada.

d)  Código do erro: 1451. Não foi possivel remover ou atualizar a linha pai: falha na restrição de chave estrangeira (`shaw-21814883-souza`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
    A informação não pode ser removida pois esta conectada a outros dados.

### Exercicio 3

a)  Esta query esta unindo as informações solicitadas, o ON funciona como o WHERE, dizendo onde pegar as informações.

b)
```SQL
SELECT m.id as movie_id, r.rate as rating FROM Movie m
INNER JOIN Rating r ON m.id = r.movie_id;
```