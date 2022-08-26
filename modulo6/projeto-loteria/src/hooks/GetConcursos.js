import axios from 'axios'
import { useEffect, useState } from 'react'
import { baseUrl } from '../constants/BaseUrl'

export const GetConcursos = () => {
    const [concursos,setConsursos] = useState([])
    useEffect (()=>{
        axios.get(`${baseUrl}/loterias-concursos`)
        .then((response) => {
          setConsursos(response.data)
        })
        .catch((error) => {
            console.log("Deu erro", error);
        })
    },[])
    return concursos
}