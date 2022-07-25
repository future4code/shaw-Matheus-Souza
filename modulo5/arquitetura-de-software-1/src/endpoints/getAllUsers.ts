import { Request, Response } from "express"
import { UserBusiness } from "../business/userBusiness"

export const get = async(req: Request, res: Response)=> {

   try {

      const token = req.headers.authorization!;
      const userBusi = new UserBusiness()
      const users = await userBusi.getAllUsers(token);

      res.send(users).status(200);

  } catch (error:any) {
      res.send({ message: error.message }).status(error.status);
  }
}