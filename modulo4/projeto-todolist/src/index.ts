import { Request, Response } from "express"
import connection from "./connection"
import app from "./app"

type User = {
    id: string,
    name: string,
    nickname: string,
    email: string,
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
  const yearNow = new Date().getFullYear();
  const monthNow = new Date().getMonth();
  const dayNow = new Date().getDate();

const createUser = async (
    id: string,
    name: string,
    nickname: string,
    email: string,
): Promise<void> => {
    await connection
        .insert({
        id: id,
        name: name,
        nickname: nickname,
        email: email,
        }).into("Users");
};

const editUser = async (
    id: string,
    name: string,
    nickname: string,
    email: string,
): Promise<any> => {
    await connection("Users").update({
        name: name,
        nickname: nickname,
        email: email,
    }).where("id", id);
};

const userById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
          SELECT * FROM Users WHERE id = "${id}"
    `);
    return result[0][0];
};

const allUsers = async (): Promise<any> => {
    const result = await connection.raw(`
          SELECT * FROM Users
    `);
    return result[0];
};

const createTask = async (
    id:string,
    title: string,
    description: string,
    limitDate: string,
    creatorUserId: string,
): Promise<void> => {
    await connection
        .insert({
        id: id,
        title: title,
        description: description,
        limitDate: limitDate,
        creatorUserId: creatorUserId,
        }).into("Tasks");
};

app.post("/user", async (req: Request, res: Response) => {
    try {
    const id = Math.floor(Date.now() * Math.random()).toString(5)
    if( !req.body.name || !req.body.nickname || !req.body.email){
        res.status(422)
        throw new Error("Falta alguma informação do usuário")
    }
    await createUser(
        id,
        req.body.name,
        req.body.nickname,
        req.body.email,
    );
    res.status(200).send("Usuário criado com sucesso");
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
});

app.get("/user/:id", async (req: Request, res: Response) => {
    try {
        const userId = req.params.id
        if( userId === undefined){
            res.status(422)
            throw new Error("Id do usuário não foi informado")
        }
        let id = ""
        let nickname = ""
        await userById(userId).then(result => {
            if(!result){
                res.status(409)
                throw new Error("Não foi possivel encontrar usuário")
            }
            id = result.id
            nickname = result.nickname
        })
    res.status(200).send({id,nickname});
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
});

app.put("/user/edit/:id", async (req: Request, res: Response) => {
    try {
        const userId = req.params.id
        let name = ""
        let nickname = ""
        let email = ""
        await userById(userId).then(result => {
            if(!result){
                res.status(409)
                throw new Error("Não foi possivel encontrar usuário")
            }
            name = result.name
            nickname = result.nickname
            email = result.email
        })
        if(req.body.name){
            name=req.body.name
        }
        if(req.body.nickname){
            nickname =req.body.nickname
        }
        if(req.body.email){
            email=req.body.email
        }
        if( req.body.name === "" || req.body.nickname === "" || req.body.email === ""){
            res.status(422)
            throw new Error("Insira a nova informação")
        }
        await editUser(userId,name,nickname,email);
    res.status(200).send("Dados atualizados com sucesso");
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
});

app.post("/task", async (req: Request, res: Response) => {
    try {
    const id = Math.floor(Date.now() * Math.random()).toString(5)
    if( !req.body.title || !req.body.description || !req.body.limitDate || !req.body.creatorUserId){
        res.status(422)
        throw new Error("Falta alguma informação da tarefa")
    }
    await userById(req.body.creatorUserId).then(result => {
        if(!result){
            res.status(409)
            throw new Error("Id de usuário não é valido")
        }
    })
    const taskYear:number = Number(conversorYear(req.body.limitDate))
    const taskMonth:number = Number(conversorMonth(req.body.limitDate))
    const taskDay:number = Number(conversorDay(req.body.limitDate))
    const dateSQL:string = `${taskYear}/${taskMonth}/${taskDay}`

    if(taskYear < yearNow || //Ano menor que o atual
      (taskYear === yearNow && taskMonth < monthNow) || //Mes menor que o atual
      (taskYear === yearNow && taskMonth === monthNow && taskDay < dayNow)){ //Dia menor que o atual
        res.status(422)
        throw new Error("Informe uma data para hoje ou depois do dia atual")
    }
    await createTask(
        id,
        req.body.title,
        req.body.description,
        dateSQL,
        req.body.creatorUserId,
    );
    res.status(200).send("Tarefa criada com sucesso");
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
});