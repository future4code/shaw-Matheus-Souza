import axios from 'axios'
import { useEffect, useState } from 'react'
import { api_key } from '../constants/api_key'
import { baseUrl } from '../constants/baseUrl'

export const GetDetails = (id,location) => {
    const [details,setDetails] = useState([])
    useEffect (()=>{
        axios.get(`${baseUrl}/movie/${id}?api_key=${api_key}&language=pt-BRL`)
        .then((response) => {
            setDetails(response.data)
        })
        .catch((error) => {
            console.log(error);
        })
    },[location])
    return details
}