import axios from 'axios'
import { useEffect, useState } from 'react'
import { baseUrl } from '../constants/BaseUrl'

export const GetLoterias = () => {
    const [loterias,setLoterias] = useState([])
    useEffect (()=>{
    axios.get(`${baseUrl}/loterias`)
    .then((response) => {
      setLoterias(response.data);
    }).catch((erro) => {
      console.log(erro);
    })
    },[])
    return loterias
}