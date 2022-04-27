import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { pagGerenciar, pagInicial } from '../../routes/coordinator'
import { MainContainer } from './style'

const Header = () => {
    const navegar = useNavigate()
    const params = useParams()
    console.log(params)

  return (
    <MainContainer>
        <h1>Labex</h1>
        {params.page === "gerenciar" || params.modal === "novaViagem" ? 
        <button onClick={()=>pagInicial(navegar)}>Logout</button>
        :
        <button onClick={()=>pagGerenciar(navegar,"gerenciar")}>Login</button>
        }
    </MainContainer>
  )
}

export default Header