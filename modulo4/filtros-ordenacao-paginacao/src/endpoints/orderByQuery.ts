import { connection } from "../data/connection"

export default async function orderByQuery(sort:any,order:any):Promise<any> {
   const result = await connection.raw(`
    SELECT *
    FROM aula48_exercicio
    ORDER BY ${sort} ${order}
   `)

   return result[0]
}