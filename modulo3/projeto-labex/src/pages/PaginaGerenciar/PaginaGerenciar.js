import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../../component/Header/Header'
import ListaGerencia from '../../component/ListaGerencia/ListaGerencia'
import CriarViagem from '../../modal/CriarViagem/CriarViagem'
import { abreViagem, pagInicial, areaLogado } from '../../routes/coordinator'
import { MainContainer } from './style'

const PaginaGerenciar = () => {
    const navegar = useNavigate()
    const params = useParams()
    console.log(params)

    useEffect(()=>{
        const token =localStorage.getItem("token");
        if(token === null){
          console.log("não esta logado")
          pagInicial(navegar)
        }
    },[])

  return (
    <MainContainer>
        {params.modal === "novaViagem" ? <CriarViagem/> : null}
        <Header></Header>
        <button onClick={()=>areaLogado(navegar,"logado")}>Voltar</button>
        <button onClick={()=>abreViagem(navegar,"novaViagem")}>Criar Viagem</button>
        <h1>Viagens para gerenciar</h1>
        <ListaGerencia/>
    </MainContainer>
  )
}

export default PaginaGerenciar