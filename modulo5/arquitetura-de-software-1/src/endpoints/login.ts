import { Request, Response } from "express"
import { UserBusiness } from "../business/userBusiness"
import { dataLogin, user } from '../types/user'

 export const login = async(req: Request, res: Response)=> {

   try {

      const loginData:dataLogin = {
           email: req.body.email,
           password: req.body.password
      };

      const userBusi = new UserBusiness()
      const token = await userBusi.getUserByEmail(loginData);

      res.status(200).send({ token });

   } catch (error:any) {
       res.status(400).send({ error: error.message });
   }
}