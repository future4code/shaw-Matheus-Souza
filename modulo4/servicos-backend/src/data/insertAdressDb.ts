import { Address } from "../types/typeAddress";
import { connection } from "./connection";

export default async function insertAdressDb(adress: Address) {

    const { logradouro,bairro,cidade,estado} = adress

    await connection("adress").insert({
        logradouro,
        bairro,
        cidade,
        estado
    })

}