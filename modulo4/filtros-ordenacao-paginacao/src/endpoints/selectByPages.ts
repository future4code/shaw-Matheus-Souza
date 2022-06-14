import { connection } from "../data/connection"

export default async function selectByPage(size:any, offset:any):Promise<any> {
   const result = await connection.raw(`
        SELECT *
        FROM aula48_exercicio
        limit ${size}
        offset ${offset};
   `)

   return result[0]
}