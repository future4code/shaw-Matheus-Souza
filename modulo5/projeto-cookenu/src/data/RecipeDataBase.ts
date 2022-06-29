import { connection } from "./BaseDatabase";

export const createRecipe = async (
    id: string, 
    title:string,
    description: string, 
    date_post: string) => {
  await connection("Recipe")
    .insert({
      id,
      title,
      description,
      date_post,
    });
};  

// export const getUserByInf = async(coluna:string, inf: string): Promise<any> => {
//     const result = await connection
//       .select("*")
//       .from("Usuario")
//       .where(coluna, inf);

//     return result[0];
// }