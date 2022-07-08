import { POST_TYPES } from "../types/post";
import { BaseDatabase } from "./BaseDataBase";

const TABLE_NAME = "Post_Labook"

export class PostDataBase extends BaseDatabase{
   public createPost= async( 
        id:string,
        photo:string ,
        description:string ,
        post_date:string,
        type: POST_TYPES,
        user_id:string,
      ): Promise<void> => {
      try {
        await this.getConnection()
          .insert({
            id,
            photo,
            description,
            post_date,
            type,
            user_id
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