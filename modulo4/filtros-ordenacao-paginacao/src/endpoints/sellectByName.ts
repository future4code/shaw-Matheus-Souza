import { connection } from "../data/connection"

export default async function selectByName(name:any):Promise<any> {
   const result = await connection.raw(`
      SELECT *
      FROM aula48_exercicio
      WHERE name like "%${name}%";
   `)

   return result[0]
}