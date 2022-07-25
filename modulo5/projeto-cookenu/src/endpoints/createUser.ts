import { Request, Response } from "express"
import { createUser, getUserByInf } from "../data/UserDatabase";
import { hash } from "../service/generateHash";
import { generateId } from "../service/generateId";
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
         name: req.body.name,
         email: req.body.email,
         password: req.body.password,
      };

      if (!req.body.name || !req.body.email ||!req.body.password ) {
         throw new Error("Some user information is missing");
      }

      const email = await getUserByInf("email",userData.email)

      if(email){
         throw new Error("Email is already in use");
      }

      const id:string = generateId();

      const hashPassword = await hash(userData.password);

      await createUser(id, userData.name ,userData.email, hashPassword);

      const token = generateToken({id});

      res.status(200).send({access_token: token });
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
}; 