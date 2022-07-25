import axios from 'axios'
import { useEffect, useState } from 'react'
import { baseUrl } from '../constants/BaseUrl'

export const GetNumeros = (concursoId, concurso) => {
    const [numeros,setNumeros] = useState([])
    const [infs,setInfs] = useState([])
    useEffect (()=>{
        if(concursoId){
            axios.get(`${baseUrl}/concursos/${concursoId}`)
                .then((response) => {
                    setInfs(response.data)
                    setNumeros(response.data.numeros)
                })
                .catch((error) => {
                    console.log("Deu erro", error);
                })   
          }
    },[concurso])
    return [numeros,infs]
}