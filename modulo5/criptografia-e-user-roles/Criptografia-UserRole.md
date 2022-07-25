### Exercicio 1

a)  Rounds - também chamado de cost, esta relacionado a quantas vezes o codigo ira embaralhar a informação, então quanto maior o round, maior o tempo de execução do codigo, mas també será maior a segurança aplicada.
    Salt - 

b)
~~~typescript
export const hash = async(s: string): Promise<string> => {
    const rounds = Number(process.env.BCRYPT_COST);
    const salt = await bcrypt.genSalt(rounds);
    const result = await bcrypt.hash(s, salt);
    return result;
}
~~~

c)
~~~typescript
export const compare = async(s: string, hash: string): Promise<boolean> => {
    return bcrypt.compare(s, hash);
}
~~~

### Exercicio 2

a) O cadastro, não faz sentido modificar o login primeiro, tanto usuarios antigos como novos não iriam poder logar dessa forma.

b)
~~~typescript
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
        password: req.body.password
      };
    
      const id:string = generateId();
  
      const hashPassword = await hash(userData.password);
  
      await createUser(id, userData.email, hashPassword);
  
      const token = generateToken(id);
  
      res.status(200).send({
        token,
      });
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
};
~~~

c)
~~~typescript
import { Request, Response } from "express"
import { getUserById } from "../data/GetUserById";
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
    
        const user = await getUserById(userData.email);
    
        const compareResult = await compare(
          userData.password,
          user.password
        );
    
        if (!compareResult) {
          throw new Error("Invalid password");
        }
    
        const token = generateToken(user.id);
    
        res.status(200).send({
          token,
        });
      } catch (err:any) {
        res.status(400).send({
          message: err.message,
        });
      }
};
~~~

### Exercicio 3

a)
~~~sql
ALTER TABLE User ADD COLUMN role VARCHAR(255) DEFAULT "normal";
~~~

b)
~~~typescript
import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../types";

const expiresIn = "1min"

export const generateToken = (input: AuthenticationData): string => {
  const token = jwt.sign(
    {
      id: input.id,
      role: input.role,
    },
    process.env.JWT_KEY as string,
    {
      expiresIn
    }
  );
  return token;
} 
/////////////
import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../types";

export const getData = (token: string): AuthenticationData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
    role: payload.role
  };
  return result;
}; 
//////////////
export type AuthenticationData = {
   id: string;
   role:string
}
~~~

c)
~~~typescript
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
~~~

### Exercicio 4

a)
~~~typescript
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
~~~