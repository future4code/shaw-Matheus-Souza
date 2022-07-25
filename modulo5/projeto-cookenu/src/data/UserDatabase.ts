import { connection } from "./BaseDatabase";

export const createUser = async (
    id: string, 
    name:string,
    email: string, 
    password: string) => {
  await connection("Usuario")
    .insert({
      id,
      name,
      email,
      password,
    });
};  

export const getUserByInf = async(coluna:string, inf: string): Promise<any> => {
    const result = await connection
      .select("*")
      .from("Usuario")
      .where(coluna, inf);

    return result[0];
}