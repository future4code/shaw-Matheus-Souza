import axios from 'axios'
import { useEffect, useState } from 'react'
import { api_key } from '../constants/api_key'
import { baseUrl } from '../constants/baseUrl'

export const GetGenres = () => {
    const [genres,setGenres] = useState([])
    useEffect (()=>{
        axios.get(`${baseUrl}/genre/movie/list?api_key=${api_key}&language=pt-BRL`)
        .then((response) => {
            setGenres(response.data.genres)
        })
        .catch((error) => {
            console.log(error);
        })
    },[])
    return genres
}