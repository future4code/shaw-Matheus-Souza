type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// b) Da mesma forma que o arquivo index, porem alterando o script no package.json ou adicionando um novo script direcionado para o arquivo atual
// b) Bastaria alterar o caminho no script, como "start": "tsc && node ./build/src/exercicio-4.js"
// c) Usando o comando tsc seguido do nome dos arquivos a serem transpilados, ou apenas tsc para pegar todos arquivos .ts que encontrar.