import axios from "axios"
import { baseURL } from "./baseURL"

const news = {
    title: "Brasil conquista hexa no catar",
    content: "Com um placar de 10x0 Brasil contra a França prova que o futebol sulamericano não está pra trás",
    date: Date.now()
}

// a) 
// b)
async function createNews(
    title: string,
    content: string,
    date: number
  ): Promise<void> {
    await axios.put(`${baseURL}/news`, {
      title: title,
      content: content, 
      date: date
    });
  }

const main = async (): Promise<void> =>{
    try{
        const result = await createNews(news.title, news.content,news.date)
        console.log(result)
    }catch(erro:any){
        const resp = erro.response?.data || erro.message
        console.log(resp)
    }
}
main()