import { BaseDatabase } from "./BaseDataBase";

const TABLE_NAME = "User_Labook"

export class UserDataBase extends BaseDatabase{
   public createUser= async( 
        id: string,
        name: string,
        email: string,
        password: string,
      ): Promise<void> => {
      try {
        await this.getConnection()
          .insert({
            id,
            name,
            email,
            password,
          })
          .into(TABLE_NAME);
      } catch (error:any) {
        throw new Error(error.sqlMessage || error.message);
      }
    }

    public getUserByEmail = async (email: string): Promise<any> => {
      try {

        const result = await this.getConnection()
          .select("*")
          .from(TABLE_NAME)
          .where({ email });

        if(!result[0]){
          throw new Error("Usuário não encontrado");
        }
        return result[0];
      } catch (error:any) {
        throw new Error(error.sqlMessage || error.message);
      }
    }

    public getAllUsers = async(): Promise<any[]> =>{

      try {
          const users: any = [];

          const result = await this.getConnection()
              .select("*")
              .from(TABLE_NAME);

          for(let user of result){
              users.push(user);
          }

          return users;

      } catch (error:any) {
          throw new Error(error.sqlMessage || error.message);
      }
    }

    public deleteUser = async(id: string): Promise<void> =>{

      try {
        await this.getConnection()
          .where({ id })
          .from(TABLE_NAME)
          .del()

      } catch (error:any) {
        throw new Error(error.sqlMessage || error.message);
      }
    }
} 