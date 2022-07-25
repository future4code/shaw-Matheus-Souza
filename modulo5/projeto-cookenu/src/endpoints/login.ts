import { Request, Response } from "express"
import { getUserByInf } from "../data/UserDatabase";
import { compare } from "../service/generateHash";
import { generateToken } from "../service/generateToken";

export const login = async (req: Request, res: Response) => {
    try {
        if (!req.body.email || req.body.email.indexOf("@") === -1) {
          throw new Error("Invalid email");
        }

        const userData = {
          email: req.body.email,
          password: req.body.password,
        };

        if ( !req.body.email ||!req.body.password ) {
            throw new Error("Some information is missing");
        }

        const user = await getUserByInf("email",userData.email);

        const compareResult = await compare(
          userData.password,
          user.password
        );

        if (!compareResult) {
          throw new Error("Invalid password");
        }

        const token = generateToken(user.id);

        res.status(200).send({access_token: token });
      } catch (err:any) {
        res.status(400).send({
          message: err.message,
        });
      }
};