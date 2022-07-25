import { Request, Response } from "express";
import { getUserByInf } from "../data/UserDatabase";
import { getData } from "../service/getData";

export const getProfile = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;

      const authenticationData = getData(token);
      
      const user = await getUserByInf("id",authenticationData.id);

      res.status(200).send({
        id: user.id,
        name: user.name,
        email: user.email,
      });
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
};