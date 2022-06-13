import axios from "axios"
import { baseURL } from "./baseURL"

type user = {
	id: string;
	name: string;
	email: string;
}

// a) Só se o retorno da promise não seguir a tipagem definida
// b) boa prática
// c)
const getSubscribers = async (): Promise<user[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data.map((res: any) => {
      return {
        id: res.id,
        name: res.name,
        email: res.email,
      };
    });
  };

const main = async (): Promise<void> =>{
    try{
        const result = await getSubscribers()
        console.log(result)
    }catch(erro:any){
        const resp = erro.response?.data || erro.message
        console.log(resp)
    }
}
main()