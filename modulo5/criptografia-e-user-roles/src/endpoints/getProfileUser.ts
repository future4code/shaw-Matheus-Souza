import { Request, Response } from "express";
import { getUserById } from "../data/GetUserById";
import { getData } from "../service/getData";

export const getProfile = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;

      const authenticationData = getData(token);

      if (authenticationData.role !== "normal") {
        throw new Error("Only a normal user can access this funcionality");
      }

      const user = await getUserById(authenticationData.id);

      res.status(200).send({
        id: user.id,
        email: user.email,
        role: authenticationData.role,
      });
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
}; 