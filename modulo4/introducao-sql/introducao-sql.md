### Exercício 1

a)  VARCHAR(255) serve para declarar strings, o 255 define o limite de caractéres.
    PRYMARY KEY indica que aquela informação é obrigatória, como uma chave de acesso.
    NOT NULL diz que o valor não pode ser nulo, ou seja, é preciso informar algo para aquele dado.
    DATE representa uma data no formato americano YYYY-MM-DD

b) O comando SHOW DATABASES faz exatamente oque se propõe, mostra as bases de dados que temos  disponiveis, do mesmo modo que SHOW TABLES nos mostra as tabelas que criamos.

c) DESCRIBE Actor mostra uma tabela com a mesma estrutura que definimos nossas informações, indicando tipo, se é nulo ou não e se é uma chave ou não.

### Exercício 2

a)  INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
        "002", 
        "Glória Pires",
        1200000,
        "1963-08-23", 
        "female"
    );

b) Código de Erro: 1062. Entrada duplicada '002' para a chave 'PRIMARY'
    As chaves primarias devem ser únicas, como identificadores.

c) Código de Erro: 1136. Contagem da coluna não combina com valores contidos na linha 1
    A linha de INSERT espera receber 3 valores, mas temos 5 sendo passados, assim o codigo não saberá o que fazer com os valores a mais. Isso pode ser resolvido adicionando birth_date e gender ao INSERT.

    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
        "003", 
        "Fernanda Montenegro",
        300000,
        "1929-10-19", 
        "female"
    );

d) Código de Erro: 1364. Campo 'nome' não tem um valor definido
    Parecido com o erro anterior, mas desta vez o dado de nome não foi informado nos valores nem no INSERT, o erro aconteceu pois name é do tipo NOT NULL, então não pode ser nulo/indefinido.

    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
        "004",
        "Matheus de Azevedo de Souza",
        400000,
        "1949-04-18", 
        "male"
    );

e) Código de Erro: 1292. Vlor de data incorreto: '1950' para coluna 'birth_date' na linha 1
    A principio tudo parece certo, mas a data deve ser passada entre aspas "", como uma string.

    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
        "005", 
        "Juliana Paes",
        719333.33,
        "1979-03-26", 
        "female"
    );

f)  INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
        "004", 
        "Antônio Fagundes",
        400000,
        "1949-04-18", 
        "male"
    );

    INSERT INTO Actor (id, name, salary, birth_date, gender)
    VALUES(
        "005", 
        "Juliana Paes",
        719333.33,
        "1979-03-26", 
        "female"
    );

### Exercício 3

a) SELECT * from Actor WHERE gender = "female";

b) SELECT salary from Actor WHERE name = "Tony Ramos";

c) Uma tabela contendo todas as colunas, mas com apenas uma linha com valores nulos apareceu, pois não encontrou nada baseado na informação passada para a busca.

d) SELECT id, name, salary from Actor WHERE salary <= 500000;

e) Código de Erro: 1054. Coluna desconhecida 'nome' em 'campo da lista'
    O dado 'nome' nunca foi informado como coluna, o correto seria name

    SELECT id, name from Actor WHERE id = "002";

### Exercício 4

a) A query ja esta bem explicada no enunciado, ela ira retornar todos os dados dos atores com nome inciando em  A ou J, e que tenham salario maior que R$300.000

b)  SELECT * FROM Actor
    WHERE name NOT LIKE "A%" AND salary > 350000;

c)  SELECT * FROM Actor
    WHERE name LIKE "%g%" OR name LIKE "%G%";

d)  SELECT * FROM Actor
    WHERE 
	    (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%")
        AND salary BETWEEN 350000 AND 900000;

### Exercício 5

a)  CREATE TABLE Movie (
		id VARCHAR(255) PRIMARY KEY,
        title VARCHAR(255) NOT NULL UNIQUE,
        synopsis TEXT NOT NULL,
        release_Date DATE NOT NULL,
        rating INT NOT NULL
    );

b)  INSERT INTO Movie (id, title, synopsis, release_Date, rating)
    VALUES(
        "001",
        "Se Eu Fosse Você",
        "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
        "2006/06/01",
        7
    );

c)  INSERT INTO Movie (id, title, synopsis, release_Date, rating)
    VALUES(
        "002",
        "Doce de mãe",
        "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
        "2012/12/27",
        10
    );

d)  INSERT INTO Movie (id, title, synopsis, release_Date, rating)
    VALUES(
        "003",
        "Dona Flor e Seus Dois Maridos",
        "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
        "2017/11/02",
        8
    );

e)  INSERT INTO Movie (id, title, synopsis, release_date, rating) 
    VALUES(
        "004",
        "Deus é Brasileiro",
        "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
        "2003-01-31",
        9
    );

### Exercício 6

a)  SELECT id, title, rating FROM Movie WHERE id = "002";

b)  SELECT * FROM Movie WHERE name = "Dona Flor e Seus Dois Maridos";

c)  SELECT id, title, synopsis FROM Movie WHERE rating > 7;

### Exercício 7

a)  SELECT * FROM Movie
    WHERE title LIKE "%vida%";

b)  SELECT * FROM Movie
    WHERE title LIKE "%DONA%" OR
      synopsis LIKE "%DONA%";

c)  SELECT * FROM MOVIE
    WHERE release_date < "2020-05-04";

d)  SELECT * FROM MOVIE
    WHERE release_date < "2020-05-04" AND 
      (title LIKE "%DONA%" OR
      synopsis LIKE "%DONA%") AND rating > 7;