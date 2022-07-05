import { connection } from "../connection";
import { user } from "../types/user";

// export const insertUser = async(
//    user: user
// ) => {
//    await connection.insert({
//       id: user.id,
//       name: user.name,
//       email: user.email,
//       password: user.password,
//       role: user.role
//    }).into('User_Arq')
// }

export class UserDataBase{

   public createUser= async( 
      id: string,
      email: string,
      name: string,
      password: string,
		role: string
      ): Promise<void> => {
      try {
        await connection()
          .insert({
            id,
            email,
            name,
            password,
				role
          })
          .into('User_Arq');
      } catch (error:any) {
        throw new Error(error.sqlMessage || error.message);
      }
    }
}