import express, { Request, Response } from 'express'
import cors from 'cors'

type Extract = {
  value: number,
  date: string,
  description: string
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

app.listen(3003, () => {
  console.log('Servidor funcionando')
})
// Para testar se o servidor está tratando os endpoints corretamente

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
const yearNow = new Date().getFullYear();
const monthNow = new Date().getMonth();
const dayNow = new Date().getDate();

app.get("/users", (req: Request, res: Response) => {
  res.status(200).send(users)
})

app.post("/createAccount", (req: Request, res: Response) => {
  try{
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

app.put("/balance/:cpf", (req: Request, res: Response) => {
  type AddBalance = {
    addBalance:number
  }
  try{
    const { addBalance }:AddBalance = req.body
    if(addBalance <=0){
      res.status(422)
      throw new Error("Valor inserido não pode ser adicionado")
    }
    if( typeof addBalance !== "number"){
      res.status(422)
      throw new Error("Insira um numero para adicionar ao saldo!")
    }
    if(req.query.name === undefined){
      res.status(422)
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
    const yearNow = new Date().getFullYear();
    const monthNow = new Date().getMonth();
    const dayNow = new Date().getDate();
    const findUser = users.map((user:User) => {
      if(user.name === req.query.name){
        return {...user, balance: user.balance + addBalance, extract: [{
          value: addBalance,
          date: `${dayNow}/${monthNow}/${yearNow}`,
          description: `Depósito no valor de ${addBalance}`,
        }]}
      }else{
        return user
      }
    })
    users = findUser
    console.log(users)
    const resposta = `Nome: ${findCpf.name}, Saldo atual: R$ ${findCpf.balance + addBalance}`
    res.status(200).send(resposta)  
  }catch(error:any){
    res.send(error.message)
  }
})

app.post("/addBill/:cpf", (req: Request, res: Response) => {
  try{
    const { value, date, description }:Extract = req.body
    if(value <=0){
      res.status(422)
      throw new Error("Valor inserido invalido")
    }
    if( typeof value !== "number"){
      res.status(422)
      throw new Error("Insira um numero para o valor a pagar!")
    }
    if( typeof date !== "string"){
      res.status(422)
      throw new Error("Insira a data no formato dd/mm/aaaa!")
    }
    if( typeof description !== "string"){
      res.status(422)
      throw new Error("Insira um texto para a descrição!")
    }
    if(req.query.name === undefined){
      res.status(422)
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
    
    const payYear:number = Number(conversorYear(date))
    const payhMonth:number = Number(conversorMonth(date))
    const payDay:number = Number(conversorDay(date))

    if(payYear < yearNow || //Ano menor que o atual
      (payYear === yearNow && payhMonth < monthNow) || //Mes menor que o atual
      (payYear === yearNow && payhMonth === monthNow && payDay < dayNow)){ //Dia menor que o atual
        res.status(422)
        throw new Error("Informe um dia de pagamento para durante ou depois do dia atual")
      }
    const findUser = users.map((user:User) => {
      if(user.name === req.query.name){
        return {...user, extract: [...user.extract,{
          value: value,
          date: date,
          description: description,
        }]}
      }else{
        return user
      }
    })
    users = findUser
    console.log(users)
    const resposta = `Valor registrado será debitado até o final do dia ${date}`
    res.status(200).send(resposta)  
  }catch(error:any){
    res.send(error.message)
  }
})

app.put("/payBill/:cpf", (req: Request, res: Response) => {
  try{
    if(req.query.name === undefined){
      res.status(422)
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
    const findUser = users.map((user:User) => {
      if(user.name === req.query.name){
        let totalToPay = 0
        const updateBills = user.extract.map((bill:Extract)=>{
          const payYear:number = Number(conversorYear(bill.date))
          const payhMonth:number = Number(conversorMonth(bill.date))
          const payDay:number = Number(conversorDay(bill.date))
          if(payYear < yearNow || //Ano menor que o atual
            (payYear === yearNow && payhMonth < monthNow) || //Mes menor que o atual
            (payYear === yearNow && payhMonth === monthNow && payDay <= dayNow)){ //Dia menor ou igual ao atual
              totalToPay += bill.value
              return {...bill, description: "paid" }
            }
            else{
              return bill
            }
          }).filter((bill)=>{
            return bill.description !== "paid"
          })
        return {...user, balance: user.balance - totalToPay, extract: updateBills}
      }else{
        return user
      }
    })
    users = findUser
    console.log(users)
    const resposta = `Todas as contas com data para hoje ou antes foram pagas`
    res.status(200).send(resposta)  
  }catch(error:any){
    res.send(error.message)
  }
})
