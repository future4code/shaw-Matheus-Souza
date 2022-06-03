import express, { Request, Response } from 'express'
import cors from 'cors'

type Extract = {
  value: number,
  date: number,
  description: string,
}

type User = {
  cpf: number,
  name: string,
  birthday: string,
  balance: number,
  extract: Extract[]
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
      cpf: 1,
      name: "Alice",
      birthday: "20/07/1990",
      balance: 1200,
      extract: []
  },
  {
      cpf: 2,
      name: "Bob",
      birthday: "20/07/1998",
      balance: 3600,
      extract: []
  },
  {
      cpf: 3,
      name: "Coragem",
      birthday: "20/07/1992",
      balance: 2100,
      extract: []
  },
  {
      cpf: 4,
      name: "Dory",
      birthday: "20/07/2000",
      balance: 1700,
      extract: []
  },
  {
      cpf: 5,
      name: "Elsa",
      birthday: "20/07/2003",
      balance: 1700,
      extract: []
  },
  {
      cpf: 6,
      name: "Fred",
      birthday: "20/07/1986",
      balance: 6000,
      extract: []
  }
]

const app = express()
app.use(express.json())
app.use(cors())

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})

app.listen(3003, () => {
  console.log('Servidor funcionando')
})

app.post("/createAccount", (req: Request, res: Response) => {
  try{
    const yearNow = new Date().getFullYear();
    const monthNow = new Date().getMonth();
    const dayNow = new Date().getDate();
    const extract:Extract[] = []
    const balance = 0
    const { cpf, name, birthday}: User = req.body
    if( !cpf || !name || !birthday ){
      res.status(422)
      throw new Error("Algum campo do usuário está vazio")
    }
    const [findCpf] = users.filter((user:User) => {
      return user.cpf === cpf
    })
    if(findCpf){
      res.status(409)
      throw new Error("Usuario já existe em nosso banco")
    }
    const conversorYear = (data:string) => {  
      const ano = data.substring(6, 10) 
      return ano
    }
    const conversorMonth = (data:string) => {
      const mes = data.substring(3, 5)   
      return mes
    }
    const conversorDay = (data:string) => {
      const dia = data.substring(0, 2) 
      return dia
    }
    const birthYear:number = Number(conversorYear(birthday))
    const birthMonth:number = Number(conversorMonth(birthday))
    const birthDay:number = Number(conversorDay(birthday))
    if(yearNow - birthYear < 18){ // tem 18?
      if(yearNow - birthYear === 17){ // esta no ano para 18?
        if((monthNow + 1) - birthMonth === 0){ // mes do aniversario?
          if(dayNow - birthDay <= 0){ // dia do aniversario?
            users.push({cpf, name, birthday, balance, extract})
            res.status(200).send(users)
          } 
        }
        if((monthNow + 1) - birthMonth < 0){ // ja passou anivesario?
          users.push({cpf, name, birthday, balance, extract})
          res.status(200).send(users)
        }
      }
      res.status(422)
      throw new Error("Você de ter 18 anos ou mais para criar conta")
    }
    users.push({cpf, name, birthday, balance, extract})
    res.status(200).send(users)
  }catch(error:any){
    res.send(error.message)
  }
})

app.get("/balance/:cpf", (req: Request, res: Response) => {
  try{
    if(req.query.name === undefined){
      throw new Error("Nome do usuario precisa ser informado")
    }else{
      const [findName] = users.filter((user:User) => {
        if(user.name === req.query.name){
          return user
        }
      })
      if(!findName){
        res.status(409)
        throw new Error("Nome inserido não existe")
      }
    }
    const cpf:number = Number(req.params.cpf)
    const [findCpf] = users.filter((user:User) => {
      if(user.cpf === cpf){
        return user
      }
    })
    if(!findCpf){
      res.status(409)
      throw new Error("Cpf não encontrado")
    }
    const resposta = `Nome: ${findCpf.name}, Saldo: R$ ${findCpf.balance}`
    res.status(200).send(resposta)  
  }catch(error:any){
    res.send(error.message)
  }
})

app.put("/balance", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})
app.put("/payBill", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})
