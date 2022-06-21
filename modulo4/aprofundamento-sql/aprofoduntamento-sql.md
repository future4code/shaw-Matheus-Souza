### Exercicio 1

a) 
```SQL
ALTER TABLE Actor DROP COLUMN salary;
```
    Altera a tabela Actor, removendo a coluna salary

b)  
```SQL
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```
    Altera a tabela Actor, redeclarando a coluna gender para uma coluna chamada sex, com limite de 6 caracteres.

c)
```SQL
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```
    Altera a tabela Actor, redeclarando a coluna gender para uma coluna igual, porém com limite de 255 caracteres.

d)
```SQL
ALTER TABLE Actor CHANGE gender gender VARCHAR(100);
```

### Exercicio 2

a)
```SQL
UPDATE Actor
SET name = "Moacyr Franco",
	birth_date = "2020-02-10"
WHERE id = "003";
```

b)
```SQL
UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";
```
```SQL
UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";
```

c)
```SQL
UPDATE Actor
SET name = "Moacyr Franco",
    birth_date = "2020-02-10",
    salary = 600000,
    gender = "male"
WHERE id = "005";
```

d)  0 linhas afetadas Linhas encontradas: 0 Mudanças: 0 Avisos: 0
    O comando foi aceito, mas não encontrou dado correspondente para modificar.

### Exercicio 3

a)
```SQL
DELETE FROM Actor WHERE name = "Fernanda Montenegro";
```

b)
```SQL
DELETE FROM Actor
WHERE
	gender = "male" AND
	salary > 1000000;
```

### Exercicio 4

a)
```SQL
SELECT MAX(salary) FROM Actor;
```

b)
```SQL
SELECT MIN(salary) FROM Actor WHERE gender = "female";
```

c)
```SQL
SELECT COUNT(*) FROM Actor WHERE gender = "female";
```

d)
```SQL
SELECT SUM(salary) FROM Actor;
```

### Exercicio 5

a)  Essa query ira fazer a contagem de todos os gereros da tabela Actor, os separando em grupos de acordo com a informação registrada em cada linha

b)
```SQL
SELECT id, name FROM Actor
ORDER BY name DESC;
```

c)
```SQL
SELECT * FROM Actor
ORDER BY salary;
```

d)
```SQL
SELECT * FROM Actor
ORDER BY salary DESC
LIMIT 3;
```

e)
```SQL
SELECT AVG(salary), gender FROM Actor
GROUP BY gender;
```

### Exercicio 6

a)
```SQL
ALTER TABLE Movie ADD playing_limit_date DATE;
```

b)
```SQL
ALTER TABLE Movie CHANGE rating rating FLOAT;
```

c)
```SQL
UPDATE Movie
SET	playing_limit_date = "2020-12-31"
WHERE id = "001"
```
```SQL
UPDATE Movie
SET	playing_limit_date = "2022-10-31"
WHERE id = "002"
```

d)  Como visto em um dos exercócios anteriores, a query executa com sucesso, mas não encontra nenhum dado para alterar.
