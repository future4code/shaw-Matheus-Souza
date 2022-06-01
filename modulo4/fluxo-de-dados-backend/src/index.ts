import express from "express"
import cors from "cors"
import { produtos } from './data';

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => console.log("Servidor ativo"))

app.get("/test", (req, res)=>{
  res.send("Resposta chegando")
})

app.post("/addProduct", (req, res)=>{
  type Product = {
    id: string,
    name: string,
    price: number    
  }
  try{
    const id = Math.floor(Date.now() * Math.random()).toString(5) 
    const { name, price }: Product = req.body
    if( !name || !price){
      res.status(422)
      throw new Error("Algum campo do produto está vazio")
    }
    if( price <= 0){
      res.status(422)
      throw new Error("Preço deve ser maior que zero!")
    }
    if( typeof price !== "number"){
      res.status(422)
      throw new Error("Insira um numero para o preço!")
    }
    if( typeof name !== "string"){
      res.status(422)
      throw new Error("Insira um nome para o produto!")
    }
    const [findProduct] = produtos.filter((produto:Product) => {
      return produto.name === name
    })
    if(findProduct){
      console.log(findProduct)
      res.status(409)
      throw new Error("Produto já existe em nosso banco")
    }
    produtos.push({id,name,price})
    res.status(201).send(produtos)
  }catch (error:any){
    res.send(error.message)
  }
})

app.get("/products", (req, res)=>{
  res.status(201).send(produtos)
})

app.put("/changePrice/:id", (req, res)=>{
  type Product = {
    id: string,
    name: string,
    price: number    
  }
  try{
    const { price }: Product = req.body
    if( !price ){
      res.status(422)
      throw new Error("Insira o novo valor")
    }
    if( price <= 0){
      res.status(422)
      throw new Error("Preço deve ser maior que zero!")
    }
    if( typeof price !== "number"){
      res.status(422)
      throw new Error("Insira um numero para o preço!")
    }
    const [findId] = produtos.filter((produto:Product) => {
      return produto.id === req.params.id
    })
    if(!findId){
      res.status(409)
      throw new Error("Id não existe")
    }
    const updateValue = produtos.map((produto:Product) => {
      if(produto.id === req.params.id){
        if(produto.price === price){
          res.status(409)
          throw new Error("Digite um valor diferente")
        }
        return {...produto, price: price}
      }else{
        return produto
      }
    })
    res.status(201).send(updateValue)
  }catch (error:any){
    res.send(error.message)
  }
})

app.delete("/deleteProduct/:id", (req, res)=>{
  type Product = {
    id: string,
    name: string,
    price: number    
  }
  try{
    const [findId] = produtos.filter((produto:Product) => {
      return produto.id === req.params.id
    })
    if(!findId){
      res.status(409)
      throw new Error("Id não existe")
    }
    const newList = produtos.filter((produto:Product) => {
      return produto.id !== req.params.id
    })
    res.status(200).send(newList)
  }catch (error:any){
    res.send(error.message)
  }
})
