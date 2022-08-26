import axios from 'axios'
import { useEffect, useState } from 'react'
import { baseURL } from '../constants/baseURL'

export const GetList = (breed,update) => {
    const [list,setList] = useState([])
    useEffect (()=>{
        const token = localStorage.getItem("token");
        axios.get(`${baseURL}/list?breed=${breed}`,{headers:{Authorization:token}})
        .then((response) => {
            setList(response.data.list)
        })
        .catch((error) => {
            console.log(error);
        })
    },[update])
    return list
}