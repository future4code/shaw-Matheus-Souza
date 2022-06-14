import { connection } from "../data/connection"

export default async function selectByAll(
   search:any,
   name:any,
   sort:any, 
   order:any,
   size:any, 
   offset:any
   ):Promise<any> {
   const result = await connection.raw(`
        SELECT *
        FROM aula48_exercicio
        WHERE ${search} like "%${name}%"
        ORDER BY ${sort} ${order}
        limit ${size}
        offset ${offset};
   `)

   return result[0]
}