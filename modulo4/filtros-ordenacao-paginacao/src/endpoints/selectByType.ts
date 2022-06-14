import { connection } from "../data/connection"

export default async function selectByType(type:any):Promise<any> {
   const result = await connection.raw(`
      SELECT *
      FROM aula48_exercicio
      WHERE type like "%${type}%";
   `)

   return result[0]
}