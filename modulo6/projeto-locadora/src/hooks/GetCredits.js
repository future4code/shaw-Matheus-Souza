import axios from 'axios'
import { useEffect, useState } from 'react'
import { api_key } from '../constants/api_key'
import { baseUrl } from '../constants/baseUrl'

export const GetCredits = (id,location) => {
    const [cast,setCast] = useState([])
    const [crew,setCrew] = useState([])
    useEffect (()=>{
        axios.get(`${baseUrl}/movie/${id}/credits?api_key=${api_key}&language=en-US`)
        .then((response) => {
            console.log(response.data);
            setCast(response.data.cast)
            setCrew(response.data.crew)
        })
        .catch((error) => {
            console.log(error);
        })
    },[location])
    return [cast,crew]
}