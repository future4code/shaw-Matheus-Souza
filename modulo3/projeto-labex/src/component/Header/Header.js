import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { pagGerenciar, pagInicial, abreLogin } from '../../routes/coordinator'
import { MainContainer } from './style'

const Header = () => {
    const navegar = useNavigate()
    const params = useParams()
    console.log(params)

  return (
    <MainContainer>
        <h1>Labex</h1>
        {params.log === "logado" || params.modal === "novaViagem" || params.page === "gerenciar" 
        // || params.modal === "inscricao" 
        ? 
        <div>
          {params.modal === "novaViagem" || params.page === "gerenciar" || params.modal === "inscricao"  ? 
          <button onClick={()=>pagInicial(navegar)}>Logout</button>
          :
          <div>
            <button onClick={()=>pagGerenciar(navegar,"gerenciar")}>Gerenciar</button>
            <button onClick={()=>pagInicial(navegar)}>Logout</button>
          </div>
          }         
        </div>
        :
        <button onClick={()=>abreLogin(navegar,"login")}>Login</button>
        }
    </MainContainer>
  )
}

export default Header