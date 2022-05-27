//escreva o seu código aqui

// 1 - a) O codigo ira indicar erro no lugar onde o numero foi escrito, pois ali ele espera uma string
// 1 - b) Para isso usamos o Union Type, algo como let meuNumero: number | string = 10
// 1 - c)

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: string,
}
const pessoa1 = {
    nome: "Matheus",
    idade: 29,
    corFavorita: "Roxo",
}
const pessoa2 = {
    nome: "Marione",
    idade: 27,
    corFavorita: "Azul",
}
const pessoa3 = {
    nome: "Thomas",
    idade: 29,
    corFavorita: "Amarelo",
}

// 1 - d)

enum cor {
    vermelho= "vermelho",
    laranja= "laranja",
    amarelo= "amarelo",
    verde= "verde",
    azul= "azul",
    anil= "anil",
    violeta= "violeta"
}

pessoa1.corFavorita = cor.violeta
pessoa2.corFavorita = cor.amarelo
pessoa3.corFavorita = cor.azul

console.log(pessoa1,pessoa2,pessoa3)

// 2

const listaNumeros:number[] = [5,80,3,67,23]

function obterEstatisticas(numeros:number[]) {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas:{}= {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

obterEstatisticas(listaNumeros)

// 2 - c)

type amostra = {
    numeros: number[],
    obterEstatisticas: (numeros:number[]) => any
}

const amostraDeIdades:amostra = {

    numeros: [21, 18, 65, 44, 15, 18],

    obterEstatisticas: (numeros) => {}
}

// 3

type post =[
    {
    autor: string,
    texto: string
    },
    {
    autor: string,
    texto: string
    },
    {
    autor: string,
    texto: string
    },
    {
    autor: string,
    texto: string
    },
    {
    autor: string,
    texto: string
    }
]

const posts:post = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
  ]

//   3 - b)

  function buscarPostsPorAutor(posts:[], autorInformado:string) {
    return posts.filter(
      (post:any) => {
        return post.autor === autorInformado
      }
    )
  }