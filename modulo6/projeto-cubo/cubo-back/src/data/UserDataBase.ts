import { BaseDatabase } from "./BaseDataBase";

const TABLE_NAME = "Participantes"

export class UserDataBase extends BaseDatabase{
   public createUser= async( 
        first_name: string,
        last_name: string,
        participation: number,
      ): Promise<void> => {
      try {
        await this.getConnection()
          .insert({
            first_name,
            last_name,
            participation,
          })
          .into(TABLE_NAME);
      } catch (error:any) {
        throw new Error(error.sqlMessage || error.message);
      }
    }

    public getUsers = async (): Promise<any> => {
      try {

        const result = await this.getConnection()
          .select("*")
          .from(TABLE_NAME);

        if(!result){
          throw new Error("Sem usuários registrados");
        }
        return result;
      } catch (error:any) {
        throw new Error(error.sqlMessage || error.message);
      }
    }

    public getUserByLast_name = async (last_name:string): Promise<any> => {
      try {

        const [result] = await this.getConnection()
          .select("*")
          .from(TABLE_NAME)
          .where("last_name", last_name);
        
        return result;
      } catch (error:any) {
        throw new Error(error.sqlMessage || error.message);
      }
    }
} 