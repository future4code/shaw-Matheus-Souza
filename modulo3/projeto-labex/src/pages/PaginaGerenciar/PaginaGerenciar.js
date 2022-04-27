import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../../component/Header/Header'
import CriarViagem from '../../modal/CriarViagem/CriarViagem'
import { pagInicial, voltarPag, abreViagem } from '../../routes/coordinator'
import { MainContainer } from './style'

const PaginaGerenciar = () => {
    const navegar = useNavigate()
    const params = useParams()
    console.log(params)
 
  return (
    <MainContainer>
        {params.modal === "novaViagem" ? <CriarViagem/> : null}
        <Header></Header>
        <button onClick={()=>pagInicial(navegar)}>Inicial</button>
        <button onClick={()=>voltarPag(navegar)}>Voltar</button>
        <button onClick={()=>abreViagem(navegar,"novaViagem")}>Criar Viagem</button>
        <button onClick={()=>voltarPag(navegar)}>Logout</button>
        <h1>Viagens para gerenciar</h1>
    </MainContainer>
  )
}

export default PaginaGerenciar