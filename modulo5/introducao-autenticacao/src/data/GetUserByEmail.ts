import { connection } from "./BaseDatabase";


export const getUserByEmail = async(email: string): Promise<any> => {
    const result = await connection
      .select("*")
      .from("User")
      .where({ email });
 
    return result[0];
}
