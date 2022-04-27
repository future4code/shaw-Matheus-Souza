import React from 'react'
import { MainContainer } from './style'
import { useParams } from 'react-router-dom'
import Header from '../../component/Header/Header'
import ListaDeViagens from '../../component/ListaDeViagens/ListaDeViagens'
import InscriçãoViagem from '../../modal/InscriçãoViagem/InscriçãoViagem'

const PaginaInicial = () => {
  const params = useParams()
  console.log(params)

  return (
    <MainContainer>
        <Header/>
        {params.modal === "inscricao" ? <InscriçãoViagem/> : null}
        <h1>
          Encontre viagens espaciais, explore a galaxia, ou se preferir cadastre-se e crie a propria viagem e chame os seus amigos
        </h1>
          <ListaDeViagens/>
    </MainContainer>
  )
}

export default PaginaInicial