import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PaginaInicial from '../pages/PaginaInicial/PaginaInicial'

export const ProtecaoDePag = () => {
    const navegar = useNavigate()

    useEffect(()=>{
        const token =localStorage.getItem("token");
        if(token === null){
          console.log("não esta logado")
          PaginaInicial(navegar)
        }
      },[])
}
