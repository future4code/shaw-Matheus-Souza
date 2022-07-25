### Exercicio 1

a) Usar string é uma boa opção, pois ao comunicar com o banco de dados a informação se transforma em VARCHAR(255), sendo possivel enviar dados grandes como um id cheio de letras e numeros, aumentando a segurança e aleatoriedade na criação de tokens.

b)
~~~typescript
import { v4 } from "uuid";

export function generateId(): string {
    return v4();
}
~~~

### Exercicio 2

a)  O connection serve para fazer a conexão com o banco de dados do SQL, a constante createUser pega os dados de id, email e senha que recebeu e insere eles na tabela escolhida, no caso a User.

b)
~~~sql
CREATE TABLE User (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
~~~

c)
~~~typescript
import { connection } from "./BaseDatabase";

export const createUser = async (
   id: string, 
   email: string, 
   password: string) => {
 await connection("User")
   .insert({
     id,
     email,
     password,
   });
};
~~~

### Exercicio 3

a)

b)
~~~typescript
import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../types";

const expiresIn = "1min"

export const generateToken = (input: AuthenticationData): string => {
  const token = jwt.sign(
    {
        id: input.id
    },
    process.env.JWT_KEY as string,
    {
      expiresIn
    }
  );
  return token;
}
~~~

### Exercicio 4

a,b,c)
~~~typescript
import { Request, Response } from "express";
import app from "../app";
import { createUser } from "../data/CreateUserDB";
import { generateId } from "../service/GenerateID";
import { generateToken } from "../service/GenerateToken";

app.post("/user/signup", async (req: Request, res: Response) => {
   try {
     // Item b. Validação do email
     if (!req.body.email || req.body.email.indexOf("@") === -1) {
       throw new Error("Invalid email");
     }
 
     // Item c. Validação da senha
     if (!req.body.password || req.body.password.length < 6) {
       throw new Error("Invalid password");
     }
 
     const userData = {
       email: req.body.email,
       password: req.body.password,
     };
 
     const id = generateId();
 
   
     await createUser(id, userData.email, userData.password);
 
     const token = generateToken({
       id,
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
~~~

### Exercicio 5

a)
~~~typescript
import { connection } from "../data/BaseDatabase";


export const getUserByEmail = async(email: string): Promise<any> => {
    const result = await connection
      .select("*")
      .from("User")
      .where({ email });
 
    return result[0];
}
~~~

### Exercicio 6

a,b)
~~~typescript
import { Request, Response } from "express";
import app from "../app";
import { generateToken } from "../service/GenerateToken";
import { getUserByEmail } from "../service/GetUserByEmail";

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
~~~

### Exercicio 7

a)

b)
~~~typescript
import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../types";

export const getData = (token: string): AuthenticationData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
  };
  return result;
};
~~~

### Exercicio 8

a)
~~~typescript
import { connection } from "./BaseDatabase";


export const getUserById = async(id: string): Promise<any> => {
    const result = await connection
      .select("*")
      .from("User")
      .where({ id });
 
    return result[0];
}
~~~

b)
~~~typescript
import { Request, Response } from "express";
import app from "../app";
import { getUserById } from "../data/GetUserByID";
import { getData } from "../service/getData";

app.get("/user/profile", async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
  
     
      const authenticationData = getData(token);
  
      const user = await getUserById(authenticationData.id);
  
      res.status(200).send({
        id: user.id,
        email: user.email,
      });
    } catch (err:any) {
      res.status(400).send({
        message: err.message,
      });
    }
});
~~~