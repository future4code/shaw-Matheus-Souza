import React from 'react'
import {  MainContainer } from './style'
import Header from '../../components/Header/Header'
import logoHome from '../../assets/img/logoHome.png'

const Home = () => {
  return (
    <MainContainer>
        <Header></Header>
        <h2>Faça parte da rede social que mais cresce desce sua criação, encontre seus amigos, mesmo os do outro lado da galaxia!!</h2>
        <img className='Logo' src={logoHome} alt='logo da Home'/>
    </MainContainer>
  )
}

export default Home