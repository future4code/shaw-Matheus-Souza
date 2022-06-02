import React, { useState } from 'react'
import { toHome, toLogin, toRegister } from '../../routes/coordinator'
import { Botoes, MainContainer, Opcoes } from './styled'
import marca from '../../assets/img/marca.png'
import logo from '../../assets/img/logo.png'
import back from '../../assets/img/back.png'
import { useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
    const [mostrar,setMostrar] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()

    const logout = () =>{
        localStorage.removeItem("token")
        toHome(navigate)
    }

    const mostraOpcoes = () =>{
        setMostrar(!mostrar)
    }

  return (
    <MainContainer>
        <div className='imgs'>
            <img src={logo} alt='logo'/>
            <img src={marca} alt='marca'/>
        </div>
        {location.pathname === '/login' || location.pathname === '/cadastro' ? 
        <img src={back} alt='Voltar' onClick={()=>toHome(navigate)}/> 
        :
            <>{location.pathname === "/" ? 
                <Botoes>
                    <button onClick={mostraOpcoes}>Login</button>
                    <Opcoes mostrar={mostrar}>
                        <button onClick={()=>toLogin(navigate)}>Entrar</button>
                        <button onClick={()=>toRegister(navigate)}>Cadastrar</button>
                    </Opcoes>
                </Botoes>
            : <button onClick={logout}>Logout</button>}</>
        }
    </MainContainer>
  )
}

export default Header