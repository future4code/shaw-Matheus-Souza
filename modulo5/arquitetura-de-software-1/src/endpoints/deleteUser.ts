import { Request, Response } from "express"
import { UserBusiness } from "../business/userBusiness"

export const deleteUser = async(req: Request, res: Response)=> {

   try {
      const input = {
         id: req.params.id,
         token: req.headers.authorization!
      }
      const userBusi = new UserBusiness()
      await userBusi.deleteUser(input);

      res.status(200).send({ message: "Usuário apagado com sucesso" });

  } catch (error:any) {
      res.status(400).send({ error: error.message });
  }
}