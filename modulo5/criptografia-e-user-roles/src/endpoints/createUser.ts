import { Request, Response } from "express"
import { createUser } from "../data/createUserDB";
import { hash } from "../service/generateHash";
import { generateId } from "../service/generateID";
import { generateToken } from "../service/generateToken";

export const signup = async (req: Request, res: Response) => {
    try {

      if (!req.body.email || req.body.email.indexOf("@") === -1) {
         throw new Error("Invalid email");
      }
  
      if (!req.body.password || req.body.password.length < 6) {
         throw new Error("Invalid password");
      }

      const userData = {
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
      };
    
      const id:string = generateId();
  
      const hashPassword = await hash(userData.password);
  
      await createUser(id, userData.email, hashPassword);
  
      const token = generateToken({id, role:userData.role});
  
      res.status(200).send({
        token,
      });
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
};