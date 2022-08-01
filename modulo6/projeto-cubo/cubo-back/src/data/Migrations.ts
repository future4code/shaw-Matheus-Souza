import { BaseDatabase } from "./BaseDataBase";

class Migrations extends BaseDatabase{

    private static PARTICIPANTES = "Participantes"

    async createTables(){
        try {
            await this.getConnection().raw(`
                CREATE TABLE IF NOT EXISTS ${Migrations.PARTICIPANTES} (
                    id INT PRIMARY KEY AUTO_INCREMENT,
                    first_name VARCHAR(255)  NOT NULL,
                    last_name VARCHAR(255)  NOT NULL,
                    participation INT NOT NULL
                );
            `)
        } catch (error:any) {
            console.log(error.message)
        }finally{
            BaseDatabase.destroyConnection()
        }
    }

}

new Migrations().createTables()