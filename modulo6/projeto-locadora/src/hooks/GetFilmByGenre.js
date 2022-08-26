import axios from 'axios'
import { useEffect, useState } from 'react'
import { api_key } from '../constants/api_key'
import { baseUrl } from '../constants/baseUrl'

export const GetFilmByGenre = (page,genre,location) => {
    const [newList,setNewList] = useState({})
    useEffect (()=>{
        axios.get(`${baseUrl}/discover/movie?api_key=${api_key}&language=pt-BRL&page=${page}&with_genres=${genre}`)
        .then((response) => {
            console.log(response);
            setNewList(response.data)
        })
        .catch((error) => {
            console.log(error);
        })
    },[location])
    return newList
}