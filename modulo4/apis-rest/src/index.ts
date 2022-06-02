import express, { Request, Response } from 'express'
import cors from 'cors'
import { Console } from 'console'

enum UserType {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"
}

type User = {
  id: number,
  name: string,
  email: string,
  type: UserType,
  age: number
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: UserType.ADMIN,
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: UserType.NORMAL,
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: UserType.NORMAL,
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: UserType.NORMAL,
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: UserType.ADMIN,
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: UserType.ADMIN,
      age: 60
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
  console.log('Server funcionando')
})

// app.get("/users", (req: Request, res: Response) => {
//   res.status(200).send(users)
// })

// Neste exemplo, a entidade é users e o método é get

app.get("/users/:type", (req: Request, res: Response) => {
  try{
    const userType = users.filter((user:User) => {
      if(user.type === req.params.type){
        return user
      }
    })
    if(userType.length === 0){
      res.status(409)
      throw new Error("Type inserido não existe")
    }
    res.status(200).send(userType)  
  }catch(error:any){
    res.send(error.message)
  }
})

app.get("/users", (req: Request, res: Response) => {
  try{
    if(req.query.name === undefined){
      res.status(200).send(users)
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
      res.status(200).send(findName)
    }
  }catch(error:any){
    res.send(error.message)
  }
})

app.post("/users", (req: Request, res: Response) => {
  try{
    const { id, name, email, type, age}: User = req.body
    if( !id || !name || !email || !type || !age){
      res.status(422)
      throw new Error("Algum campo do usuário está vazio")
    }
    const [findId] = users.filter((user:User) => {
      return user.id === id
    })
    if(findId){
      res.status(409)
      throw new Error("Usuario já existe em nosso banco")
    }
    users.push({id, name, email, type, age})
    res.status(200).send(users)
  }catch(error:any){
    res.send(error.message)
  }
})

// o metodo post e put tem usos expecificos, ao usar post não devemos deixar ser adicionado um usuario ja existente, no caso de put iremos modificar as informações caso seja inserido dados ja existentes, como id, por isso acho que o ideal seja deixar cada metodo isolado e chama-los nos momentos certos.