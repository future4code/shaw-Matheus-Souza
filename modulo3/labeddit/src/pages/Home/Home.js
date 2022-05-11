import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toLogin, toRegister } from '../../routes/coordinator'
import { Botoes, Header, MainContainer } from './style'
import marca from '../../assets/img/marca.png'
import logo from '../../assets/img/logo.png'

const Home = () => {
    const navigate = useNavigate()
  return (
    <MainContainer>
        <Header>
            <div className='imgs'>
                <img src={logo}/>
                <img src={marca}/>
            </div>
            <Botoes>
                <button onClick={()=>toLogin(navigate)}>Entrar</button>
                <button onClick={()=>toRegister(navigate)}>Cadastrar</button>
            </Botoes>
        </Header>
    </MainContainer>
  )
}

export default Home