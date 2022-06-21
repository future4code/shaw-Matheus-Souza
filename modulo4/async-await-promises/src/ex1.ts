import axios from "axios"
import { baseURL } from "./baseURL"

// a) axios.get(`${baseURL}/subscribers`)

// b) async function getSubscribers(): Promise<any[]>

// c)
async function getSubscribers(): Promise<any[]> {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
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