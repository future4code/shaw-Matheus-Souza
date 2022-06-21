import { app } from "./app";
import { Request, Response } from "express"
import { getAllRecipes } from "./endpoints/getAllRecipes";
import selectAllUsers from "./endpoints/selectAllUsers";
import { connection } from "./data/connection";
import selectByName from "./endpoints/sellectByName";
import selectByType from "./endpoints/selectByType";
import orderByQuery from "./endpoints/orderByQuery";
import selectByPage from "./endpoints/selectByPages";
import selectByAll from "./endpoints/selectByAll";

app.get("/recipes", getAllRecipes)

// 1.
// a)
export const getUserByName = async(req: Request,res: Response): Promise<void> =>{
    try {
        const name = req.query.name
        const users = await selectByName(name)
        if(!users.length){
            res.statusCode = 404
            throw new Error("Nenhum usuario corresponde ao nome")
        }

        res.status(200).send(users)
        
    } catch (error:any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}

app.get("/users", getUserByName)

// b)

export const getUserByType = async(req: Request,res: Response): Promise<void> =>{
    try {
        const type = req.params.type
        const users = await selectByType(type)
        if(!users.length){
            res.statusCode = 404
            throw new Error("Não houve correspondencia com type informado")
        }

        res.status(200).send(users)
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
}

app.get("/users/:type", getUserByType)

// 2.

export const getByOrder = async(req: Request,res: Response): Promise<void> =>{
    try {
        let order = req.query.order
        let sort = req.query.sort

        if(order !== "asc" && order !== "desc"){
            order = "asc"
        }
        if(sort !== "name" && sort !== "type"){
            sort = "email"
        }
        const users = await orderByQuery(sort,order)
 
        res.status(200).send(users)
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
}

app.get("/order", getByOrder)

// 3.

export const getByPages = async(req: Request,res: Response): Promise<void> =>{
    try {
        let page = Number(req.params.page)
        if(page < 1 || isNaN(page)) {
         page = 1
        }
        const size = 5
        let offset = (page-1) * size
        const users = await selectByPage(size, offset)
        
        if(!users.length){
            res.statusCode = 404
            throw new Error("No recipes found")
        }
        
        res.status(200).send(users)
        
    } catch (error:any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
}

app.get("/page/:page", getByPages)

export const getByJoinAll = async(req: Request,res: Response): Promise<void> =>{
    try {
        const name = req.query.name
        let search = req.query.search
        let order = req.query.order
        let sort = req.query.sort

        if(search !== "type" && search !== "email"){
            search = "name"
        }
        if(order !== "asc" && order !== "desc"){
            order = "desc"
        }
        if(sort !== "email" && sort !== "type"){
            sort = "name"
        }
        let page = Number(req.params.page)
        if(page < 1 || isNaN(page)) {
            page = 1
        }
        const size = 5
        let offset = (page-1) * size
        
        const users = await selectByAll(search,name,sort,order,size, offset)
        if(!users.length){
            res.statusCode = 404
            throw new Error("Não há usuarios correspondentes")
       }
 
       res.status(200).send(users)
       
    } catch (error:any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
}

app.get("/join/:page", getByJoinAll)