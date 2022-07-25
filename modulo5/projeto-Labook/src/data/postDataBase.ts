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

    public getPostById = async (id: string): Promise<any> => {
      try {

        const result = await this.getConnection()
          .select("*")
          .from(TABLE_NAME)
          .where({ id });

        if(!result[0]){
          throw new Error("Postagem não encontrada");
        }
        return result[0];
      } catch (error:any) {
        throw new Error(error.sqlMessage || error.message);
      }
    }
} 