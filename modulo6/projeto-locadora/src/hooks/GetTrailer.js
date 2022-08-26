import axios from 'axios'
import { useEffect, useState } from 'react'
import { api_key } from '../constants/api_key'
import { baseUrl } from '../constants/baseUrl'

export const GetTrailer = (id,location) => {
    const [trailer,setTrailer] = useState({})
    useEffect (()=>{
        axios.get(`${baseUrl}/movie/${id}/videos?api_key=${api_key}&language=en-US`)
        .then((response) => {
            const [filtroTrailer] = response.data.results.filter((trailer)=>{
                return trailer.name === "Official Trailer"
            })
            setTrailer(filtroTrailer)
        })
        .catch((error) => {
            console.log(error);
        })
    },[location])
    return trailer
}