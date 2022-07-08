import { Request, Response } from "express";
import { UserBusiness } from "../business/userBusiness";
import { user } from "../types/user";

export const signup = async ( req: Request, res: Response) => {
   try {
        const userBusi = new UserBusiness()
        const newUser:user = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        };
        const token: string = await userBusi.createUser(newUser)

        res.status(201).send({
            message: "Cadastro realizado com sucesso!",
            token
        })

    } catch (error:any) {
      res.status(400).send(error.message)
   }
} 