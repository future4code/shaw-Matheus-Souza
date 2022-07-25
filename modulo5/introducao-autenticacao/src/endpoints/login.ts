import { Request, Response } from "express";
import app from "../app";
import { generateToken } from "../service/GenerateToken";
import { getUserByEmail } from "../data/GetUserByEmail";

app.post("/user/login", async (req: Request, res: Response) => {
    try {
      // Item b. Validação do email
      if (!req.body.email || req.body.email.indexOf("@") === -1) {
        throw new Error("Invalid email");
      }
  
      const userData = {
        email: req.body.email,
        password: req.body.password,
      };
  
  
      const user = await getUserByEmail(userData.email);
  
      if (user.password !== userData.password) {
        throw new Error("Invalid password");
      }
  
      
      const token = generateToken({
        id: user.id,
      });
  
      res.status(200).send({
        token,
      });
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
  });