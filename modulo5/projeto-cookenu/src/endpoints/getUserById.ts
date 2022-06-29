import { Request, Response } from "express";
import { getUserByInf } from "../data/UserDatabase";
import { getData } from "../service/getData";

export const getProfileById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const token = req.headers.authorization as string;
        const authenticationData = getData(token);
        console.log(authenticationData)
        
        if (!authenticationData) {
            throw new Error("Token is invalid");
        }

        const user = await getUserByInf("id",id);

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