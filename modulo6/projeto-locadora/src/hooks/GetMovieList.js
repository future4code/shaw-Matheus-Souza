import axios from 'axios'
import { useEffect, useState } from 'react'
import { api_key } from '../constants/api_key'
import { baseUrl } from '../constants/baseUrl'

export const GetMovieList = (page) => {
    const [movie,setMovie] = useState([])
    useEffect (()=>{
        axios.get(`${baseUrl}/movie/popular?api_key=${api_key}&language=pt-BRL&page=${page}`)
        .then((response) => {
            console.log(response.data)
            setMovie(response.data.results)
        })
        .catch((error) => {
            console.log(error);
        })
    },[])
    return movie
}