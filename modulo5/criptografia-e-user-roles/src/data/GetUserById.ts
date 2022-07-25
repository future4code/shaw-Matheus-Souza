import { connection } from "./BaseDatabase";

export const getUserById = async(id: string): Promise<any> => {
    const result = await connection
      .select("*")
      .from("User")
      .where({ id });

    return result[0];
} 