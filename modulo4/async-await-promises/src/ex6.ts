import axios from "axios"
import { baseURL } from "./baseURL"

type user = {
	id: string;
	name: string;
	email: string;
}

const sendUser:user[] = [{
    id: 'eb98add9-6981-41d6-8d9f-d63258486296',
    name: 'País, o Basco',
    email: 'pais.basco@labenu.com.br'
}]
// a)
// b)
// c)
const sendNotifications = async (
    users: user[],
    message: string
  ): Promise<void> => {
  
      try {
        const promises = users.map(user =>{
          return axios.post(`${baseURL}/notifications`, {
            subscriberId: user.id,
            message: message,
          })
        })
      
        await Promise.all(promises);
  
      } catch {
          console.log("Error");
      }
};

const main = async (): Promise<void> =>{
    try{
        const result = await sendNotifications(sendUser,"ola mundo")
        console.log(result)
    }catch(erro:any){
        const resp = erro.response?.data || erro.message
        console.log(resp)
    }
}
main()