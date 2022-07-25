import knex from "knex";
import dotenv from "dotenv"
dotenv.config()
console.log(process.env.DB_USER)
 export const connection = knex({
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_SCHEMA,
    },
}); 

export class BaseDatabase {
    private static connection = knex({
        client: 'mysql',
        connection: {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_SCHEMA,
            port: 3306,
            multipleStatements: true
        }
    })
    protected getConnection() {
        return BaseDatabase.connection
    }
}